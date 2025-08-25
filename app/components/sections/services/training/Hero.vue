<script setup lang="ts">
import { SplitText } from "gsap/all";

useGSAP(
  (gsap) => {
    const titleSplit = SplitText.create("p, #trainingHeroSectionTitle", {
      type: "lines",
    });

    gsap.from(titleSplit.lines, {
      opacity: 0,
      translateX: "-10%",
      stagger: 0.15,
      scrollTrigger: {
        trigger: titleSplit.lines,
        start: "top bottom",
      },
    });
  },
  {
    scope: "#trainingHeroSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="trainingHeroSection"
    class="max-md:pb-14 py-64 text-brand-200"
    aria-label="Training Service Hero"
    :inner-container-props="{
      class: 'gap-3',
    }"
  >
    <p class="text-h3 font-bold">Let’s Become Better!</p>
    <h1 id="trainingHeroSectionTitle" class="text-h1">
      Soft-skill Training <em class="font-normal">Sessions</em>
    </h1>
    <p class="text-xl">
      Boost your communication, leadership, teamwork, and emotional intelligence
      through our interactive workshops designed for real-world application.
    </p>
    <ButtonWithWave class="self-start"> Start Here </ButtonWithWave>
  </SectionWrapper>
</template>
