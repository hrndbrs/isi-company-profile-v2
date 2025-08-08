<script setup lang="ts">
import { gsap } from "gsap";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onBeforeMount(() => {
  gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);
});
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
