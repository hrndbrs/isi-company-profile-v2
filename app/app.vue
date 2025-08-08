<script setup lang="ts">
import { gsap } from "gsap";
import { SplitText, MorphSVGPlugin, ScrollTrigger } from "gsap/all";

onBeforeMount(() => {
  gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger, SplitText);
});
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
