<template>
  <div class="max-w-2xl space-y-8">
    <div>
      <div class="flex items-center gap-2 text-xs text-faint mb-4">
        <span class="text-accent">$</span>
        <span>cat personal.txt</span>
      </div>

      <div class="border border-line rounded bg-card p-5">
        <p class="font-prose text-sm text-body leading-relaxed whitespace-pre-line">{{ personal }}</p>
      </div>
    </div>

    <!-- Shows up only on the TRS-80 theme. See DriverDemo.vue. -->
    <DriverDemo />
  </div>
</template>

<script setup lang="ts">
import { personal } from '../../data/about';
import DriverDemo from '../DriverDemo.vue';
</script>
