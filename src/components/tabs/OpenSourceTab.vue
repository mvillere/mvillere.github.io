<template>
  <div class="space-y-8 max-w-4xl">
    <!-- Repos -->
    <div>
      <p class="text-[10px] font-medium text-slate-600 tracking-widest uppercase mb-3">repos</p>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <ProjectCard v-for="project in openSourceRepos" :key="project.id" :project="project" />
      </div>
    </div>

    <!-- Divider -->
    <div class="flex items-center gap-3">
      <div class="h-px bg-shell-border flex-1" />
      <span class="text-[10px] text-slate-700 tracking-widest uppercase">tools</span>
      <div class="h-px bg-shell-border flex-1" />
    </div>

    <!-- Tools -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <ProjectCard v-for="project in openSourceTools" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { openSourceRepos, openSourceTools } from '../../data/portfolio';
import ProjectCard from '../ProjectCard.vue';
</script>
