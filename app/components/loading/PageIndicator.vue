<script setup lang="ts">
import { motion } from "motion-v";

const { isLoading, progress } = useLoadingIndicator();
</script>

<template>
  <AnimatePresence>
    <motion.progress
      key="loadingIndicator"
      v-if="isLoading"
      class="fixed top-0 left-0 z-[3000] h-1 w-dvw appearance-none bg-neutral-200"
      :initial="{ scaleX: 0, opacity: 0, transformOrigin: 'left' }"
      :animate="{ scaleX: 1, opacity: 1, transformOrigin: 'right' }"
      :exit="{ scaleX: 0, opacity: 0 }"
      max="100"
      :value="progress"
    />
  </AnimatePresence>
</template>

<style scoped>
@reference "~/assets/css/main.css";

progress::-webkit-progress-bar,
progress::-webkit-progress-value,
progress::-moz-progress-bar {
  @apply animate-pulse bg-gradient-to-r from-primary-200 via-brand-200 via-75% to-primary-500;
}
</style>
