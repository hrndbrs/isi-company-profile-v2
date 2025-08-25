<script setup lang="ts">
useGSAP(
  (gsap) => {
    const emTitleSelector = "#trainingAboutSectionTitle em";

    gsap.set(emTitleSelector, {
      display: "inline-block",
      transformOrigin: "bottom",
    });

    gsap.from(emTitleSelector, {
      ease: "elastic.out",
      duration: 1.2,
      scaleY: 0,
      scrollTrigger: {
        trigger: emTitleSelector,
        start: "top bottom",
      },
    });
  },
  {
    scope: "#trainingAboutSection",
  },
);
</script>

<template>
  <SectionWrapper id="trainingAboutSection" class="py-32 lg:py-64" aria-label="About Training Service"
    :inner-container-props="{
      class: 'lg:flex-row justify-between items-center gap-14 lg:gap-28',
    }">
    <div>
      <Lottie animation-link="/assets/lotties/rocket.json" class="max-w-xs" />
    </div>

    <div class="lg:max-w-2xl text-brand-200">
      <h2 id="trainingAboutSectionTitle" class="text-h2">
        You can always become a <em class="font-normal">better</em> you!
      </h2>
      <p class="mt-3">
        We focus on enhancing the essential interpersonal skills needed for
        personal and professional success. Through engaging and practical
        workshops, participants learn to communicate effectively, lead with
        confidence, work collaboratively, and manage emotions intelligently.
      </p>
    </div>
  </SectionWrapper>
</template>
