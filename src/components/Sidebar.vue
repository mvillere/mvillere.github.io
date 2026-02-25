<template>
  <aside
    class="w-12 sm:w-[220px] flex-none flex flex-col h-full border-r border-shell-border bg-shell-sidebar select-none overflow-y-auto"
  >
    <!-- Brand -->
    <div class="px-2 sm:px-4 py-4 border-b border-shell-border shrink-0">
      <div class="flex items-center justify-center sm:justify-start gap-2">
        <span class="text-cyan-400 text-base leading-none">◈</span>
        <span class="hidden sm:inline text-sm font-semibold text-slate-200 tracking-tight">mvillere</span>
      </div>
      <p class="hidden sm:block text-[11px] text-slate-600 mt-0.5 ml-[22px]">~/portfolio</p>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 py-3 px-2 space-y-0.5">
      <!-- Ungrouped: About, Skills, Projects -->
      <button
        v-for="tab in ungrouped"
        :key="tab.id"
        :title="tab.label"
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
        <span class="hidden sm:inline">{{ tab.label }}</span>
      </button>

      <!-- Open Source (web3 group — label dropped per user request) -->
      <div class="sm:hidden h-px bg-shell-border mx-1 my-3" />
      <div class="hidden sm:block px-1 pt-3 pb-1">
        <div class="h-px bg-shell-border" />
      </div>

      <button
        v-for="tab in web3Group"
        :key="tab.id"
        :title="tab.label"
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
        <span class="hidden sm:inline">{{ tab.label }}</span>
      </button>

      <!-- Content + Personal (other group) -->
      <div class="sm:hidden h-px bg-shell-border mx-1 my-3" />
      <div class="hidden sm:block px-1 pt-3 pb-1">
        <div class="h-px bg-shell-border" />
      </div>

      <button
        v-for="tab in otherGroup"
        :key="tab.id"
        :title="tab.label"
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
        <span class="hidden sm:inline">{{ tab.label }}</span>
      </button>
    </nav>

    <!-- Copyright — hidden on mobile -->
    <div class="hidden sm:block shrink-0 px-4 py-3 border-t border-shell-border">
      <p class="text-[10px] text-slate-700">© Michael Villere 2026</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

export interface TabConfig {
  id: string;
  label: string;
  icon: Component;
  path: string;
  group: 'web3' | 'other' | null;
}

const props = defineProps<{
  tabs: TabConfig[];
  activeTab: string;
}>();

defineEmits<{ select: [id: string] }>();

const ungrouped = props.tabs.filter((t) => t.group === null);
const web3Group = props.tabs.filter((t) => t.group === 'web3');
const otherGroup = props.tabs.filter((t) => t.group === 'other');
</script>

<style scoped>
.nav-item {
  @apply w-full flex items-center justify-center sm:justify-start gap-2.5 px-3 py-[7px] rounded
         text-xs text-slate-400 border-l-2 border-transparent transition-colors duration-150
         text-left hover:bg-shell-hover hover:text-slate-200;
}

.nav-item--active {
  @apply bg-shell-active text-slate-100 border-cyan-400;
}
</style>
