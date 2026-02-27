<template>
  <div>
    <!-- Detail sub-page -->
    <TechnologyDetail
      v-if="selectedItem"
      :project="selectedItem"
      @back="goBack"
    />

    <!-- Card grid -->
    <div v-else class="space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <ProjectCard
          v-for="project in techPlatforms"
          :key="project.id"
          :project="project"
          :initial-expanded="true"
          :has-detail="!!(project.detail?.length)"
          @detail="selectItem(project)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, type Ref } from 'vue';
import { techPlatforms } from '../../data/portfolio';
import type { Project } from '../../data/portfolio';
import ProjectCard from '../ProjectCard.vue';
import TechnologyDetail from '../TechnologyDetail.vue';

const subPath = inject<Ref<string | null>>('subPath');

const selectedItem = ref<Project | null>(null);

onMounted(() => {
  if (subPath?.value) {
    const match = techPlatforms.find((p) => p.id === subPath.value);
    if (match) selectedItem.value = match;
  }
});

function selectItem(project: Project) {
  selectedItem.value = project;
  if (subPath) subPath.value = project.id;
}

function goBack() {
  selectedItem.value = null;
  if (subPath) subPath.value = null;
}
</script>
