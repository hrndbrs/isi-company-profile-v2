<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";

const { lg } = useBreakpoints(breakpointsTailwind);
const { toDashboard } = useExternalNavigation();
const lottieSize = computed(() => (lg.value ? 252 : 144));

useGSAP(
  (gsap, self) => {
    splitText((SplitText) => {
      SplitText.create("#heroTitle", {
        type: "words",
        onSplit: (titleSplit) => {
          SplitText.create("#heroDescription", {
            type: "lines",
            onSplit: (descSplit) => {
              let tl = gsap
                .timeline({
                  scrollTrigger: {
                    trigger: ".text-container",
                    start: "top bottom",
                  },
                })
                .to(".text-container", {
                  duration: 0.08,
                  opacity: 1,
                });

              descSplit.lines.forEach((el, i) => {
                const leftFadeIn = i % 2 === 0;

                tl = tl.from(
                  el,
                  {
                    opacity: 0,
                    x: leftFadeIn ? "-100px" : "100px",
                  },
                  "<=0.1",
                );
              });

              tl.from(
                titleSplit.words,
                {
                  opacity: 0,
                  y: "50%",
                  stagger: 0.09,
                },
                "<=0.09",
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
    id="heroSection"
    class="min-h-dvh py-24 text-brand-200"
    :inner-container-props="{
      class: 'lg:gap-28 gap-12 justify-center h-full',
    }"
    aria-label="Hero"
  >
    <div>
      <div
        class="float-right inline-flex size-36 items-center justify-center text-[144px] lg:size-72 lg:text-[252px]"
      >
        <Lottie
          animationLink="/assets/lotties/grinning.json"
          :height="lottieSize"
          :width="lottieSize"
          class="rotate-12"
        />
      </div>
    </div>
    <div class="text-container flex flex-col gap-4">
      <h1 class="text-h1" id="heroTitle">
        Your Perfect <br class="hidden sm:inline-block" />
        Career <span class="font-normal italic">Coach</span>
      </h1>
      <p class="text-xl" id="heroDescription" role="text">
        Inspirasi Satu Indonesia are dedicated to providing flexible,
        customized, and supportive services to empower individuals and
        organizations in Indonesia to embrace change and achieve their fullest
        potential.
      </p>
      <ButtonWithWave @click="toDashboard()" class="self-start">
        Join Now
      </ButtonWithWave>
    </div>
  </SectionWrapper>
</template>
