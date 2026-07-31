<template>
  <div class="space-y-8">
    <!-- On-chain authorship note -->
    <div
      class="flex items-start gap-2.5 text-xs text-muted border border-line/50 rounded px-3 py-2.5 bg-card/40 max-w-2xl"
    >
      <span class="text-accent shrink-0 mt-px">◈</span>
      <span>
        Authorship of projects can be verified on-chain: the implementation of contracts or inscriptions typically carries the comment
        <code class="text-accent-soft bg-card px-1 rounded text-[11px]"
          >@author @NiftyMike | @NFTCulture</code
        >
        in verified source.
      </span>
    </div>

    <!-- Featured -->
    <div>
      <p class="text-[10px] font-medium text-faint tracking-widest uppercase mb-3">featured</p>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <ProjectCard v-for="project in featured" :key="project.id" :project="project" :initial-expanded="true" />
      </div>
    </div>

    <!-- Divider -->
    <div class="flex items-center gap-3">
      <div class="h-px bg-line flex-1" />
      <span class="text-[10px] text-ghost tracking-widest uppercase">more work</span>
      <div class="h-px bg-line flex-1" />
    </div>

    <!-- Rest -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <ProjectCard v-for="project in rest" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { nftContracts } from '../../data/portfolio';
import ProjectCard from '../ProjectCard.vue';

const featured = computed(() => nftContracts.filter((p) => p.featured));
const rest = computed(() =>
  nftContracts.filter((p) => !p.featured).sort((a, b) => (b.order ?? -Infinity) - (a.order ?? -Infinity)),
);
</script>
