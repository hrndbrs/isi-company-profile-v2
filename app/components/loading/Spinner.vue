<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <div class="relative flex items-center justify-center">
    <motion.div
      class="absolute size-20 rounded-full border-4 border-brand-200/50 border-t-primary-500"
      :animate="{ rotate: 360 }"
      :transition="{ duration: 2, repeat: Infinity, ease: 'linear' }"
    />

    <motion.div
      class="absolute size-14 rounded-full border-2 border-secondary-200/75"
      :animate="{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }"
      :transition="{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }"
    />

    <motion.div
      v-for="particle in 4"
      :key="`particle-${particle}`"
      class="absolute size-1 rounded-full bg-secondary-200"
      :animate="{
        x: [0, 30, -30, 0],
        y: [0, -30, 30, 0],
        opacity: [0, 1, 1, 0],
      }"
      :transition="{
        duration: 3,
        repeat: Infinity,
        delay: particle * 0.5,
        ease: 'easeInOut',
      }"
    />
  </div>
</template>
