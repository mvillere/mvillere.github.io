<template>
  <button
    type="button"
    class="theme-switch"
    :title="isTrs ? 'Switch to Light' : 'Switch to TRS-80'"
    :aria-label="isTrs ? 'Switch to Light theme' : 'Switch to TRS-80 theme'"
    @click="toggleTheme"
  >
    <component :is="isTrs ? Monitor : Sun" :size="12" class="text-accent shrink-0" />
    <span class="tracking-widest uppercase">{{ isTrs ? 'trs-80' : 'light' }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Monitor, Sun } from 'lucide-vue-next';
import { theme, toggleTheme } from '../theme';

/**
 * The label says "Light" rather than "Catalogue" on purpose. A recognizable
 * word plus a sun icon is what makes people try the control at all, and the
 * TRS-80 name is a better reward once they have clicked than a puzzle before.
 * The internal theme id stays `catalogue`, which is what style.css calls it.
 */
const isTrs = computed(() => theme.value === 'trs80');
</script>

<style scoped>
.theme-switch {
  @apply flex items-center gap-1.5 shrink-0 px-2 py-1 rounded border border-line
         text-[10px] text-muted transition-colors duration-150
         hover:text-ink hover:border-accent/40 hover:bg-hover;
}
</style>
