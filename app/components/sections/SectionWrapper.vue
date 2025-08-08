<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const { class: classList = "", innerContainerProps = {} } = defineProps<{
  class?: string;
  innerContainerProps?: HTMLAttributes;
}>();

const { class: innerClass, ...props } = innerContainerProps;
</script>

<template>
  <section :class="cn('px-5', classList)">
    <div :class="cn('flex container flex-col', innerClass)" v-bind="props">
      <slot />
    </div>
  </section>
</template>
