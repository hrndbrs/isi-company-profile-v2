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
    const twoCards = Array.from(
      document.querySelectorAll("#twoCards rect"),
    ) as [HTMLElement, HTMLElement];

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
          trigger: "svg",
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
    const threeCards = Array.from(
      document.querySelectorAll("#threeCards rect"),
    ) as [Element, Element, Element];

    gsap
      .timeline({
        defaults: {
          duration: 0.7,
          ease: "back.inOut",
          opacity: 0,
        },
        scrollTrigger: {
          trigger: "svg",
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
    class="py-44"
    :inner-container-props="{
      class: 'gap-56',
    }"
  >
    <div class="section-title text-brand-100">
      <p class="text-3xl leading-tight font-semibold">And you can</p>
      <h2 class="text-title leading-tight italic">Find Us</h2>
    </div>
    <div class="flex justify-around">
      <div class="location-wrapper max-w-72">
        <Icon
          id="threeCards"
          name="svg:three-cards"
          class="top-1/2 left-1/2 size-100 -translate-x-1/2 -translate-y-3/4"
        />
        <h3>Head Office</h3>
        <p>
          Menara 165, lt.4, Jl. Let. Jend. T.B Simatupang Kav.1, TB Simatupang,
          Jakarta Selatan
        </p>
      </div>
      <div class="location-wrapper max-w-60">
        <Icon
          id="twoCards"
          name="svg:two-cards"
          class="top-1/2 left-1/2 h-100 w-75 -translate-x-1/2 -translate-y-3/4"
        />
        <h3>Operational Office</h3>
        <p>
          Jl.H.Khair no 59, RT.003 RW.004, Ragunan, Pasar Minggu Jakarta Selatan
        </p>
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
  @apply relative pb-36 text-foreground;
}

.location-wrapper svg {
  @apply absolute;
  z-index: -2;
}

.location-wrapper h3 {
  @apply mb-4 text-4xl leading-tight;
}

.location-wrapper h3,
.location-wrapper p {
  text-shadow: var(--tw-shadow-color, #262626) 1px 1px 4px;
}
</style>
