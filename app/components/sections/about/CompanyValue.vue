<script setup lang="ts">
useGSAP(
  (gsap) => {
    gsap.from([".section-title h2", ".section-title p", ".content > *"], {
      opacity: 0,
      y: "150px",
      stagger: 0.18,
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 65%",
      },
    });
  },
  {
    scope: "#companyValueSection",
  },
);
</script>

<template>
  <SectionWrapper id="companyValueSection" class="py-52 text-brand-100" :inner-container-props="{
    class: 'flex-row gap-24',
  }">
    <div class="flex-1">
      <NuxtImg src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg"
        class="size-full object-contain" />
    </div>
    <div class="section-title max-w-2xl">
      <h2 class="mb-7 text-7xl leading-tight font-bold">
        Inspirasi Satu <em class="font-normal">Indonesia</em>
      </h2>
      <p class="mb-18">
        Established on October 1st, 2020, we are a Jakarta-based coaching,
        training, and counseling company committed to empower change to
        individuals and organizations.
      </p>

      <div class="content">
        <div>
          <h3>Vision</h3>
          <p>
            Creating holistic solutions that inspire both individuals and
            organisations to reach their full potential for change and achieve
            sustainable success.
          </p>
        </div>
        <div>
          <h3>Mission</h3>
          <p>
            To provide comprehensive guidance and support focused on an
            individual's career development, through coaching, training, and
            counselling, accompanying them to reach success and life
            satisfaction.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.content {
  @apply flex flex-col gap-12;
}

.content h3 {
  @apply mb-3 text-4xl leading-tight text-secondary-200 italic;
}
</style>
