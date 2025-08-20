<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const slot = useSlots();
const showBodyContainer = computed(
  () => slot.title || slot.subtitle || slot.content,
);
const { class: classList } = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('card text-brand-500 overflow-clip rounded-2xl', classList)">
    <slot name="illustration" />
    <div v-if="showBodyContainer" class="flex flex-col gap-4 p-3">
      <h3 v-if="$slots.title" class="card-title">
        <slot name="title" />
      </h3>

      <p v-if="$slots.subtitle" class="card-subtitle">
        <slot name="subtitle" />
      </p>

      <div v-if="$slots.content" class="card-content">
        <slot name="content" />
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.card-subtitle,
.card-content {
  @apply leading-compressed;
}

.card-title {
  @apply text-h5 font-bold;
}

.card-subtitle {
  @apply text-xs;
}
</style>
