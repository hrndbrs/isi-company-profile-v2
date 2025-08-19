<script setup lang="ts">
const { class: classList } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <button :class="cn(
    'inline-flex items-center justify-center gap-1.5 border p-[0.625rem] text-body font-bold leading-body rounded-full',
    'border-secondary-300 bg-secondary-500 text-foreground duration-200',
    'hover:bg-secondary-200 hover:text-secondary-500',
    'disabled:border-natural-200 disabled:bg-natural-100 disabled:text-natural-200',
    'active:bg-foreground',
    classList,
  )
    ">
    <slot />
  </button>
</template>
