<script setup lang="ts">
import { SplitText } from "gsap/all";

useGSAP(
  (gsap) => {
    const titleSplit = SplitText.create("h2", {
      type: "words",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#ctaSection > div",
          start: "top bottom",
        },
      })
      .from("p", {
        y: "100%",
        duration: 0.5,
        ease: "ease.inOut",
      })
      .from(titleSplit.words, {
        duration: 1.3,
        scale: 0,
        stagger: 0.2,
        ease: "elastic.out",
        yoyo: true,
      });
  },
  {
    scope: "#ctaSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="ctaSection"
    class="bg-primary-300 text-foreground py-80"
    :inner-container-props="{
      class: 'flex-row',
    }"
  >
    <div class="gap-px flex flex-col max-w-3xl">
      <div class="overflow-clip">
        <p class="font-semibold text-3xl leading-tight">We are here</p>
      </div>
      <h2 class="font-bold leading-tight text-title">
        To Help You <em class="font-normal text-success-200">Grow</em>
      </h2>
      <Button class="self-start">Contact Us</Button>
    </div>
  </SectionWrapper>
</template>
