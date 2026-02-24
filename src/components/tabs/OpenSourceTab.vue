<template>
  <div class="space-y-6">
    <!-- Note about Testarossa / Shakespeare -->
    <div class="flex items-start gap-2 text-xs text-slate-500 border border-shell-border/50 rounded px-3 py-2.5 bg-shell-card/40 max-w-2xl">
      <span class="text-amber-400 shrink-0 mt-px">◎</span>
      <span>
        Testarossa and Shakespeare are NFT Culture internal libraries. Open source releases are
        planned — links will appear here when available.
      </span>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <ProjectCard v-for="project in openSource" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { openSource } from '../../data/portfolio';
import ProjectCard from '../ProjectCard.vue';
</script>
