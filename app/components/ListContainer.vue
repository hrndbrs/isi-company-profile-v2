<script setup lang="ts" generic="T extends { id: string }">
import { motion } from "motion-v";

defineProps<{
  items: T[];
  pageCount: number;
}>();
</script>

<template>
  <div class="mt-11 flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-y-6">
    <AnimatePresence>
      <motion.div
        v-for="(item, i) in items"
        :key="item.id"
        :initial="{ opacity: 0, translateY: '50px' }"
        :animate="{
          opacity: 1,
          translateY: 0,
          transition: { delay: i * 0.15, duration: 0.3 },
        }"
        :exit="{ opacity: 0, translateY: '100px' }"
      >
        <slot :item />
      </motion.div>
    </AnimatePresence>
  </div>

  <Pagination :page-count class="mt-14 justify-center" />
</template>

<style scoped>
@reference "~/assets/css/main.css";

:deep(.inactive) {
  @apply hidden;
}

:deep(.pagination-item) {
  @apply rounded-full bg-foreground text-brand-200;

  &.active {
    @apply bg-brand-200 text-foreground;
  }
}
</style>
