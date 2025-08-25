<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import { SplitText } from "gsap/all";

const { md, lg } = useBreakpoints(breakpointsTailwind);
const lottieSize = computed(() => {
  const height = lg.value ? 110 : 76;
  return {
    width: height * 1.25,
    height,
  };
});

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
        stagger: 0.1,
        y: md.value ? "70%" : undefined,
        x: md.value ? undefined : "-100%px",
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
    class="py-32 text-brand-200"
    aria-label="Services"
    :inner-container-props="{
      class: 'inner-wrapper md:flex-row gap-20',
    }"
  >
    <h2 id="serviceSectionTitle" class="flex-1 text-h1">
      We are the <span class="font-normal">Expert</span>
      <Lottie
        animation-link="/assets/lotties/sparkles.json"
        :width="lottieSize.width"
        :height="lottieSize.height"
      />
    </h2>
    <div class="flex flex-1 flex-col gap-20 md:mt-36 lg:mt-103">
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
  @apply text-h4;
}

p {
  @apply mt-2 text-h6;
}
</style>
