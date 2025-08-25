<script setup lang="ts">
import { motion } from "motion-v";

const { loadingText = "Loading..." } = defineProps<{
  loadingText?: string;
}>();
</script>

<template>
  <div class="flex flex-col items-center justify-center py-52">
    <LoadingSpinner />

    <motion.div
      class="mt-14 max-w-3xs text-center text-h6 font-medium text-wrap text-brand-200"
      :animate="{ opacity: [0, 1, 1, 0] }"
      :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
    >
      <span v-for="(char, index) in loadingText" :key="index">
        <motion.span
          :animate="{ opacity: [0, 1] }"
          :transition="{ delay: index * 0.1, duration: 0.3 }"
        >
          {{ char }}
        </motion.span>
      </span>
    </motion.div>
  </div>
</template>
