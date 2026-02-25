<template>
  <div class="max-w-2xl space-y-8">
    <div>
      <div class="flex items-center gap-2 text-xs text-slate-600 mb-4">
        <span class="text-cyan-400">$</span>
        <span>cat personal.txt</span>
      </div>

      <div class="space-y-3">
        <div
          v-for="section in sections"
          :key="section.id"
          class="border border-dashed border-slate-800/60 rounded bg-shell-card/40 px-4 py-3"
        >
          <p class="text-xs font-medium text-slate-500 mb-1">{{ section.label }}</p>
          <p class="text-xs text-slate-600 leading-relaxed">{{ section.placeholder }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sections = [
  {
    id: 'family',
    label: 'Family',
    placeholder: '[PLACEHOLDER]',
  },
  {
    id: 'ranch',
    label: 'Ranch Life',
    placeholder: '[PLACEHOLDER]',
  },
  {
    id: 'home-automation',
    label: 'Home Automation',
    placeholder: '[PLACEHOLDER]',
  },
  {
    id: 'interests',
    label: 'Other Interests',
    placeholder: '[PLACEHOLDER]',
  },
];
</script>
