<script setup lang="ts">
import type { FAQ } from "~/types/schema.type";

useGSAP(
  (gsap) => {
    gsap.from(".section-title", {
      opacity: 0,
      y: "-100%",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top bottom",
      },
    });
    gsap.from(".faq-container li", {
      opacity: 0,
      y: "150px",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".faq-container",
        start: "top bottom",
      },
    });
  },
  { scope: "#faqSection" },
);

const faqs: FAQ[] = Array(5).fill({
  question: "Question",
  answer:
    "<p>FAQ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque autem earum maiores molestiae minima aliquid deserunt hic dolor quasi, quo similique rerum eaque natus, magni unde exercitationem debitis iure voluptatibus.</p>",
});
</script>

<template>
  <SectionWrapper
    id="faqSection"
    class="py-28"
    :inner-container-props="{
      class: 'gap-6',
    }"
  >
    <div class="flex justify-between">
      <div class="section-title text-brand-100">
        <p class="mb-px text-4xl leading-tight font-bold">
          Frequently Asked Questions
        </p>
        <h2 class="text-title leading-tight italic">FAQ</h2>
      </div>

      <span class="inline-block aspect-square h-full text-[7rem]"> 💡 </span>
    </div>

    <ul class="faq-container flex flex-col gap-8 text-xl">
      <li v-for="(faq, i) in faqs" :key="faq.question">
        <div class="flex font-bold text-secondary-200">
          <span class="inline-block">{{ i + 1 }}.</span>
          <p class="ml-2">{{ faq.question }}</p>
        </div>
        <div class="html" v-dompurify-html="faq.answer" />
      </li>
    </ul>
  </SectionWrapper>
</template>
