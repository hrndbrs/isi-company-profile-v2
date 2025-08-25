<script setup lang="ts">
import { SplitText } from "gsap/all";
import type { ServiceActivity } from "~/types/static.type";

useGSAP(
  (gsap) => {
    const subtitleSplit = SplitText.create(".section-title p", {
      type: "chars",
    });

    const titleSplit = SplitText.create(".section-title h2", {
      type: "words",
    });

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
        "-=0.6"
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
  {
    scope: "#trainingApproachSection",
  }
);

const activities: ServiceActivity[] = [
  {
    icon: "svg:five-dots",
    title: "Assessment & Consultation",
    description:
      "Let’s start by understanding your team’s unique challenges and goals through a comprehensive needs assessment.",
  },
  {
    icon: "svg:soft-star",
    title: "Get Personalized Program",
    description:
      "Step 2! We will develop tailored coaching and training programs that align with your team’s unique objectives.",
  },
  {
    icon: "svg:butterfly",
    title: "Let’s Have Fun! Let’s Try!",
    description:
      "Step 3! Our expert coaches and trainers deliver interactive and practical  the programs through a combination of workshops, seminars, and one-on-one sessions.",
  },
  {
    icon: "svg:soft-flower",
    title: "Get Positive Support",
    description:
      "It doesn’t end there! We can provide continuous support and follow-up to reinforce the learning and help your team integrate new skills into their daily work. ",
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
      <p class="mb-3 text-h3">So...</p>
      <h2 id="trainingApproachSectionTitle" class="text-h1">
        How does it <em class="font-normal">work</em>?
      </h2>
    </div>

    <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <li
        class="mx-auto max-w-96 rounded-2xl hover:bg-primary-500 hover:text-foreground bg-foreground p-4 min-h-80"
        v-for="(a, i) in activities"
        :key="`activity-${i}`"
      >
        <Icon :name="a.icon" class="float-right size-8" />
        <div class="py-9.5 h-full flex flex-col justify-center">
          <h3 class="text-h5 font-bold">
            {{ a.title }}
          </h3>
          <p class="mt-1.5 leading-compressed">{{ a.description }}</p>
        </div>
      </li>
    </ul>
  </SectionWrapper>
</template>
