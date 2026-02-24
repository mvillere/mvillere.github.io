<template>
  <div class="space-y-6 max-w-4xl">
    <!-- Author profile link -->
    <a
      :href="authorProfileUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-between border border-shell-border rounded bg-shell-card px-5 py-4 hover:border-cyan-500/30 hover:bg-shell-hover transition-all group"
    >
      <div>
        <p class="text-xs text-slate-500 mb-1">author profile</p>
        <p class="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
          nftculture.com/author/michael/
        </p>
        <p class="text-xs text-slate-500 mt-1">
          Articles, analysis, and commentary on the NFT and web3 space.
        </p>
      </div>
      <span class="text-cyan-400 text-lg ml-4 shrink-0">↗</span>
    </a>

    <!-- Featured articles -->
    <div>
      <p class="text-xs text-slate-600 mb-3">featured articles</p>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div
          v-for="article in articles"
          :key="article.id"
          class="border border-dashed border-slate-800/60 rounded bg-shell-card/40 p-4 flex flex-col gap-2"
        >
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 text-sm select-none mt-px shrink-0">&gt;</span>
            <h3 class="text-sm font-medium text-slate-200 leading-snug">{{ article.title }}</h3>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed ml-4">{{ article.description }}</p>
          <div class="ml-4 flex flex-wrap gap-1.5 mt-auto pt-1">
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="text-[11px] px-1.5 py-0.5 rounded text-cyan-300 bg-cyan-950/30 border border-cyan-900/40"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { articles, authorProfileUrl } from '../../data/portfolio';
</script>
