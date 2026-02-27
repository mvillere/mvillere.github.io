<template>
  <div class="max-w-2xl space-y-8">
    <!-- Back link -->
    <button
      class="flex items-center gap-1 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
      @click="emit('back')"
    >
      <ChevronLeft :size="12" />
      Technology
    </button>

    <!-- Header -->
    <div>
      <div class="flex items-start gap-2">
        <span class="text-cyan-400 text-sm leading-tight mt-px shrink-0">&gt;</span>
        <h1 class="text-base font-semibold text-slate-100 leading-snug">{{ project.title }}</h1>
      </div>
      <div class="ml-4 mt-1 flex items-center gap-3 text-[11px] text-slate-600">
        <span v-if="project.year">{{ project.year }}</span>
        <span v-if="project.org">· {{ project.org }}</span>
      </div>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-1.5">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="text-[11px] px-1.5 py-0.5 rounded text-cyan-300 bg-cyan-950/30 border border-cyan-900/40"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Sections -->
    <div
      v-for="section in project.detail"
      :key="section.heading"
      class="space-y-2.5"
    >
      <div class="flex items-center gap-3">
        <span class="text-[10px] text-slate-600 font-medium tracking-widest uppercase shrink-0">
          {{ section.heading }}
        </span>
        <div class="h-px bg-shell-border flex-1" />
      </div>
      <p class="text-xs text-slate-300 leading-relaxed whitespace-pre-line">{{ section.body }}</p>
    </div>

    <!-- Links -->
    <div
      v-if="project.links.length"
      class="flex flex-wrap gap-4 pt-4 border-t border-shell-border/50"
    >
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
import { ChevronLeft } from 'lucide-vue-next';
import type { Project } from '../data/portfolio';

defineProps<{ project: Project }>();
const emit = defineEmits<{ back: [] }>();
</script>
