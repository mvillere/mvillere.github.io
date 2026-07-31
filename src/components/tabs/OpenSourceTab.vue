<template>
  <div class="space-y-8 max-w-4xl">
    <!-- Featured — expanded, two across so the long descriptions have room -->
    <div v-if="featured.length">
      <p class="text-[10px] font-medium text-faint tracking-widest uppercase mb-3">featured</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <ProjectCard
          v-for="project in featured"
          :key="project.id"
          :project="project"
          :initial-expanded="true"
        />
      </div>
    </div>

    <!-- Divider -->
    <div class="flex items-center gap-3">
      <div class="h-px bg-line flex-1" />
      <span class="text-[10px] text-ghost tracking-widest uppercase">repos</span>
      <div class="h-px bg-line flex-1" />
    </div>

    <!-- Rest -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <ProjectCard v-for="project in rest" :key="project.id" :project="project" />
    </div>

    <!-- Divider -->
    <div class="flex items-center gap-3">
      <div class="h-px bg-line flex-1" />
      <span class="text-[10px] text-ghost tracking-widest uppercase">tools</span>
      <div class="h-px bg-line flex-1" />
    </div>

    <!-- Tools -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <ProjectCard v-for="project in openSourceTools" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { openSourceRepos, openSourceTools } from '../../data/portfolio';
import ProjectCard from '../ProjectCard.vue';

const featured = computed(() => openSourceRepos.filter((p) => p.featured));
const rest = computed(() => openSourceRepos.filter((p) => !p.featured));
</script>
