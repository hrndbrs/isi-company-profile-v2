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

const partners: Partner[] = Array(16)
  .fill(null)
  .map((_, i) => ({
    name: `partner-${i}`,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg",
  }));
</script>

<template>
  <div class="section-wrapper">
    <SectionWrapper id="partnerSection" class="@container relative overflow-clip py-56" aria-label="Partner Companies"
      :inner-container-props="{
        class: 'lg:flex-row justify-between lg:gap-26 gap-12',
      }">
      <div
        class="mask-element absolute top-1/2 left-1/2 z-10 aspect-square min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-200 rounded-full bg-white mix-blend-saturation" />
      <h2 id="partnerSectionTitle" class="flex-1 text-h1 text-brand-200">
        We Help Them Bring <em class="font-normal">Colors</em>
      </h2>
      <div class="@container flex flex-1 items-center justify-center">
        <div class="flex max-w-md flex-wrap justify-center gap-3 @lg:max-w-lg @lg:gap-8">
          <NuxtImg v-for="partner in partners" :src="partner.image" :alt="partner.name" :key="partner.name"
            sizes="72px sm:116px" class="aspect-video max-w-18 flex-1 shrink-0 object-contain @md:max-w-24" />
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>
