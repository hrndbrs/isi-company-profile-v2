<script setup lang="ts">
const { urls } = useExternalNavigation();

const { target = "_blank" } = defineProps<{
  buttonClass?: string;
  target?: HTMLAnchorElement["target"];
}>();
</script>

<template>
  <a :href="urls.whatsapp" :target>
    <ButtonWithWave v-bind="$attrs" :class="buttonClass">
      <slot />
    </ButtonWithWave>
  </a>
</template>
