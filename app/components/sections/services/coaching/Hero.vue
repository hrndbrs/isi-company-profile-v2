<script setup lang="ts">
useGSAP(
  (gsap, self) => {
    splitText((SplitText) => {
      SplitText.create("#coachingHeroSectionTitle", {
        type: "words",
        onSplit: (titleSplit) => {
          gsap.set(titleSplit.words, {
            transformOrigin: "bottom",
          });

          gsap.from(titleSplit.words, {
            ease: "elastic.out",
            duration: 1,
            stagger: 0.2,
            scaleY: 0,
            scrollTrigger: {
              trigger: "#coachingHeroSectionTitle",
              start: "top bottom",
            },
          });
        },
      });
    }, self);

    gsap.from("p", {
      opacity: 0,
      stagger: 0.3,
      x: "-100px",
      scrollTrigger: {
        trigger: "p",
        start: "top bottom",
      },
    });
  },
  {
    scope: "#coachingHeroSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="coachingHeroSection"
    aria-label="Coaching Service Hero"
    class="py-72 max-md:pb-14"
    :inner-container-props="{
      class: 'text-brand-200 gap-3',
    }"
  >
    <p class="text-h3 font-bold">Let’s Grow!</p>
    <h1 id="coachingHeroSectionTitle" class="text-h1">
      Career Coaching
      <em class="font-normal">Sessions</em>
    </h1>
    <p class="text-xl">
      Discover your path, set clear goals, and achieve growth with personalized
      coaching sessions designed to help you succeed.
    </p>
    <ButtonWhatsapp class="self-start"> Start Here </ButtonWhatsapp>
  </SectionWrapper>
</template>
