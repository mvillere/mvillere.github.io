<template>
  <div class="flex h-screen overflow-hidden bg-shell-bg font-mono">
    <Sidebar :tabs="tabs" :active-tab="activeTabId" @select="activeTabId = $event" />

    <!-- Content area -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- Tab header -->
      <div class="shrink-0 px-6 py-4 border-b border-shell-border">
        <div class="flex items-center gap-1.5 text-xs text-slate-600">
          <span>~/portfolio</span>
          <span>/</span>
          <span class="text-slate-400">{{ currentTab.path }}</span>
          <span class="cursor-blink" />
        </div>
        <div class="flex items-center justify-between mt-1.5">
          <h1 class="text-sm font-semibold text-slate-100">{{ currentTab.label }}</h1>
          <span class="text-[11px] text-slate-600">{{ itemCount }}</span>
        </div>
      </div>

      <!-- Scrollable content -->
      <div class="flex-1 overflow-y-auto p-6">
        <component :is="currentTab.component" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Component } from 'vue';
import { Terminal, Diamond, Cpu, GitBranch, Monitor, Server, FileText } from 'lucide-vue-next';

import Sidebar from './components/Sidebar.vue';
import type { TabConfig } from './components/Sidebar.vue';

import AboutTab from './components/tabs/AboutTab.vue';
import NftContractsTab from './components/tabs/NftContractsTab.vue';
import InfraContractsTab from './components/tabs/InfraContractsTab.vue';
import OpenSourceTab from './components/tabs/OpenSourceTab.vue';
import FrontEndsTab from './components/tabs/FrontEndsTab.vue';
import BackEndsTab from './components/tabs/BackEndsTab.vue';
import ContentTab from './components/tabs/ContentTab.vue';

import { nftContracts, infraContracts, openSource, frontEnds, backEnds, articles } from './data/portfolio';

interface TabDef extends TabConfig {
  component: Component;
  count?: number;
}

const tabs: TabDef[] = [
  {
    id: 'about',
    label: 'About',
    icon: Terminal,
    path: 'about',
    group: null,
    component: AboutTab,
  },
  {
    id: 'nft-contracts',
    label: 'NFTs',
    icon: Diamond,
    path: 'web3/nfts',
    group: 'web3',
    component: NftContractsTab,
    count: nftContracts.length,
  },
  {
    id: 'infra-contracts',
    label: 'Crypto Infra',
    icon: Cpu,
    path: 'web3/crypto-infra',
    group: 'web3',
    component: InfraContractsTab,
    count: infraContracts.length,
  },
  {
    id: 'open-source',
    label: 'Open Source',
    icon: GitBranch,
    path: 'web3/open-source',
    group: 'web3',
    component: OpenSourceTab,
    count: openSource.length,
  },
  {
    id: 'front-ends',
    label: 'Front Ends',
    icon: Monitor,
    path: 'web2/front-ends',
    group: 'web2',
    component: FrontEndsTab,
    count: frontEnds.length,
  },
  {
    id: 'back-ends',
    label: 'Back Ends',
    icon: Server,
    path: 'web2/back-ends',
    group: 'web2',
    component: BackEndsTab,
    count: backEnds.length,
  },
  {
    id: 'content',
    label: 'Content',
    icon: FileText,
    path: 'content',
    group: 'other',
    component: ContentTab,
    count: articles.length,
  },
];

const activeTabId = ref('about');

const currentTab = computed(() => tabs.find((t) => t.id === activeTabId.value) ?? tabs[0]);

const itemCount = computed(() => {
  const count = currentTab.value.count;
  if (!count) return '';
  return `${count} item${count !== 1 ? 's' : ''}`;
});
</script>
