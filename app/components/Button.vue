<script setup lang="ts">
const { class: classList } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <button
    :class="
      cn(
        'inline-flex items-center justify-center gap-1.5 border p-[0.625rem] text-body font-bold leading-body rounded-full',
        'border-secondary-200 bg-secondary-300 text-foreground duration-200',
        'hover:bg-secondary-100 hover:text-secondary-300',
        'disabled:border-natural-200 disabled:bg-natural-100 disabled:text-natural-200',
        'active:bg-foreground',
        classList,
      )
    "
  >
    <slot />
  </button>
</template>
