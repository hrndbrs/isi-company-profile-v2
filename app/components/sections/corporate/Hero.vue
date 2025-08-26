<script setup lang="ts">
import { SplitText } from "gsap/all";

useGSAP(
  (gsap) => {
    const titleSplit = SplitText.create("#corporateHeroSectionTitle span", {
      type: "chars",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#corporateHeroSectionTitle",
          start: "top bottom",
        },
      })
      .from(titleSplit.chars, {
        opacity: 0,
        y: "-30%",
        stagger: 0.08,
      })
      .from(
        "#corporateHeroSectionTitle em",
        {
          opacity: 0,
          x: "30px",
        },
        "-=0.5",
      );
  },
  {
    scope: "#corporateHeroSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="corporateHeroSection"
    class="py-64 text-brand-200 max-md:pb-14"
    :inner-container-props="{
      class: 'gap-3',
    }"
    aria-label="Corporate Hero"
  >
    <p class="text-h3">
      Inspirasi Satu Indonesia <br />
      for Business
    </p>

    <h1 id="corporateHeroSectionTitle" class="text-h1">
      Drive <span class="text-nowrap">Success,</span><br />
      Build Strong <em class="inline-block font-normal">Teams</em>
    </h1>

    <p>
      Enhance your team’s performance with personalized coaching and training
      solutions designed to foster leadership and team colaborations.
    </p>
    <ButtonWhatsapp class="self-start"> Start Here </ButtonWhatsapp>
  </SectionWrapper>
</template>
