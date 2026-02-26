<template>
  <div class="space-y-8 max-w-4xl">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <ProjectCard v-for="project in techPlatforms" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { techPlatforms } from '../../data/portfolio';
import ProjectCard from '../ProjectCard.vue';
</script>
