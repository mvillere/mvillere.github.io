<template>
  <div
    class="group relative flex flex-col rounded border transition-all duration-200"
    :class="cardClasses"
  >
    <!-- Status badge -->
    <div v-if="project.status !== 'placeholder'" class="absolute top-3 right-3">
      <span class="text-[11px] font-medium" :class="statusClasses">{{ statusText }}</span>
    </div>

    <!-- Header -->
    <div class="p-4 pb-2">
      <div class="flex items-start gap-2">
        <span class="text-cyan-400 text-sm leading-tight select-none mt-px">&gt;</span>
        <h3 class="text-sm font-medium text-slate-200 leading-snug pr-20">
          {{ project.title }}
        </h3>
      </div>
      <span v-if="project.year" class="block text-[11px] text-slate-600 mt-0.5 ml-4">
        {{ project.year }}<span v-if="project.chain"> · {{ project.chain }}</span>
      </span>
    </div>

    <!-- Description -->
    <div class="px-4 pb-3 flex-1">
      <p class="text-xs text-slate-400 leading-relaxed">{{ project.description }}</p>
    </div>

    <!-- Role attribution (only shown when not sole dev) -->
    <div v-if="roleNote" class="px-4 pb-2">
      <span class="text-[11px] text-slate-600 italic">{{ roleNote }}</span>
    </div>

    <!-- Tags -->
    <div v-if="project.tags.length" class="px-4 pb-3 flex flex-wrap gap-1.5">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="text-[11px] px-1.5 py-0.5 rounded text-cyan-300 bg-cyan-950/30 border border-cyan-900/40"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Links -->
    <div v-if="project.links.length" class="px-4 pb-4 flex gap-4">
      <a
        v-for="link in project.links"
        :key="link.label"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        ↗ {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from '../data/portfolio';

const props = defineProps<{ project: Project }>();

const isPlaceholder = computed(() => props.project.status === 'placeholder');

const cardClasses = computed(() => {
  if (isPlaceholder.value) {
    return 'border-dashed border-slate-800/60 bg-shell-card/40';
  }
  return 'border-shell-border bg-shell-card hover:border-cyan-500/30 hover:bg-shell-hover cursor-default';
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
</script>
