<script setup lang="ts">
import type { ServiceActivity } from "~/types/static.type";

useGSAP(
  (gsap, self) => {
    splitText((SplitText) => {
      SplitText.create("#trainingApproachSection .section-title p", {
        type: "chars",
        onSplit: (subtitleSplit) => {
          SplitText.create("#trainingApproachSection .section-title h2", {
            type: "words",
            onSplit: (titleSplit) => {
              gsap.set(subtitleSplit.chars, {
                transformOrigin: "left",
              });

              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: ".section-title",
                    start: "top bottom",
                  },
                })
                .from(subtitleSplit.chars, {
                  opacity: 0,
                  scale: 0,
                  duration: 0.3,
                  stagger: 0.15,
                })
                .from(
                  titleSplit.words,
                  {
                    opacity: 0,
                    stagger: 0.2,
                  },
                  "-=0.6",
                );

              gsap.from("li", {
                y: "50%",
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: {
                  trigger: "ul",
                  start: "top bottom",
                },
              });
            },
          });
        },
      });
    }, self);
  },
  {
    scope: "#trainingApproachSection",
  },
);

const activities: ServiceActivity[] = [
  {
    icon: "svg:five-dots",
    title: "Skill Assessment",
    description: "Identify your current skill level and areas for improvement.",
  },
  {
    icon: "svg:summertime-sadness",
    title: "Workshops",
    description: "Participate in tailored workshops with real-world scenarios.",
  },
  {
    icon: "svg:butterfly",
    title: "Exercise",
    description: "Apply learned skills through interactive activities.",
  },
  {
    icon: "svg:keyhole",
    title: "Join the Community",
    description:
      "Join a supportive community for continuous growth and networking.",
  },
];
</script>

<template>
  <SectionWrapper
    id="trainingApproachSection"
    aria-label="How Training Works"
    class="py-52 text-brand-200"
    :inner-container-props="{
      class: 'gap-14',
    }"
  >
    <div class="section-title">
      <h3 class="mb-3 text-h3">So...</h3>
      <h2 id="trainingApproachSectionTitle" class="text-h1">
        How does it <em class="font-normal">work</em>?
      </h2>
    </div>

    <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <li
        class="mx-auto min-h-80 max-w-96 rounded-2xl bg-foreground p-4 hover:bg-primary-500 hover:text-foreground"
        v-for="(a, i) in activities"
        :key="`activity-${i}`"
      >
        <div class="mb-16 overflow-auto">
          <Icon :name="a.icon" class="float-right size-8" />
        </div>
        <h3 class="text-h5 font-bold">
          {{ a.title }}
        </h3>
        <p class="mt-1.5 leading-compressed">{{ a.description }}</p>
      </li>
    </ul>
  </SectionWrapper>
</template>
