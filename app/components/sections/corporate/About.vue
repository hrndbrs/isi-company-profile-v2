<script setup lang="ts">
useGSAP(
  (gsap) => {
    const emTitleSelector = "#corporateAboutSectionTitle em";

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

    gsap.utils.toArray<Element>(".detail h3, .detail p").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: "100px",
        duration: 0.4 + i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        },
      });
    });
  },
  {
    scope: "#corporateAboutSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="corporateAboutSection"
    class="py-32 lg:py-64"
    aria-label="About ISI For Business"
    :inner-container-props="{
      class: 'lg:flex-row justify-between items-center gap-14 lg:gap-28',
    }"
  >
    <div>
      <Lottie animation-link="/assets/lotties/muscle.json" class="max-w-xs" />
    </div>

    <div class="lg:max-w-2xl text-brand-200">
      <div class="mb-16">
        <h2 id="corporateAboutSectionTitle" class="text-h2">
          We are here to help you <em class="font-normal">grow!</em>
        </h2>
        <p class="mt-4">
          Whether you’re looking to improve leadership capabilities, enhance
          teamwork, or develop new skills within your workforce, ISI provides
          the expertise and support necessary for sustainable growth and
          success.
        </p>
      </div>
      <div class="detail flex flex-col gap-12">
        <div>
          <h3><em>Customizable</em> Programs</h3>
          <p>
            Solutions tailored to your organization’s specific needs and goals.
          </p>
        </div>
        <div>
          <h3><em>Hybrid</em> Delivery</h3>
          <p>Flexible options for both online and offline training.</p>
        </div>
        <div>
          <h3><em>Ongoing</em> Support</h3>
          <p>Continuous follow-up and support to ensure long-term impact.</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.detail {
  h3 {
    @apply text-h3 font-bold text-secondary-300;

    em {
      @apply font-normal;
    }
  }

  p {
    @apply mt-3;
  }
}
</style>
