<script setup lang="ts">
import { SplitText } from "gsap/all";

useGSAP((gsap) => {
  const titleSplit = SplitText.create("#heroTitle1", {
    type: "words, chars",
  });
  const title2Split = SplitText.create("#heroTitle2", {
    type: "lines",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#heroSection",
      start: "top bottom",
    },
  });

  tl.fromTo(
    "#heroSection",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.05,
    },
  )
    .from(
      titleSplit.chars,
      {
        opacity: 0,
        x: "58%",
        stagger: 0.05,
      },
      "<",
    )
    .from(
      title2Split.lines,
      {
        opacity: 0,
        x: "140px",
        duration: 1.5,
        ease: "back.out",
      },
      "<=0.08",
    );
});
</script>

<template>
  <SectionWrapper
    id="heroSection"
    class="flex h-dvh items-center text-brand-100"
  >
    <div class="flex max-w-4xl flex-col gap-3">
      <p class="text-4xl leading-tight">We are</p>
      <h1 class="text-title leading-tight">
        <span id="heroTitle1" class="font-bold"> Inspirasi Satu </span>
        <span id="heroTitle2" class="font-normal italic">Indonesia</span>
      </h1>
      <p class="text-xl">
        Dedicated to providing flexible, customized, and supportive services to
        empower individuals and organizations in Indonesia to embrace change and
        achieve their fullest potential.
      </p>
    </div>
  </SectionWrapper>
</template>
