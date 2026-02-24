<template>
  <div class="max-w-2xl">
    <!-- whoami block -->
    <div class="mb-8">
      <div class="flex items-center gap-2 text-sm text-slate-500 mb-4">
        <span class="text-cyan-400">$</span>
        <span>whoami</span>
      </div>

      <div class="border border-shell-border rounded bg-shell-card p-6">
        <div class="mb-1">
          <span class="text-lg font-semibold text-slate-100">Michael Villere</span>
          <span class="text-slate-500 ml-2 text-sm">@NiftyMike</span>
        </div>
        <p class="text-xs text-cyan-400 mb-4">Co-Founder &amp; CTO — NFT Culture</p>
        <p class="text-sm text-slate-400 leading-relaxed">
          [PLACEHOLDER — bio coming in phase 2. Describe your background, what drives your work in
          web3, and what you bring to the table as both a founder and engineer.]
        </p>
      </div>
    </div>

    <!-- Roles block -->
    <div class="mb-8">
      <div class="flex items-center gap-2 text-sm text-slate-500 mb-4">
        <span class="text-cyan-400">$</span>
        <span>cat roles.txt</span>
      </div>

      <div class="space-y-2">
        <div
          v-for="role in roles"
          :key="role.title"
          class="border border-shell-border rounded bg-shell-card px-4 py-3 flex items-start justify-between gap-4"
        >
          <div>
            <p class="text-sm text-slate-200 font-medium">{{ role.title }}</p>
            <p class="text-xs text-slate-500 mt-0.5">{{ role.company }}</p>
          </div>
          <span class="text-xs text-slate-600 shrink-0 mt-0.5">{{ role.period }}</span>
        </div>
      </div>
    </div>

    <!-- Links block -->
    <div>
      <div class="flex items-center gap-2 text-sm text-slate-500 mb-4">
        <span class="text-cyan-400">$</span>
        <span>ls links/</span>
      </div>

      <div class="flex flex-wrap gap-3">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-3 py-2 rounded border border-shell-border bg-shell-card text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
        >
          <span class="text-cyan-400 text-[11px]">↗</span>
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Role {
  title: string;
  company: string;
  period: string;
}

interface Link {
  label: string;
  url: string;
}

const roles: Role[] = [
  {
    title: 'Co-Founder & CTO',
    company: 'NFT Culture',
    period: '2021 – present',
  },
  {
    title: '[PLACEHOLDER] Previous Role',
    company: '[PLACEHOLDER] Company',
    period: '20XX – 20XX',
  },
];

const links: Link[] = [
  { label: 'NFT Culture', url: 'https://www.nftculture.com' },
  { label: 'GitHub', url: 'https://github.com/NFTCulture' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/[PLACEHOLDER]' },
];
</script>
