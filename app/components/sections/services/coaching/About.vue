<script setup lang="ts">
useGSAP(
  (gsap) => {
    gsap.from(".role-label", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: ".role-label",
        start: "top bottom",
      },
    });
  },
  {
    scope: "#coachingAboutSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="coachingAboutSection"
    class="lg:py-64 py-32"
    aria-label="About Coaching Service"
    :inner-container-props="{
      class: 'lg:flex-row justify-between items-center gap-14 lg:gap-28',
    }"
  >
    <div>
      <Lottie animation-link="/assets/lotties/sun.json" class="max-w-xs" />
    </div>

    <div class="text-brand-200">
      <h2 class="text-h2">
        Never lose your way! We are here as <br />
        <span class="role-label">
          A <em class="font-normal text-secondary-300">Friend</em>. <br />
        </span>
        <span class="role-label">
          A <em class="font-normal text-error-300">Guide</em>. <br />
        </span>
        <span class="role-label">
          A <em class="font-normal text-success-500">Coach</em>.
        </span>
      </h2>
      <p class="mt-3">
        Our Life Coaching offers one-on-one sessions tailored for your needs.
        Whether you’re starting out, looking to advance, or contemplating a
        career change, our certified coaches provide expert guidance to help you
        navigate your journey and reach your full potential.
      </p>
    </div>
  </SectionWrapper>
</template>
