<template>
  <div v-if="isTrs" class="space-y-3">
    <!-- The prompt types itself out, then the screen comes up. -->
    <div class="flex items-center gap-2 text-xs text-faint">
      <span class="text-accent">$</span>
      <span>{{ typed }}</span>
      <span v-if="phase === 'typing' || phase === 'booting'" class="cursor-blink" />
    </div>

    <div v-if="phase === 'running'" class="inline-block">
      <div class="driver-bezel" @pointerdown="onPointer">
        <pre class="driver-screen">{{ frame }}</pre>
      </div>

      <div class="flex items-center justify-between gap-4 mt-2 text-[10px] text-faint">
        <span v-if="crashed" class="text-warn">CRASH · {{ score }}m · ← or → to retry</span>
        <span v-else-if="playing">{{ score }}m</span>
        <span v-else>← → to drive</span>
        <span v-if="best > 0">best {{ best }}m</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { theme } from '../theme';

/**
 * Driver. The type-in game Michael hand-coded on TI calculators and an
 * Apple II. Appears only on the Personal tab in the TRS-80 theme, so finding
 * it takes the right tab and the right machine.
 *
 * Runs itself until someone presses an arrow key, then hands over the wheel.
 * That way it always looks alive without needing to be discovered first.
 */

const COLS = 26;
const ROWS = 15;
const CAR_W = 2;
const CAR_H = 3;
const CAR_TOP = ROWS - 5;
const START_WIDTH = 12;
const MIN_WIDTH = 7;
const TICK_MS = 120; // Roughly the scroll rate of BASIC Driver on a TI-82.
const TYPE_MS = 55;
const BOOT_MS = 450;
const COMMAND = './driver.sh';

type Phase = 'idle' | 'typing' | 'booting' | 'running';
interface Row {
  left: number;
  width: number;
}

const phase = ref<Phase>('idle');
const typed = ref('');
const rows = ref<Row[]>([]);
const carX = ref(0);
const playing = ref(false);
const crashed = ref(false);
const score = ref(0);
const best = ref(0);

const isTrs = computed(() => theme.value === 'trs80');

const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let typeTimer: number | undefined;
let bootTimer: number | undefined;
let tickTimer: number | undefined;

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

// ─── Road ─────────────────────────────────────────────────────────────────────

function seedRoad() {
  const left = Math.floor((COLS - START_WIDTH) / 2);
  rows.value = Array.from({ length: ROWS }, () => ({ left, width: START_WIDTH }));
  carX.value = left + Math.floor(START_WIDTH / 2) - 1;
  score.value = 0;
  crashed.value = false;
}

// The road narrows as the run goes on, the way the original got meaner.
function nextRow(prev: Row): Row {
  const width = Math.max(MIN_WIDTH, START_WIDTH - Math.floor(score.value / 45));
  const drift = Math.random();
  const step = drift < 0.32 ? -1 : drift > 0.68 ? 1 : 0;
  const left = clamp(prev.left + step, 1, COLS - width - 2);
  return { left, width };
}

// ─── Driving ──────────────────────────────────────────────────────────────────

function autoSteer() {
  const row = rows.value[CAR_TOP];
  const center = row.left + Math.floor(row.width / 2) - 1;
  // The hesitation is deliberate. A perfectly centered car looks like a
  // screensaver rather than someone driving.
  if (Math.random() < 0.75) {
    if (carX.value < center) carX.value += 1;
    else if (carX.value > center) carX.value -= 1;
  }
}

function steer(dir: -1 | 1) {
  if (phase.value !== 'running') return;
  if (crashed.value) {
    seedRoad();
    playing.value = false;
    startTick();
    return;
  }
  playing.value = true;
  carX.value = clamp(carX.value + dir, 0, COLS - CAR_W);
}

function tick() {
  rows.value = [nextRow(rows.value[0]), ...rows.value.slice(0, ROWS - 1)];
  score.value += 1;
  if (!playing.value) autoSteer();

  for (let i = CAR_TOP; i < CAR_TOP + CAR_H; i++) {
    const r = rows.value[i];
    const hit = carX.value <= r.left || carX.value + CAR_W - 1 >= r.left + r.width;
    if (!hit) continue;

    if (playing.value) {
      crashed.value = true;
      best.value = Math.max(best.value, score.value);
      stopTick();
      return;
    }
    // Attract mode never crashes. Ease it back inside the lines.
    carX.value = clamp(carX.value, r.left + 1, r.left + r.width - CAR_W);
  }
}

const frame = computed(() =>
  rows.value
    .map((r, i) => {
      const cells = Array<string>(COLS).fill(' ');
      cells[r.left] = '|';
      cells[r.left + r.width] = '|';
      if (i >= CAR_TOP && i < CAR_TOP + CAR_H) {
        for (let c = 0; c < CAR_W; c++) {
          const x = carX.value + c;
          if (x >= 0 && x < COLS) cells[x] = 'X';
        }
      }
      return cells.join('');
    })
    .join('\n'),
);

// ─── Lifecycle ────────────────────────────────────────────────────────────────

function startTick() {
  stopTick();
  if (reduced) return;
  tickTimer = window.setInterval(tick, TICK_MS);
}

function stopTick() {
  if (tickTimer !== undefined) window.clearInterval(tickTimer);
  tickTimer = undefined;
}

function reset() {
  if (typeTimer !== undefined) window.clearInterval(typeTimer);
  if (bootTimer !== undefined) window.clearTimeout(bootTimer);
  typeTimer = undefined;
  bootTimer = undefined;
  stopTick();
  typed.value = '';
  playing.value = false;
  crashed.value = false;
  phase.value = 'idle';
}

function start() {
  reset();
  phase.value = 'typing';

  // Reduced motion gets the command and one still frame, no animation.
  if (reduced) {
    typed.value = COMMAND;
    seedRoad();
    phase.value = 'running';
    return;
  }

  let i = 0;
  typeTimer = window.setInterval(() => {
    i += 1;
    typed.value = COMMAND.slice(0, i);
    if (i < COMMAND.length) return;

    window.clearInterval(typeTimer);
    typeTimer = undefined;
    phase.value = 'booting';
    bootTimer = window.setTimeout(() => {
      seedRoad();
      phase.value = 'running';
      startTick();
    }, BOOT_MS);
  }, TYPE_MS);
}

function onKey(e: KeyboardEvent) {
  if (phase.value !== 'running') return;
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  e.preventDefault();
  steer(e.key === 'ArrowLeft' ? -1 : 1);
}

function onPointer(e: PointerEvent) {
  const box = (e.currentTarget as HTMLElement).getBoundingClientRect();
  steer(e.clientX - box.left < box.width / 2 ? -1 : 1);
}

watch(isTrs, (on) => (on ? start() : reset()), { immediate: true });

onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey);
  reset();
});
</script>

<style scoped>
.driver-bezel {
  @apply border border-line bg-ground px-3 py-2.5 cursor-pointer select-none;
  box-shadow: inset 0 0 22px rgb(var(--c-accent) / 0.07);
}

.driver-screen {
  @apply text-ink;
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.15;
  letter-spacing: 0.14em;
  text-shadow: var(--glow);
  white-space: pre;
}
</style>
