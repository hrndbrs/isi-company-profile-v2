<script setup lang="ts">
type BuildingBlock = {
  title: string;
  description: string;
};
useGSAP(
  (gsap) => {
    gsap.from("li", {
      opacity: 0,
      x: "-100px",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "ul",
        start: "top 80%",
      },
    });
  },
  {
    scope: "#buildingBlockSection",
  },
);

const buildingBlocks: BuildingBlock[] = [
  {
    title: "Self-Awareness and Emotional Intelligence",
    description:
      "Helps students understand their strengths and weaknesses, manage stress, and build healthy relationships.",
  },
  {
    title: "Problem-Solving and Critical Thinking",
    description:
      "Enhances students’ ability to think critically, make informed decisions, and solve problems effectively.",
  },
  {
    title: "Communication and Collaboration",
    description:
      "Prepares students to work well with others, express themselves clearly, and build strong interpersonal relationships.",
  },
  {
    title: "Goal Setting and Time Management",
    description: "Continuous follow-up and support to ensure long-term impact.",
  },
  {
    title: "Adaptability and Flexibility",
    description: "Adaptability and Flexibility",
  },
];
</script>

<template>
  <SectionWrapper
    aria-label="Resilience Academy's Building Blocks"
    id="buildingBlockSection"
    class="text-brand-200 md:py-40 pt-32 pb-21"
    :inner-container-props="{
      class: 'relative gap-16 md:gap-14',
    }"
  >
    <h2 class="text-h2 font-bold">
      Building Blocks of <em class="font-normal">Resilience</em>
    </h2>

    <ul class="flex flex-col gap-12">
      <li v-for="b in buildingBlocks" :key="b.title">
        <h3 class="text-h3 text-secondary-300 mb-3">{{ b.title }}</h3>
        <p>{{ b.description }}</p>
      </li>
    </ul>
    <span
      class="md:absolute right-0 inline-block bottom-0 md:text-[203px] text-[141px] md:translate-y-3/4 self-end"
    >
      ⚙️
    </span>
  </SectionWrapper>
</template>
