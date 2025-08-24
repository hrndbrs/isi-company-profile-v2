<script setup lang="ts">
useGSAP(
  (gsap) => {
    gsap.from(".section-title", {
      opacity: 0,
      duration: 0.9,
      x: "-100px",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
      },
    });

    gsap.from(".core-value", {
      opacity: 0,
      duration: 0.75,
      y: "30%",
      stagger: 0.4,
      scrollTrigger: {
        trigger: "ul:has(> .core-value)",
        start: "top 70%",
      },
    });
  },
  {
    scope: "#coreValueSection",
  },
);
const values = [
  {
    icon: "svg:plant-00",
    title: "Resilience",
    description:
      "Equipping students with the skills to bounce back from adversity.",
  },
  {
    icon: "svg:plant-01",
    title: "Growth",
    description:
      "Encouraging a positive attitude towards learning and self-improvement.",
  },
  {
    icon: "svg:plant-02",
    title: "Adaptability",
    description:
      "Teaching students to be flexible and adaptable in the face of change.",
  },
  {
    icon: "svg:plant-03",
    title: "Empowerment",
    description:
      "Empowering students to take charge of their personal and academic journeys.",
  },
];
</script>

<template>
  <SectionWrapper
    id="coreValueSection"
    aria-labelledby="coreValueSectionTitle"
    class="py-28"
    :inner-container-props="{
      class: '@container',
    }"
  >
    <div class="section-title text-brand-200">
      <p class="text-h3">Our</p>
      <h2 id="coreValueSectionTitle" class="text-h1">
        Core <em class="font-normal">Values</em>
      </h2>
    </div>

    <ul class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <li
        class="core-value mx-auto flex max-w-96 flex-col items-center"
        v-for="v of values"
        :key="v.title"
      >
        <Icon :name="v.icon" class="mb-6 size-73" />
        <div>
          <h3 class="mb-1.5 text-h5 text-brand-500">
            {{ v.title }}
          </h3>
          <p class="text-h6">
            {{ v.description }}
          </p>
        </div>
      </li>
    </ul>
  </SectionWrapper>
</template>
