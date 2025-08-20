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
    title: "Change",
    description:
      "Change is the cornerstone of growth and development. We encourage individuals and organizations to embrace change as an opportunity for improvement.",
  },
  {
    icon: "svg:plant-01",
    title: "Empowerment",
    description:
      "Empowerment is about providing the tools, resources, and support needed for individuals and organizations to achieve their goals.",
  },
  {
    icon: "svg:plant-02",
    title: "Transformation",
    description:
      "The Goal is to help clients transform their perspectives, behaviors, and outcomes for long-term success.",
  },
  {
    icon: "svg:plant-03",
    title: "Positivity",
    description:
      "A Supportive environment are crucial for growth and success. At ISI, we cultivate positivity in everything we do, from our interactions with clients to the design of our programs and services.",
  },
];
</script>

<template>
  <SectionWrapper id="coreValueSection" aria-labelledby="coreValueSectionTitle" class="py-28" :inner-container-props="{
    class: '@container',
  }">
    <div class="section-title text-brand-200">
      <p class="text-h3">Our</p>
      <h2 id="coreValueSectionTitle" class="text-h1">
        Core <em class="font-normal">Values</em>
      </h2>
    </div>

    <ul class="grid grid-cols-4 gap-5">
      <li class="core-value" v-for="v of values" :key="v.title">
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
