<template>
  <div
    class="flex flex-col rounded border transition-all duration-200"
    :class="cardClasses"
  >
    <!-- Header (click to expand/collapse) -->
    <div class="p-4 pb-2 cursor-pointer select-none" @click="isExpanded = !isExpanded">
      <div class="flex items-start gap-2">
        <span class="text-accent text-sm leading-tight mt-px shrink-0">&gt;</span>
        <h3 class="font-prose text-sm font-semibold text-ink leading-snug flex-1 min-w-0">
          {{ project.title }}
        </h3>
        <div class="flex items-center gap-2 shrink-0 mt-0.5">
          <span v-if="statusText" class="text-[11px] font-medium" :class="statusClasses">
            {{ statusText }}
          </span>
          <ChevronDown
            :size="12"
            class="text-faint transition-transform duration-200"
            :class="{ 'rotate-180': isExpanded }"
          />
        </div>
      </div>
      <span v-if="project.year" class="block text-[11px] text-faint mt-0.5 ml-4">
        {{ project.year }}<span v-if="project.chain"> · {{ project.chain }}</span>
      </span>
    </div>

    <!-- Description -->
    <div class="px-4 flex-1" :class="isExpanded && hasDetail ? 'pb-2' : 'pb-3'">
      <p class="font-prose text-[12.5px] text-body leading-relaxed" :class="{ 'line-clamp-2': !isExpanded, 'whitespace-pre-line': isExpanded }">
        {{ project.description }}
      </p>
    </div>

    <!-- Detail link — immediately below description -->
    <div v-if="isExpanded && hasDetail" class="px-4 pb-3">
      <hr class="border-line/40 mb-2.5" />
      <button
        class="text-xs text-muted hover:text-accent transition-colors"
        @click.stop="emit('detail')"
      >
        → view whitepaper
      </button>
    </div>

    <!-- Role attribution — expanded only -->
    <div v-if="isExpanded && roleNote" class="px-4 pb-2">
      <span class="text-[11px] text-faint italic">{{ roleNote }}</span>
    </div>

    <!-- Tags -->
    <div v-if="visibleTags.length" class="px-4 pb-3 flex flex-wrap gap-1.5">
      <span
        v-for="tag in visibleTags"
        :key="tag"
        class="text-[11px] px-1.5 py-0.5 rounded text-tag-ink bg-tag-bg border border-tag-line"
      >
        {{ tag }}
      </span>
      <span v-if="!isExpanded && hiddenTagCount > 0" class="text-[11px] text-faint px-1">
        +{{ hiddenTagCount }}
      </span>
    </div>

    <!-- Links — expanded only -->
    <div v-if="isExpanded && project.links.length" class="px-4 pb-4 flex flex-wrap gap-4">
      <a
        v-for="link in project.links"
        :key="link.label"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs text-accent hover:text-accent-soft transition-colors"
        @click.stop
      >
        ↗ {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronDown } from 'lucide-vue-next';
import type { Project } from '../data/portfolio';

const props = defineProps<{ project: Project; initialExpanded?: boolean; hasDetail?: boolean }>();
const emit = defineEmits<{ detail: [] }>();

const isExpanded = ref(props.initialExpanded ?? false);
const COLLAPSED_TAG_LIMIT = 3;

const isPlaceholder = computed(() => props.project.status === 'placeholder');

const cardClasses = computed(() => {
  if (isPlaceholder.value) {
    return 'border-dashed border-line/60 bg-card/40';
  }
  return 'border-line bg-card hover:border-accent/20 transition-colors';
});

const statusText = computed(() => {
  const map: Record<string, string> = {
    live: '● live',
    archived: '○ archived',
    'coming-soon': '◎ open source soon',
  };
  return map[props.project.status] ?? '';
});

const statusClasses = computed(() => {
  const map: Record<string, string> = {
    live: 'text-live',
    archived: 'text-muted',
    'coming-soon': 'text-warn',
  };
  return map[props.project.status] ?? '';
});

const roleNote = computed(() => {
  const map: Record<string, string> = {
    lead: 'lead developer',
    contributor: 'contributing developer',
  };
  return props.project.role ? (map[props.project.role] ?? null) : null;
});

const visibleTags = computed(() =>
  isExpanded.value ? props.project.tags : props.project.tags.slice(0, COLLAPSED_TAG_LIMIT),
);

const hiddenTagCount = computed(() => Math.max(0, props.project.tags.length - COLLAPSED_TAG_LIMIT));
</script>
