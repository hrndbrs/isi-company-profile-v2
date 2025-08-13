<script setup lang="ts">
import { SplitText } from "gsap/all";

useGSAP(
  (gsap) => {
    const titleSplit = SplitText.create("#heroTitle", {
      type: "words",
    });
    const descSplit = SplitText.create("#heroDescription", {
      type: "lines",
    });

    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".text-container",
          start: "top bottom",
        },
      })
      .to(".text-container", {
        duration: 0.08,
        opacity: 1,
      });

    descSplit.lines.forEach((el, i) => {
      const leftFadeIn = i % 2 === 0;

      tl = tl.from(
        el,
        {
          opacity: 0,
          x: leftFadeIn ? "-100px" : "100px",
        },
        "<=0.1",
      );
    });

    tl.from(
      titleSplit.words,
      {
        opacity: 0,
        y: "50%",
        stagger: 0.09,
      },
      "<=0.09",
    );
  },
  {
    scope: "#heroSection",
  },
);
</script>

<template>
  <SectionWrapper id="heroSection" class="py-24 text-brand-100" :inner-container-props="{
    class: 'gap-28',
  }">
    <div>
      <div class="float-right inline-flex size-72 items-center justify-center text-[252px]">
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
