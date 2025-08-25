<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";

const containerRef = useTemplateRef<HTMLDivElement>("containerRef");
const isVisible = useElementVisibility(containerRef);

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <ClientOnly>
    <Vue3Lottie
      ref="containerRef"
      class="inline-block"
      v-bind="{
        pauseAnimation: !isVisible,
        noMargin: true,
        ...$attrs,
      }"
    />
  </ClientOnly>
</template>
