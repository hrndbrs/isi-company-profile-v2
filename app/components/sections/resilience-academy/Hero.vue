<script setup lang="ts">
import { SplitText } from "gsap/all";

useGSAP(
  (gsap) => {
    const titleSplit = SplitText.create("#resilienceAcademyHeroSectionTitle", {
      type: "lines",
    });

    gsap
      .timeline({
        scrollTrigger: {
          start: "top bottom",
          trigger: "#resilienceAcademyHeroSectionTitle",
        },
      })
      .fromTo(
        "#graduationCap",
        {
          opacity: 0,
          scale: 0,
          y: "100%",
        },
        {
          duration: 0.8,
          opacity: 1,
          scale: 5,
        },
      )
      .to("#graduationCap", {
        y: 0,
        scale: 1,

        duration: 0.6,
      })
      .from(
        ".additional",
        {
          opacity: 0,
        },
        "<",
      )
      .from(
        titleSplit.lines,
        {
          duration: 0.7,
          opacity: 0,
          y: "-50%",
          ease: "bounce.out",
          stagger: 0.2,
        },
        "<",
      );
  },
  {
    scope: "#resilienceAcademyHeroSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="resilienceAcademyHeroSection"
    class="py-67 lg:py-68"
    aria-label="Resilience Academy Hero"
    :inner-container-props="{
      class: 'items-center',
    }"
  >
    <Lottie
      id="graduationCap"
      animation-link="/assets/lotties/graduation-cap.json"
      class="z-10 mb-1.5"
      :height="64"
      :width="64"
    />
    <h1
      id="resilienceAcademyHeroSectionTitle"
      class="text-center text-h1 font-bold text-brand-200"
    >
      Resilience <em class="font-normal text-error-300">Academy</em>
    </h1>
    <div class="additional flex flex-col items-center">
      <p class="text-center leading-compact text-natural-border">
        Here to prepare the next generation to face future challenges with
        confidence and adaptability
      </p>
      <ButtonWithWave class="mt-1.5">Join Discord</ButtonWithWave>
    </div>
  </SectionWrapper>
</template>
