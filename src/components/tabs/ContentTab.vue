<template>
  <div class="space-y-6 max-w-4xl">
    <!-- Author profile link -->
    <div>
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>ls -la nftculture.com/author/michael/</span>
      </div>
      <a
        :href="authorProfileUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-between border border-line rounded bg-card px-5 py-4 hover:border-accent/30 hover:bg-hover transition-all group"
      >
        <div>
          <p class="text-xs text-muted mb-1">author profile</p>
          <p class="text-sm font-medium text-ink group-hover:text-accent transition-colors">
            nftculture.com/author/michael/
          </p>
          <p class="text-xs text-muted mt-1">
            Articles, analysis, and commentary on the NFT and web3 space.
          </p>
        </div>
        <span class="text-accent text-lg ml-4 shrink-0">↗</span>
      </a>
    </div>

    <!-- Featured articles -->
    <div>
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>curl -s nftculture.com/author/michael/ | grep article</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <a
          v-for="article in articles"
          :key="article.id"
          :href="article.url ?? undefined"
          :target="article.url ? '_blank' : undefined"
          :rel="article.url ? 'noopener noreferrer' : undefined"
          class="border rounded bg-card p-4 flex flex-col gap-2 transition-all"
          :class="
            article.url
              ? 'border-line hover:border-accent/20 hover:bg-hover cursor-pointer'
              : 'border-dashed border-line/60 bg-card/40 cursor-default'
          "
        >
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-start gap-2 flex-1 min-w-0">
              <span class="text-accent text-sm select-none mt-px shrink-0">&gt;</span>
              <h3 class="font-prose text-sm font-semibold text-ink leading-snug">{{ article.title }}</h3>
            </div>
            <span v-if="article.url" class="text-accent shrink-0 mt-0.5">↗</span>
          </div>
          <p class="font-prose text-[12.5px] text-body leading-relaxed ml-4">{{ article.description }}</p>
          <div class="ml-4 mt-auto pt-1 space-y-1.5">
            <span
              v-if="article.role === 'contributor'"
              class="block text-[11px] text-muted italic"
            >
              contributing author
            </span>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="text-[11px] px-1.5 py-0.5 rounded text-tag-ink bg-tag-bg border border-tag-line"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { articles, authorProfileUrl } from '../../data/portfolio';
</script>
