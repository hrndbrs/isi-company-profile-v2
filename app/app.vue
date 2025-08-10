<script setup lang="ts">
import { gsap } from "gsap";
import { MorphSVGPlugin, ScrollTrigger, SplitText } from "gsap/all";

onBeforeMount(() => {
  gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger, SplitText);
});

onMounted(() => {
  // Prevent FOUC
  const main = document.querySelector("main");
  if (!main) return;

  main.style.visibility = "visible";
});
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
