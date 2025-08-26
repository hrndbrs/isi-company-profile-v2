<script setup lang="ts">
useGSAP(
  (gsap) => {
    gsap.from(".section-title > *", {
      duration: 3,
      width: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 75%",
      },
    });
  },
  { scope: "#locationSection" },
);

useGSAP(
  (gsap) => {
    const twoCards = gsap.utils.toArray("#twoCards path") as [Element, Element];

    twoCards.forEach((card) => {
      gsap.set(card, {
        opacity: 0,
      });
    });

    gsap
      .timeline({
        defaults: {
          duration: 0.4,
          ease: "back.inOut",
        },
        scrollTrigger: {
          trigger: "#twoCards",
          start: "top 75%",
        },
      })
      .to(twoCards, {
        opacity: 1,
      })
      .to(
        twoCards[0],
        {
          rotate: "-20deg",
          x: "-150%",
          y: "20%",
          yoyo: true,
          repeat: 1,
        },
        "<",
      )
      .to(
        twoCards[1],
        {
          rotate: "30deg",
          x: "100%",
          y: "10%",
          yoyo: true,
          repeat: 1,
        },
        "<",
      )
      .from(
        "p, h3",
        {
          opacity: 0,
          duration: 0.7,
        },
        "<=0.14",
      );
  },
  {
    scope: "#locationSection .location-wrapper:has(#twoCards)",
  },
);

useGSAP(
  (gsap) => {
    const threeCards = gsap.utils.toArray("#threeCards path") as [
      Element,
      Element,
      Element,
    ];

    gsap
      .timeline({
        defaults: {
          duration: 0.7,
          ease: "back.inOut",
          opacity: 0,
        },
        scrollTrigger: {
          trigger: "#threeCards",
          start: "top 75%",
        },
      })
      .from(threeCards[0], {
        rotate: "-125deg",
        x: "-20%",
        y: "200%",
      })
      .from(
        threeCards[1],
        {
          x: "150%",
          rotate: "25deg",
        },
        "<",
      )
      .from(
        threeCards[2],
        {
          duration: 0.8,
          y: "30%",
        },
        "<",
      )
      .from(
        "p, h3",
        {
          duration: 0.8,
        },
        "<=0.3",
      );
  },
  {
    scope: "#locationSection .location-wrapper:has(#threeCards)",
  },
);
</script>

<template>
  <SectionWrapper
    id="locationSection"
    class="py-25 md:py-44"
    :inner-container-props="{
      class: 'md:gap-56 gap-14',
    }"
    aria-labelledby="locationSectionTitle"
  >
    <div class="section-title text-brand-200">
      <p class="text-h4 font-semibold">And you can</p>
      <h2 id="locationSectionTitle" class="text-h1 font-normal italic">
        Find Us
      </h2>
    </div>
    <div
      class="flex flex-col items-center max-md:gap-16 md:flex-row md:justify-around"
    >
      <div class="location-wrapper md:max-w-72">
        <Icon
          id="threeCards"
          name="svg:three-cards"
          class="size-80 sm:size-100"
        />
        <div class="location">
          <h3>Head Office</h3>
          <p>
            Menara 165, lt.4, Jl. Let. Jend. T.B Simatupang Kav.1, TB
            Simatupang, Jakarta Selatan
          </p>
        </div>
      </div>
      <div class="location-wrapper md:max-w-60">
        <Icon
          id="twoCards"
          name="svg:two-cards"
          class="h-96 w-72 sm:h-100 sm:w-75"
        />
        <div class="location">
          <h3>Operational Office</h3>
          <p>
            Jl.H.Khair no 59, RT.003 RW.004, Ragunan, Pasar Minggu Jakarta
            Selatan
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

svg {
  overflow: visible;
}

.section-title > * {
  @apply overflow-clip text-nowrap;
}

.location-wrapper {
  @apply relative text-foreground md:pb-36;
}

.location-wrapper svg {
  @apply md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-3/4;

  z-index: -2;
}

.location-wrapper h3 {
  @apply mb-4 text-h3;
}

.location {
  @apply max-md:absolute max-md:w-full max-md:px-12;
  @apply max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/4;
}

.location-wrapper h3,
.location-wrapper p {
  text-shadow: var(--tw-shadow-color, #262626) 1px 1px 4px;
}
</style>
