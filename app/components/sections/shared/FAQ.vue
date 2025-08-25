<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import type { FAQ } from "~/types/schema.type";

const { md } = useBreakpoints(breakpointsTailwind);
const lottieSize = computed(() => (md.value ? 181 : 81));

const { faqList } = await useFAQS();

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

    const faqs = Array.from(document.querySelectorAll(".faq-container > *"));

    faqs.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: "150px",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        },
      });
    });
  },
  { scope: "#faqSection" }
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
    aria-labelledby="faqSectionTitle faqSectionSubtitle"
    class="py-28"
    :inner-container-props="{
      class: 'gap-3 md:gap-6',
    }"
  >
    <div class="flex flex-col justify-between sm:flex-row">
      <div class="section-title text-brand-200">
        <p id="faqSectionSubtitle" class="mb-px text-h3 font-bold">
          Frequently Asked Questions
        </p>
        <h2 id="faqSectionTitle" class="text-h1 font-normal italic">FAQ</h2>
      </div>

      <Lottie
        class="h-full self-end"
        animation-link="/assets/lotties/lightbulb.json"
        :width="lottieSize"
        :height="lottieSize"
      />
    </div>

    <dl class="faq-container flex flex-col gap-8 text-h6">
      <div v-for="(faq, i) in faqList.data" :key="faq.question">
        <dt class="flex font-bold text-secondary-300">
          <span class="inline-block">{{ i + 1 }}.</span>
          <p class="ml-2">{{ faq.question }}</p>
        </dt>
        <dd class="prose mt-2" v-sanitize-html="faq.answer" />
      </div>
    </dl>
  </SectionWrapper>
</template>
