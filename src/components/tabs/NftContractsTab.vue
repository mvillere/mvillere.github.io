<template>
  <div class="space-y-8">
    <!-- On-chain authorship note -->
    <div
      class="flex items-start gap-2.5 text-xs text-slate-500 border border-shell-border/50 rounded px-3 py-2.5 bg-shell-card/40 max-w-2xl"
    >
      <span class="text-cyan-500 shrink-0 mt-px">◈</span>
      <span>
        Authorship of EVM contracts can be verified on-chain - the implementation contract for each
        project carries the comment
        <code class="text-cyan-300 bg-shell-card px-1 rounded text-[11px]"
          >@author @NiftyMike | @NFTCulture</code
        >
        in the verified source.
      </span>
    </div>

    <!-- Featured -->
    <div>
      <p class="text-[10px] font-medium text-slate-600 tracking-widest uppercase mb-3">featured</p>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <ProjectCard v-for="project in featured" :key="project.id" :project="project" />
      </div>
    </div>

    <!-- Divider -->
    <div class="flex items-center gap-3">
      <div class="h-px bg-shell-border flex-1" />
      <span class="text-[10px] text-slate-700 tracking-widest uppercase">more work</span>
      <div class="h-px bg-shell-border flex-1" />
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
const rest = computed(() => nftContracts.filter((p) => !p.featured));
</script>
