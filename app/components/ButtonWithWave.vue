<script setup lang="ts">
const buttonRef = useTemplateRef<HTMLButtonElement>("buttonRef");
const isHovered = useElementHover(buttonRef);
const size = 22;
</script>

<template>
  <Button ref="buttonRef">
    <slot />
    <Lottie
      :pause-animation="!isHovered"
      animation-link="/assets/lotties/wave.json"
      class="rounded-full !bg-neutral-50"
      :width="size"
      :height="size"
    />
  </Button>
</template>
