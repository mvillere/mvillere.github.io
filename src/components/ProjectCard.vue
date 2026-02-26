<template>
  <div
    class="flex flex-col rounded border transition-all duration-200"
    :class="cardClasses"
  >
    <!-- Header (click to expand/collapse) -->
    <div class="p-4 pb-2 cursor-pointer select-none" @click="isExpanded = !isExpanded">
      <div class="flex items-start gap-2">
        <span class="text-cyan-400 text-sm leading-tight mt-px shrink-0">&gt;</span>
        <h3 class="text-sm font-medium text-slate-200 leading-snug flex-1 min-w-0">
          {{ project.title }}
        </h3>
        <div class="flex items-center gap-2 shrink-0 mt-0.5">
          <span v-if="statusText" class="text-[11px] font-medium" :class="statusClasses">
            {{ statusText }}
          </span>
          <ChevronDown
            :size="12"
            class="text-slate-600 transition-transform duration-200"
            :class="{ 'rotate-180': isExpanded }"
          />
        </div>
      </div>
      <span v-if="project.year" class="block text-[11px] text-slate-600 mt-0.5 ml-4">
        {{ project.year }}<span v-if="project.chain"> · {{ project.chain }}</span>
      </span>
    </div>

    <!-- Description -->
    <div class="px-4 pb-3 flex-1">
      <p class="text-xs text-slate-400 leading-relaxed" :class="{ 'line-clamp-2': !isExpanded, 'whitespace-pre-line': isExpanded }">
        {{ project.description }}
      </p>
    </div>

    <!-- Role attribution — expanded only -->
    <div v-if="isExpanded && roleNote" class="px-4 pb-2">
      <span class="text-[11px] text-slate-600 italic">{{ roleNote }}</span>
    </div>

    <!-- Tags -->
    <div v-if="visibleTags.length" class="px-4 pb-3 flex flex-wrap gap-1.5">
      <span
        v-for="tag in visibleTags"
        :key="tag"
        class="text-[11px] px-1.5 py-0.5 rounded text-cyan-300 bg-cyan-950/30 border border-cyan-900/40"
      >
        {{ tag }}
      </span>
      <span v-if="!isExpanded && hiddenTagCount > 0" class="text-[11px] text-slate-600 px-1">
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
        class="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
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

const props = defineProps<{ project: Project; initialExpanded?: boolean }>();

const isExpanded = ref(props.initialExpanded ?? false);
const COLLAPSED_TAG_LIMIT = 3;

const isPlaceholder = computed(() => props.project.status === 'placeholder');

const cardClasses = computed(() => {
  if (isPlaceholder.value) {
    return 'border-dashed border-slate-800/60 bg-shell-card/40';
  }
  return 'border-shell-border bg-shell-card hover:border-cyan-500/20 transition-colors';
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
    live: 'text-green-400',
    archived: 'text-slate-500',
    'coming-soon': 'text-amber-400',
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
