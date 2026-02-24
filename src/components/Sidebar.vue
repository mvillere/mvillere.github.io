<template>
  <aside
    class="w-[220px] flex-none flex flex-col h-full border-r border-shell-border bg-shell-sidebar select-none overflow-y-auto"
  >
    <!-- Brand -->
    <div class="px-4 py-4 border-b border-shell-border shrink-0">
      <div class="flex items-center gap-2">
        <span class="text-cyan-400 text-base leading-none">◈</span>
        <span class="text-sm font-semibold text-slate-200 tracking-tight">NiftyMike</span>
      </div>
      <p class="text-[11px] text-slate-600 mt-0.5 ml-[22px]">~/portfolio</p>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 py-3 px-2 space-y-0.5">
      <!-- About -->
      <button
        v-for="tab in aboutGroup"
        :key="tab.id"
        class="nav-item"
        :class="{ 'nav-item--active': activeTab === tab.id }"
        @click="$emit('select', tab.id)"
      >
        <component
          :is="tab.icon"
          :size="13"
          :class="activeTab === tab.id ? 'text-cyan-400' : 'text-slate-600'"
          class="shrink-0 transition-colors"
        />
        <span>{{ tab.label }}</span>
      </button>

      <!-- WEB3 divider -->
      <div class="flex items-center gap-2 px-1 pt-3 pb-1">
        <div class="h-px bg-shell-border flex-1" />
        <span class="text-[10px] font-medium text-slate-600 tracking-widest uppercase">web3</span>
        <div class="h-px bg-shell-border flex-1" />
      </div>

      <button
        v-for="tab in web3Group"
        :key="tab.id"
        class="nav-item"
        :class="{ 'nav-item--active': activeTab === tab.id }"
        @click="$emit('select', tab.id)"
      >
        <component
          :is="tab.icon"
          :size="13"
          :class="activeTab === tab.id ? 'text-cyan-400' : 'text-slate-600'"
          class="shrink-0 transition-colors"
        />
        <span>{{ tab.label }}</span>
      </button>

      <!-- WEB2 divider -->
      <div class="flex items-center gap-2 px-1 pt-3 pb-1">
        <div class="h-px bg-shell-border flex-1" />
        <span class="text-[10px] font-medium text-slate-600 tracking-widest uppercase">web2</span>
        <div class="h-px bg-shell-border flex-1" />
      </div>

      <button
        v-for="tab in web2Group"
        :key="tab.id"
        class="nav-item"
        :class="{ 'nav-item--active': activeTab === tab.id }"
        @click="$emit('select', tab.id)"
      >
        <component
          :is="tab.icon"
          :size="13"
          :class="activeTab === tab.id ? 'text-cyan-400' : 'text-slate-600'"
          class="shrink-0 transition-colors"
        />
        <span>{{ tab.label }}</span>
      </button>

      <!-- Content (rule only, no label) -->
      <div class="px-1 pt-3 pb-1">
        <div class="h-px bg-shell-border" />
      </div>

      <button
        v-for="tab in otherGroup"
        :key="tab.id"
        class="nav-item"
        :class="{ 'nav-item--active': activeTab === tab.id }"
        @click="$emit('select', tab.id)"
      >
        <component
          :is="tab.icon"
          :size="13"
          :class="activeTab === tab.id ? 'text-cyan-400' : 'text-slate-600'"
          class="shrink-0 transition-colors"
        />
        <span>{{ tab.label }}</span>
      </button>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

export interface TabConfig {
  id: string;
  label: string;
  icon: Component;
  path: string;
  group: 'web3' | 'web2' | 'other' | null;
}

const props = defineProps<{
  tabs: TabConfig[];
  activeTab: string;
}>();

defineEmits<{ select: [id: string] }>();

const aboutGroup = props.tabs.filter((t) => t.group === null);
const web3Group = props.tabs.filter((t) => t.group === 'web3');
const web2Group = props.tabs.filter((t) => t.group === 'web2');
const otherGroup = props.tabs.filter((t) => t.group === 'other');
</script>

<style scoped>
.nav-item {
  @apply w-full flex items-center gap-2.5 px-3 py-[7px] rounded text-xs text-slate-400
         border-l-2 border-transparent transition-colors duration-150 text-left
         hover:bg-shell-hover hover:text-slate-200;
}

.nav-item--active {
  @apply bg-shell-active text-slate-100 border-cyan-400;
}
</style>
