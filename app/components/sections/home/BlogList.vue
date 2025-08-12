<script setup lang="ts">
import { SplitText } from "gsap/all";
import type { Blog } from "~/types/schema.type";

useGSAP(
  (gsap) => {
    const titleSplit = SplitText.create(".section-title h2", {
      type: "lines",
    });

    gsap.from([".section-title p", ...titleSplit.lines], {
      opacity: 0,
      duration: 0.55,
      stagger: 0.11,
      x: "30%",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top bottom",
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".card-container",
          start: "10% bottom",
        },
      })
      .from(".card", {
        duration: 0.5,
        y: "150px",
        stagger: 0.2,
        opacity: 0,
      })
      .from("#seeMoreBlogs", {
        opacity: 0,
        duration: 0.24,
      });
  },
  {
    scope: "#blogListSection",
  },
);

const blogs: Blog[] = Array(4).fill({
  title: "Blog withaverylongname",
  slug: "test",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero vel laboriosam amet? Pariatur fugiat error officia temporibus mollitia explicabo doloribus voluptatum blanditiis aliquam! Officia quia eius consequatur beatae porro?",
  publishedAt: "14 May 2025",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg",
});
</script>

<template>
  <SectionWrapper
    id="blogListSection"
    class="py-28 text-brand-100"
    :inner-container-props="{
      class: 'gap-16',
    }"
  >
    <div>
      <div class="section-title max-w-xl">
        <p class="text-4xl leading-tight font-semibold">And you can</p>
        <h2 class="text-title leading-tight font-bold">
          Read Our <em class="font-normal">Writings</em>
        </h2>
      </div>
    </div>

    <div class="card-container relative grid grid-cols-4 gap-4">
      <NuxtLink
        id="seeMoreBlogs"
        to="/blogs"
        class="absolute top-1/2 right-0 z-[2] w-full max-w-36 translate-x-1/2 -translate-y-1/2"
      >
        <Button class="aspect-square w-full rounded-full text-xl leading-tight">
          Find More
        </Button>
      </NuxtLink>

      <NuxtLink
        :to="`/blogs/${blog.slug}`"
        v-for="blog in blogs"
        :key="blog.slug"
        class="blog-card transition-all duration-200"
      >
        <Card>
          <template #illustration>
            <NuxtImg
              :src="blog.image"
              class="aspect-square w-full bg-neutral-300 object-cover"
            />
          </template>
          <template #title>{{ blog.title }}</template>
          <template #subtitle>{{ blog.publishedAt }}</template>
          <template #content>{{ blog.content }}</template>
        </Card>
      </NuxtLink>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.card-container:has(.blog-card:hover) > :not(.blog-card:hover, :has(button)) {
  @apply grayscale-100;
}

:deep(.card-title),
:deep(.card-content) {
  @apply break-words;
}

:deep(.card-title) {
  @apply line-clamp-1;
}

:deep(.card-content) {
  @apply line-clamp-2;
}
</style>
