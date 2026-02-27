<template>
  <div class="max-w-2xl space-y-8">
    <div v-for="group in skillGroups" :key="group.id">
      <div class="flex items-center gap-2 text-xs text-slate-600 mb-4">
        <span class="text-cyan-400">$</span>
        <span>man NiftyMike | grep '{{ group.id.toUpperCase() }}'</span>
      </div>

      <div class="flex flex-wrap gap-2">
        <template v-for="(skill, i) in group.skills" :key="i">
          <div v-if="skill === SKILL_LINE_BREAK" class="w-full" />
          <span
            v-else
            class="text-xs px-2.5 py-1 rounded border border-shell-border bg-shell-card text-slate-300"
          >
            {{ skill }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skillGroups, SKILL_LINE_BREAK } from '../../data/skills';
</script>
