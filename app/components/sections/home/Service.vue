<script setup lang="ts">
import { SplitText } from "gsap/all";

useGSAP(
  (gsap) => {
    const titleSplit = SplitText.create("#serviceSectionTitle", {
      type: "lines",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".inner-wrapper",
          start: "top 80%",
        },
      })
      .from(titleSplit.lines, {
        opacity: 0,
        y: "70%",
        stagger: 0.1,
      })
      .from(
        ".service",
        {
          opacity: 0,
          y: "-70%",
          stagger: 0.1,
        },
        "-=0.45",
      );
  },
  {
    scope: "#serviceSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="serviceSection"
    class="py-32 text-brand-100"
    aria-label="Services"
    :inner-container-props="{
      class: 'inner-wrapper flex-row gap-24',
    }"
  >
    <h2 id="serviceSectionTitle" class="flex-1 text-title leading-tight mb-74">
      <span class="font-bold">We are the</span> Expert
    </h2>
    <div class="flex-1 flex flex-col gap-20 mt-103">
      <div class="service">
        <h3>
          <strong>Career</strong>
          <em> Coaching </em>
        </h3>
        <p>
          Personalized sessions designed to help individuals navigate their
          career paths, set clear goals, and achieve professional growth.
        </p>
      </div>

      <div class="service">
        <h3>
          <em>{{ "Soft-Skill " }}</em>
          <strong>Training</strong>
        </h3>
        <p>
          Focus on enhancing essential interpersonal skills such as
          communication, leadership, teamwork, and emotional intelligence.
        </p>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

h3 {
  @apply text-3xl leading-tight;
}

p {
  @apply mt-2;
}
</style>
