<script setup lang="ts">
import type { Partner } from "~/types/schema.type";

useGSAP(
  (gsap) => {
    gsap.from("#partnerSectionTitle", {
      duration: 1.6,
      opacity: 0,
      scrollTrigger: {
        trigger: "#partnerSection",
      },
    });

    gsap.to(".mask-element", {
      scale: 0,
      scrollTrigger: {
        trigger: "#partnerSection",
        start: "center center",
        scrub: 3,
        pin: true,
      },
    });
  },
  {
    scope: ".section-wrapper:has(#partnerSection)",
  },
);

const partners: Partner[] = Array(13)
  .fill(null)
  .map((_, i) => ({
    name: `partner-${i}`,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg",
  }));
</script>

<template>
  <div class="section-wrapper">
    <SectionWrapper
      id="partnerSection"
      class="relative overflow-clip py-56 @container"
      aria-label="Partner Companies"
      :inner-container-props="{
        class: 'flex-row justify-between',
      }"
    >
      <div
        class="mask-element scale-200 absolute top-1/2 left-1/2 z-10 aspect-square min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-saturation"
      />
      <h2
        id="partnerSectionTitle"
        class="flex-1 text-title font-bold text-brand-100"
      >
        We Help Them Bring <span class="font-normal italic">Colors</span>
      </h2>
      <div class="flex-1 @container flex items-center justify-center">
        <div class="grid @sm:grid-cols-4 gap-8">
          <NuxtImg
            v-for="partner in partners"
            :src="partner.image"
            :alt="partner.name"
            :key="partner.name"
            class="max-w-28 aspect-video object-contain"
          />
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>
