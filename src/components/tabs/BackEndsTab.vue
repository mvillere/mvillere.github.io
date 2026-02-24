<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
    <ProjectCard v-for="project in backEnds" :key="project.id" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { backEnds } from '../../data/portfolio';
import ProjectCard from '../ProjectCard.vue';
</script>
