<script setup lang="ts">
import { SplitText } from "gsap/all";

const { testimonies } = await useTestimonial();

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
</script>

<template>
  <SectionWrapper
    id="testimonialSection"
    class="overflow-clip py-44 text-brand-200"
    :inner-container-props="{
      class: 'gap-16',
    }"
    aria-label="Testimonials"
  >
    <div class="text-container">
      <p class="mb-2.5 text-h5">Don’t take it from us</p>
      <h2 class="text-h1">
        Listen to <br />What They <em class="font-normal"> Say </em>
      </h2>
    </div>

    <Carousel
      id="testimonialCarousel"
      :items="testimonies.data"
      v-slot="{ item, index, activeIndex }"
    >
      <div
        class="flex flex-1 flex-col gap-8 transition-all duration-700 sm:flex-row"
        :class="{
          'opacity-20': index !== activeIndex,
        }"
      >
        <div class="flex w-52 shrink-0 flex-col gap-4">
          <NuxtImg
            :src="item.image.url"
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
        <div class="flex flex-col gap-3 sm:gap-8">
          <div class="flex-1">
            <strong>I was</strong>
            <div
              class="line-clamp-4 break-words content"
              v-sanitize-html="item.before"
            />
          </div>
          <div class="flex-1">
            <strong>Now</strong>
            <div
              class="line-clamp-4 break-words content"
              v-sanitize-html="item.after"
            />
          </div>
        </div>
      </div>
    </Carousel>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

#testimonialCarousel strong {
  @apply text-h5;
}

#testimonialCarousel p,
.content {
  @apply mt-1 leading-compact text-neutral-900;
}
</style>
