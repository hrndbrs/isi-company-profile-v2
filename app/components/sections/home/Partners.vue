<script setup lang="ts">
useGSAP((gsap) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#partnersSection",
        start: "10% 90%",
      },
    })
    .from("#sectionTitle", {
      y: "50%",
      duration: 1.3,
      opacity: 0,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#partnersSection",
        start: "center center",
        scrub: 3,
        pin: true,
      },
    })
    .fromTo(
      ".mask-element",
      {
        scale: 2,
      },
      {
        scale: 0,
      },
    );
});
</script>

<template>
  <SectionWrapper
    id="partnersSection"
    class="relative overflow-clip py-56"
    :inner-container-props="{
      class: 'flex-row justify-between',
    }"
  >
    <div
      class="mask-element absolute top-1/2 left-1/2 z-10 aspect-square min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-saturation"
    />
    <h2 id="sectionTitle" class="flex-1 text-title font-bold text-brand-100">
      We Help Them Bring <span class="font-normal italic">Colors</span>
    </h2>
    <div class="flex-1"></div>
  </SectionWrapper>
</template>
