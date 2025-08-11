<script setup lang="ts">
import { SplitText } from "gsap/all";
import type { Testimony } from "~/types/schema.type";

useGSAP(
  (gsap) => {
    const textSplit = SplitText.create(".text-container", {
      type: "lines",
    });

    gsap.from(textSplit.lines, {
      opacity: 0,
      y: "-50%",
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".text-container",
        start: "top bottom",
      },
    });
  },
  {
    scope: "#testimonialSection",
  },
);

const testimonies: Testimony[] = Array(5)
  .fill(null)
  .map((_, index) => ({
    name: `${index + 1} Yayan Uzumaki Kennedy`,
    position: "CEO",
    before:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut asperiores eius incidunt adipisci magni non amet dolor sit, fugiat sint dolore optio nostrum eaque consequatur. Veritatis aperiam architecto officiis corporis.",
    after:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut asperiores eius incidunt adipisci magni non amet dolor sit, fugiat sint dolore optio nostrum eaque consequatur. Veritatis aperiam architecto officiis corporis.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg",
  }));
</script>

<template>
  <SectionWrapper
    id="testimonialSection"
    class="overflow-clip py-44 text-brand-100"
    :inner-container-props="{
      class: 'gap-16',
    }"
  >
    <div class="text-container">
      <p class="mb-2.5 text-2xl leading-tight">Don’t take it from us</p>
      <h2 class="text-title leading-tight font-bold">
        Listen to <br />What They <em class="font-normal"> Say </em>
      </h2>
    </div>

    <Carousel
      id="testimonialCarousel"
      :items="testimonies"
      v-slot="{ item, index, activeIndex }"
    >
      <div
        class="flex flex-1 gap-8 transition-all duration-700"
        :class="{
          'opacity-20': index !== activeIndex,
        }"
      >
        <div class="flex w-52 shrink-0 flex-col gap-4">
          <NuxtImg
            :src="item.image"
            class="size-16 rounded-full object-cover"
          />
          <div>
            <strong class="line-clamp-1 break-words">
              {{ item.name }}
            </strong>
            <p>
              {{ item.position }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-8">
          <div class="flex-1">
            <strong>I was</strong>
            <p class="line line-clamp-4 break-words">
              {{ item.before }}
            </p>
          </div>
          <div class="flex-1">
            <strong>Now</strong>
            <p class="line line-clamp-4 break-words">
              {{ item.after }}
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

#testimonialCarousel strong {
  @apply text-2xl;
}

#testimonialCarousel p {
  @apply mt-1 text-neutral-900;
}
</style>
