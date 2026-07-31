<template>
  <aside
    class="w-12 sm:w-[220px] flex-none flex flex-col h-full border-r border-line bg-rail select-none overflow-y-auto"
  >
    <!-- Brand -->
    <div class="px-2 sm:px-4 py-4 border-b border-line shrink-0">
      <div class="flex items-center justify-center sm:justify-start gap-2">
        <span class="text-accent text-base leading-none">{{ isTrs ? '▮' : '§' }}</span>
        <span class="hidden sm:inline text-sm font-semibold text-ink tracking-tight">mvillere</span>
      </div>
      <p class="hidden sm:block text-[11px] text-faint mt-0.5 ml-[22px]">~/portfolio</p>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 py-3 px-2 space-y-0.5">
      <!-- Ungrouped: About, Skills -->
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
          :class="activeTab === tab.id ? 'text-accent' : 'text-faint'"
          class="shrink-0 transition-colors"
        />
        <span class="hidden sm:inline">{{ tab.label }}</span>
      </button>

      <!-- Projects + Open Source (work group) -->
      <div class="sm:hidden h-px bg-line mx-1 my-3" />
      <div class="hidden sm:block px-1 pt-3 pb-1">
        <div class="h-px bg-line" />
      </div>

      <button
        v-for="tab in workGroup"
        :key="tab.id"
        :title="tab.label"
        class="nav-item"
        :class="{ 'nav-item--active': activeTab === tab.id }"
        @click="$emit('select', tab.id)"
      >
        <component
          :is="tab.icon"
          :size="13"
          :class="activeTab === tab.id ? 'text-accent' : 'text-faint'"
          class="shrink-0 transition-colors"
        />
        <span class="hidden sm:inline">{{ tab.label }}</span>
      </button>

      <!-- Content + Personal (other group) -->
      <div class="sm:hidden h-px bg-line mx-1 my-3" />
      <div class="hidden sm:block px-1 pt-3 pb-1">
        <div class="h-px bg-line" />
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
          :class="activeTab === tab.id ? 'text-accent' : 'text-faint'"
          class="shrink-0 transition-colors"
        />
        <span class="hidden sm:inline">{{ tab.label }}</span>
      </button>
    </nav>

    <!-- Copyright — hidden on mobile -->
    <div class="hidden sm:block shrink-0 px-4 py-3 border-t border-line">
      <p class="text-[10px] text-ghost">© Michael Villere 2026</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue';
import { theme } from '../theme';

// The brand mark follows the machine: a section sign for the catalogue,
// a block cursor for the TRS-80.
const isTrs = computed(() => theme.value === 'trs80');

export interface TabConfig {
  id: string;
  label: string;
  icon: Component;
  path: string;
  group: 'work' | 'other' | null;
}

const props = defineProps<{
  tabs: TabConfig[];
  activeTab: string;
}>();

defineEmits<{ select: [id: string] }>();

const ungrouped = props.tabs.filter((t) => t.group === null);
const workGroup = props.tabs.filter((t) => t.group === 'work');
const otherGroup = props.tabs.filter((t) => t.group === 'other');
</script>

<style scoped>
.nav-item {
  @apply w-full flex items-center justify-center sm:justify-start gap-2.5 px-3 py-[7px] rounded
         text-xs text-body border-l-2 border-transparent transition-colors duration-150
         text-left hover:bg-hover hover:text-ink;
}

.nav-item--active {
  @apply bg-active text-ink border-accent;
}
</style>
