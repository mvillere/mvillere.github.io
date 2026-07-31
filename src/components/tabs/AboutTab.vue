<template>
  <div class="max-w-2xl space-y-8">
    <!-- whoami -->
    <div>
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>whoami</span>
      </div>
      <div class="border border-line rounded bg-card p-5">
        <div class="flex items-baseline gap-2 mb-1">
          <span class="font-prose text-lg font-semibold text-ink">Michael Villere</span>
          <span class="text-sm text-muted">@NiftyMike</span>
        </div>
        <p class="text-xs text-accent mb-3">Engineering Leader · Co-Founder &amp; CTO, NFT Culture</p>
        <p class="font-prose text-sm text-body leading-relaxed whitespace-pre-line">{{ activeBio }}</p>
      </div>
    </div>

    <!-- Current roles -->
    <div>
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>cat current-roles.txt</span>
      </div>
      <div class="space-y-3">
        <div
          v-for="role in currentRoles"
          :key="role.id"
          class="border border-line rounded bg-card p-4"
        >
          <div class="flex items-start justify-between gap-4 mb-2">
            <div>
              <p class="text-sm font-medium text-ink">{{ role.title }}</p>
              <p class="text-xs text-accent mt-0.5">{{ role.company }}</p>
            </div>
            <span class="text-[11px] text-faint shrink-0 mt-0.5">{{ role.period }}</span>
          </div>
          <p class="font-prose text-[12.5px] text-body leading-relaxed">{{ role.description }}</p>
          <div v-if="role.links?.length" class="flex flex-wrap gap-4 mt-3">
            <a
              v-for="link in role.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-accent hover:text-accent-soft transition-colors"
            >
              ↗ {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Past roles -->
    <div>
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>cat past-roles.txt</span>
      </div>
      <div class="space-y-2">
        <div
          v-for="role in pastRoles"
          :key="role.id"
          class="border border-line/60 rounded bg-card/60 px-4 py-3"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-medium text-body">{{ role.title }}</p>
              <p class="text-xs text-muted mt-0.5">{{ role.company }}</p>
              <p v-if="role.description" class="font-prose text-[12.5px] text-muted mt-1.5 leading-relaxed">
                {{ role.description }}
              </p>
            </div>
            <span class="text-[11px] text-ghost shrink-0 mt-0.5">{{ role.period }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div>
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>cat education.txt</span>
      </div>
      <div class="border border-line/60 rounded bg-card/60 px-4 py-3 flex items-center justify-between gap-4">
        <div>
          <p class="text-xs font-medium text-body">BS Computer Science</p>
          <p class="text-xs text-muted mt-0.5">University of Texas at Dallas</p>
        </div>
        <span class="text-[11px] text-ghost shrink-0">2003</span>
      </div>
    </div>

    <!-- Links -->
    <div>
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>ls links/</span>
      </div>
      <div class="flex flex-wrap gap-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 px-3 py-2 rounded border border-line bg-card text-xs text-body hover:text-accent hover:border-accent/30 transition-all"
        >
          <span class="text-accent text-[11px]">↗</span>
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { bio, activeBioVariant } from '../../data/about';

const activeBio = bio[activeBioVariant];

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
