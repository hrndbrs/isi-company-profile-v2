<script setup lang="ts">
useGSAP(
  (gsap, self) => {
    splitText((SplitText) => {
      SplitText.create("#heroTitle1", {
        type: "chars",
        onSplit: (titleSplit) => {
          SplitText.create("#heroTitle2", {
            type: "lines",
            onSplit: (title2Split) => {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: "#heroSection > div",
                    start: "top bottom",
                  },
                })
                .fromTo(
                  "#heroSection > div",
                  {
                    opacity: 0,
                  },
                  {
                    opacity: 1,
                    duration: 0.05,
                  },
                )
                .from(
                  titleSplit.chars,
                  {
                    opacity: 0,
                    x: "58%",
                    stagger: 0.05,
                  },
                  "<",
                )
                .from(
                  title2Split.lines,
                  {
                    opacity: 0,
                    x: "140px",
                    duration: 1.5,
                    ease: "back.out",
                  },
                  "<=0.08",
                );
            },
          });
        },
      });
    }, self);
  },
  {
    scope: "#heroSection",
  },
);
</script>

<template>
  <SectionWrapper
    aria-label="About Us Hero"
    id="heroSection"
    class="py-78 text-brand-200"
  >
    <div class="flex max-w-4xl flex-col gap-3">
      <h2 class="text-h3 font-bold">We are</h2>
      <h1 class="text-h1">
        <span id="heroTitle1">
          Inspirasi <br class="sm:hidden" />
          Satu
        </span>
        <em id="heroTitle2" class="font-normal">Indonesia</em>
      </h1>
      <p class="text-xl">
        Dedicated to providing flexible, customized, and supportive services to
        empower individuals and organizations in Indonesia to embrace change and
        achieve their fullest potential.
      </p>
    </div>
  </SectionWrapper>
</template>
