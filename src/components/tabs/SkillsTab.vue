<template>
  <div class="max-w-2xl space-y-8">
    <div v-for="group in skillGroups" :key="group.id">
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>man NiftyMike | grep '{{ group.id.toUpperCase() }}'</span>
      </div>

      <div class="flex flex-wrap gap-2">
        <template v-for="(skill, i) in group.skills" :key="i">
          <div v-if="skill === SKILL_LINE_BREAK" class="w-full" />
          <span
            v-else
            class="text-xs px-2.5 py-1 rounded border border-line bg-card text-body"
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
