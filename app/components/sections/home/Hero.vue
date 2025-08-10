<script setup lang="ts">
import { SplitText } from "gsap/all";

const { ctx } = useGSAP((gsap) => {
  const titleSplit = SplitText.create("#heroTitle", {
    type: "words",
  });
  const descSplit = SplitText.create("#heroDescription", {
    type: "lines",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#heroSection",
      start: "top bottom",
    },
  });

  let current = tl.to(".text-container", {
    duration: 0.08,
    opacity: 1,
  });

  descSplit.lines.forEach((el, i) => {
    const leftFadeIn = i % 2 === 0;

    current = current.from(
      el,
      {
        opacity: 0,
        x: leftFadeIn ? "-100px" : "100px",
      },
      "<=0.1",
    );
  });

  current.from(
    titleSplit.words,
    {
      opacity: 0,
      y: "50%",
      stagger: 0.09,
    },
    "<=0.09",
  );

  const tl2 = gsap.timeline({
    defaults: {
      ease: "sine.in",
    },
    scrollTrigger: {
      trigger: "#heroSection",
      scrub: 2,
      start: "center 40%",
      end: "center 20%",
    },
  });

  tl2.to(".text-container", {
    y: "-100%",
    opacity: 0,
  });
});
</script>

<template>
  <SectionWrapper
    id="heroSection"
    class="flex items-center py-24 text-brand-100"
    :inner-container-props="{
      class: 'gap-28',
    }"
  >
    <div>
      <div
        class="float-right inline-flex size-72 items-center justify-center text-[252px]"
      >
        ☺️
      </div>
    </div>
    <div class="text-container flex flex-col gap-4">
      <h1 class="text-title leading-tight font-bold" id="heroTitle">
        Your Perfect Career <span class="font-normal italic">Coach</span>
      </h1>
      <p class="text-xl" id="heroDescription">
        Inspirasi Satu Indonesia are dedicated to providing flexible,
        customized, and supportive services to empower individuals and
        organizations in Indonesia to embrace change and achieve their fullest
        potential.
      </p>
      <Button class="self-start"> Join Now </Button>
    </div>
  </SectionWrapper>
</template>
