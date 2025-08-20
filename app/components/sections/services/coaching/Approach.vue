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
  {
    scope: "#coachingApproachSection",
  },
);

const activities: ServiceActivity[] = [
  {
    icon: "svg:keyhole",
    title: "Private Coach",
    description:
      "Discuss your life goals and challenges through our one-on-one sessions.",
  },
  {
    icon: "svg:soft-star",
    title: "Personalized Plan",
    description: "Receive a customized coaching plan with actionable steps.",
  },
  {
    icon: "svg:soft-flower",
    title: "Ongoing Support",
    description:
      "We are your friends! We will help you track progress and make adjustments.",
  },
  {
    icon: "svg:hourglass",
    title: "Resource Access",
    description:
      "Lifetime access to career development materials and resources.",
  },
];
</script>

<template>
  <SectionWrapper
    id="coachingApproachSection"
    aria-label="How Coaching Works"
    class="py-52 text-brand-200"
    :inner-container-props="{
      class: 'gap-14',
    }"
  >
    <div class="section-title">
      <p class="mb-3 text-h3">So...</p>
      <h2 id="coachingApproachSectionTitle" class="text-h1">
        How does it <em class="font-normal">work</em>?
      </h2>
    </div>

    <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <li
        class="min-h-80 rounded-2xl bg-foreground p-4 max-w-96 mx-auto"
        v-for="(a, i) in activities"
        :key="`activity-${i}`"
      >
        <div class="mb-16 overflow-auto">
          <Icon :name="a.icon" class="float-right size-8" />
        </div>
        <h3 class="text-h5 font-bold text-brand-300">
          {{ a.title }}
        </h3>
        <p class="mt-1.5 leading-tight">{{ a.description }}</p>
      </li>
    </ul>
  </SectionWrapper>
</template>
