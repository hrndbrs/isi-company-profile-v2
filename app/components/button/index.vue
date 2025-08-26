<script setup lang="ts">
import { motion } from "motion-v";

const { class: classList } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <motion.button
    :class="
      cn(
        'inline-flex items-center justify-center gap-1.5 border p-[0.625rem] font-bold rounded-full',
        'border-secondary-300 bg-secondary-500 text-foreground duration-200',
        'hover:bg-secondary-200 hover:text-secondary-500',
        'disabled:border-natural-200 disabled:bg-natural-100 disabled:text-natural-200',
        'active:bg-foreground active:text-secondary-500',
        classList,
      )
    "
    :while-press="{
      scale: 0.95,
      transition: {
        duration: 0.01,
      },
    }"
  >
    <slot />
  </motion.button>
</template>
