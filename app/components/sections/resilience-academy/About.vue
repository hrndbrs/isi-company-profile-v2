<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";

const { md } = useBreakpoints(breakpointsTailwind);
const lottieSize = computed(() => (md.value ? 268 : 140));

useGSAP(
  (gsap) => {
    const selectors = ["h2", "h2 ~ *"];

    gsap.utils.toArray<HTMLElement>(selectors).forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: "100px",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });
  },
  {
    scope: "#resilienceAcademyAboutSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="resilienceAcademyAboutSection"
    class="pt-5 pb-48 md:py-23"
    aria-label="About Resilience Academy"
  >
    <Lottie
      class="self-end"
      animation-link="/assets/lotties/target.json"
      :width="lottieSize"
      :height="lottieSize"
    />
    <h2
      class="text-h2 font-bold text-brand-200 break-words"
      id="resilienceAcademyAboutSectionTitle"
    >
      We are on a <em class="font-normal">mission!</em> <br />
      And our future depends on the next generations
    </h2>
    <p class="mt-7 mb-14 leading-compact text-natural-500">
      The strength and success of our future depend on the resilience and
      adaptability of the next generation. As we face an ever-evolving world
      filled with unprecedented challenges, it is crucial that we equip our
      youth with the skills and mindset to not just survive but thrive.
      <br />
      <br />
      We are committed to nurture their inner strength, foster a growth mindset,
      and empower them to overcome obstacles with confidence and grace.
      Together, we can build a generation of leaders who will inspire change and
      drive progress.
    </p>
    <h3 class="text-h3 text-secondary-300 italic">
      Join us in this vital movement, and let’s create a brighter, more
      resilient future together.
    </h3>
  </SectionWrapper>
</template>
