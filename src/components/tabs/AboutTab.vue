<template>
  <div class="max-w-2xl space-y-8">
    <!-- whoami -->
    <div>
      <div class="flex items-center gap-2 text-xs text-slate-600 mb-4">
        <span class="text-cyan-400">$</span>
        <span>whoami</span>
      </div>
      <div class="border border-shell-border rounded bg-shell-card p-5">
        <div class="flex items-baseline gap-2 mb-1">
          <span class="text-base font-semibold text-slate-100">Michael Villere</span>
          <span class="text-sm text-slate-500">@NiftyMike</span>
        </div>
        <p class="text-xs text-cyan-400 mb-3">Co-Founder &amp; CTO · NFT Culture</p>
        <!--
          BIO TEXT
          See About_Options.txt in the project root for Short / Medium / Long variants.
          Update the paragraph text below when you change the bio.
        -->
        <p class="text-sm text-slate-400 leading-relaxed">
          Michael Villere is a Web3 engineer and entrepreneur who co-founded NFT Culture in 2021.
          He has deployed 30+ smart contracts across Ethereum and EVM networks - his code powers
          Ian Cheng's 3FACE (2022), an adaptive generative portrait acquired by the MoMA.
        </p>
      </div>
    </div>

    <!-- Current roles -->
    <div>
      <div class="flex items-center gap-2 text-xs text-slate-600 mb-4">
        <span class="text-cyan-400">$</span>
        <span>cat current-roles.txt</span>
      </div>
      <div class="space-y-3">
        <div
          v-for="role in currentRoles"
          :key="role.id"
          class="border border-shell-border rounded bg-shell-card p-4"
        >
          <div class="flex items-start justify-between gap-4 mb-2">
            <div>
              <p class="text-sm font-medium text-slate-200">{{ role.title }}</p>
              <p class="text-xs text-cyan-400 mt-0.5">{{ role.company }}</p>
            </div>
            <span class="text-[11px] text-slate-600 shrink-0 mt-0.5">{{ role.period }}</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">{{ role.description }}</p>
          <div v-if="role.links?.length" class="flex flex-wrap gap-4 mt-3">
            <a
              v-for="link in role.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ↗ {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Past roles -->
    <div>
      <div class="flex items-center gap-2 text-xs text-slate-600 mb-4">
        <span class="text-cyan-400">$</span>
        <span>cat past-roles.txt</span>
      </div>
      <div class="space-y-2">
        <div
          v-for="role in pastRoles"
          :key="role.id"
          class="border border-shell-border/60 rounded bg-shell-card/60 px-4 py-3"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-medium text-slate-300">{{ role.title }}</p>
              <p class="text-xs text-slate-500 mt-0.5">{{ role.company }}</p>
              <p v-if="role.description" class="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {{ role.description }}
              </p>
            </div>
            <span class="text-[11px] text-slate-700 shrink-0 mt-0.5">{{ role.period }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div>
      <div class="flex items-center gap-2 text-xs text-slate-600 mb-4">
        <span class="text-cyan-400">$</span>
        <span>cat education.txt</span>
      </div>
      <div class="border border-shell-border/60 rounded bg-shell-card/60 px-4 py-3 flex items-center justify-between gap-4">
        <div>
          <p class="text-xs font-medium text-slate-300">BS Computer Science</p>
          <p class="text-xs text-slate-500 mt-0.5">University of Texas at Dallas</p>
        </div>
        <span class="text-[11px] text-slate-700 shrink-0">2003</span>
      </div>
    </div>

    <!-- Links -->
    <div>
      <div class="flex items-center gap-2 text-xs text-slate-600 mb-4">
        <span class="text-cyan-400">$</span>
        <span>ls links/</span>
      </div>
      <div class="flex flex-wrap gap-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 px-3 py-2 rounded border border-shell-border bg-shell-card text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
        >
          <span class="text-cyan-500 text-[11px]">↗</span>
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  description?: string;
  links?: Link[];
}

interface Link {
  label: string;
  url: string;
}

const currentRoles: Role[] = [
  {
    id: 'nft-culture',
    title: 'Co-Founder & CTO',
    company: 'NFT Culture / NFT Culture Labs',
    period: '2021 – present',
    description:
      'NFT Culture is a media brand at the intersection of art, culture, and the blockchain - delivering daily news, insights, and community coverage across NFTs, crypto art, and Web3. NFT Culture Labs is its software and consulting arm, building open source tooling and guiding businesses through Web3 product development.',
    links: [
      { label: 'nftculture.com', url: 'https://www.nftculture.com' },
      { label: 'GitHub', url: 'https://github.com/NFTCulture' },
    ],
  },
  {
    id: 'rocketship',
    title: 'VP of Engineering',
    company: 'Rocketship',
    period: 'Feb 2024 – present',
    description:
      'Creator of the Pizza Ninja community and the Ninjalerts app - a Web3 alerts and analytics platform for NFT collectors and traders.',
    links: [
      { label: 'ninjalerts.com', url: 'https://www.ninjalerts.com/' },
      { label: 'pizzaninjas.com', url: 'https://pizzaninjas.com/' },
      { label: 'GitHub', url: 'https://github.com/rocketshipapp' },
    ],
  },
];

const pastRoles: Role[] = [
  {
    id: 'edmentum',
    title: 'Senior Software Development Manager',
    company: 'Edmentum',
    period: 'Jan 2009 – May 2022',
    description:
      'K-12 ed-tech company delivering online curriculum, assessments, and personalized learning programs to school districts nationwide. Products include Study Island, Exact Path, and Courseware.',
  },
  {
    id: 'early-career',
    title: 'Software Engineering Roles',
    company: 'Tellabs · Fujitsu Network Communications · RealPage',
    period: '2003 – 2009',
  },
];

const links: Link[] = [
  { label: 'GitHub', url: 'https://github.com/mvillere' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/michaelvillere/' },
];
</script>
