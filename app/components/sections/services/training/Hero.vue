<script setup lang="ts">
useGSAP(
  (gsap, self) => {
    splitText((SplitText) => {
      SplitText.create("p, #trainingHeroSectionTitle", {
        type: "lines",
        onSplit: (titleSplit) => {
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
      });
    }, self);
  },
  {
    scope: "#trainingHeroSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="trainingHeroSection"
    class="py-64 text-brand-200 max-md:pb-14"
    aria-label="Training Service Hero"
    :inner-container-props="{
      class: 'gap-3',
    }"
  >
    <p class="text-h3 font-bold" role="text">Let’s Become Better!</p>
    <h1 id="trainingHeroSectionTitle" class="text-h1">
      Soft-skill Training <em class="font-normal">Sessions</em>
    </h1>
    <p class="text-xl" role="text">
      Boost your communication, leadership, teamwork, and emotional intelligence
      through our interactive workshops designed for real-world application.
    </p>
    <ButtonWhatsapp class="self-start"> Start Here </ButtonWhatsapp>
  </SectionWrapper>
</template>
