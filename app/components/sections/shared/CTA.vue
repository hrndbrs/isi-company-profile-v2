<script setup lang="ts">
useGSAP(
  (gsap, self) => {
    splitText((SplitText) => {
      SplitText.create("h2", {
        type: "words",
        onSplit: (titleSplit) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".section-title",
                start: "top bottom",
              },
            })
            .from("h3", {
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
      });
    }, self);
  },
  {
    scope: "#ctaSection",
  },
);
</script>

<template>
  <SectionWrapper
    id="ctaSection"
    aria-label="Contact Us"
    class="bg-primary-500 py-44 text-foreground sm:py-80"
    :inner-container-props="{
      class: 'sm:flex-row sm:gap-25 gap-28',
    }"
  >
    <div class="section-title flex w-full max-w-3xl flex-col gap-px">
      <div class="overflow-clip">
        <h3 class="text-h4 font-semibold">We are here</h3>
      </div>
      <h2 id="ctaSectionTitle" class="text-h1">
        To Help You <em class="font-normal text-success-300">Grow</em>
      </h2>
      <ButtonWhatsapp class="self-start">Contact Us</ButtonWhatsapp>
    </div>
    <div>
      <Lottie animation-link="/assets/lotties/plant.json" />
    </div>
  </SectionWrapper>
</template>
