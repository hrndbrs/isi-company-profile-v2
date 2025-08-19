<script setup lang="ts" generic="T">
import { motion } from "motion-v";

const { items } = defineProps<{
  items: T[];
}>();

const carouselId = `carousel-${useId()}`;
const activeIndex = ref(0);
const startX = ref(0);

const DRAG_BUFFER = 200;
function handleDragStart(e: PointerEvent) {
  startX.value = e.clientX;
}
function handleDragEnd(e: PointerEvent) {
  const dx = startX.value - e.clientX;

  if (dx <= -DRAG_BUFFER && activeIndex.value !== 0) {
    handlePrev();
  } else if (dx > DRAG_BUFFER && activeIndex.value < items.length - 1) {
    handleNext();
  }
}

function changeIndex(newIndex: number) {
  if (newIndex > items.length - 1) activeIndex.value = 0;
  else if (newIndex < 0) activeIndex.value = items.length - 1;
  else activeIndex.value = newIndex;
}
const handlePrev = () => changeIndex(activeIndex.value - 1);
const handleNext = () => changeIndex(activeIndex.value + 1);
</script>

<template>
  <div :data-id="carouselId" class="relative flex flex-col gap-16">
    <slot name="arrowPrev" :handlePrev="handlePrev">
      <button class="carousel-arrow left-0" @click="handlePrev()">
        <Icon
          name="heroicons:chevron-left-solid"
          class="size-8 text-neutral-900"
        />
      </button>
    </slot>

    <slot name="arrowNext" :handleNext="handleNext">
      <button class="carousel-arrow right-0" @click="handleNext()">
        <Icon
          name="heroicons:chevron-right-solid"
          class="size-8 text-neutral-900"
        />
      </button>
    </slot>

    <motion.div
      class="flex"
      drag="x"
      :onDragStart="handleDragStart"
      :onDragEnd="handleDragEnd"
      :drag-constraints="{
        left: 0,
        right: 0,
      }"
      :animate="{
        translateX: `-${activeIndex * 100}%`,
      }"
      :transition="{ ease: 'easeInOut', duration: 0.7 }"
    >
      <div
        v-for="(item, i) of items"
        class="w-full shrink-0 cursor-grab px-16"
        :key="`carousel-item-${carouselId}-${i}`"
      >
        <slot
          :activeIndex="activeIndex"
          :item="item"
          :index="i"
          :key="`${carouselId}-${i}`"
        />
      </div>
    </motion.div>

    <div class="flex flex-wrap justify-center gap-8">
      <button
        v-for="(_, index) of items"
        class="size-4 rounded-full bg-secondary-300 transition-opacity duration-200"
        :class="{
          'opacity-15 hover:opacity-100': index !== activeIndex,
        }"
        :key="`carousel-indicator-${carouselId}-${index}`"
        @click="changeIndex(index)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.carousel-arrow {
  @apply absolute top-1/2 -translate-y-1/2 opacity-20 transition-all duration-200 hover:opacity-100;

  z-index: 2;
}
</style>
