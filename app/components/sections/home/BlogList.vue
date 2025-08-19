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

    const cards = Array.from(
      document.querySelectorAll("#blogListSection .card-container .card"),
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-container",
        start: "10% bottom",
      },
    });

    cards.forEach((card, i) => {
      const post = i === 0 ? undefined : "<=0.34";
      tl = tl.from(
        card,
        {
          duration: 0.6,
          x: `${i * 100}%`,
          opacity: 0,
        },
        post,
      );
    });
    tl.from("#seeMoreBlogs", {
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
  <SectionWrapper id="blogListSection" class="py-28 text-brand-200" aria-labelledby="blogListSectionTitle"
    :inner-container-props="{
      class: 'gap-16',
    }">
    <div>
      <div class="section-title max-w-xl">
        <p class="text-h3 font-semibold">And you can</p>
        <h2 id="blogListSectionTitle" class="text-h1">
          Read Our <em class="font-normal">Writings</em>
        </h2>
      </div>
    </div>

    <div class="card-container relative grid grid-cols-4 gap-4">
      <NuxtLink id="seeMoreBlogs" to="/blogs"
        class="absolute top-1/2 right-0 z-[2] w-full max-w-36 translate-x-1/2 -translate-y-1/2">
        <Button class="aspect-square w-full rounded-full text-h6">
          Find More
        </Button>
      </NuxtLink>

      <article v-for="(blog, i) in blogs" :key="blog.slug" class="blog-card transition-all duration-200"
        :aria-labelledby="`blog-${i}`">
        <NuxtLink :to="`/blogs/${blog.slug}`">
          <Card>
            <template #illustration>
              <NuxtImg :src="blog.image" class="aspect-square w-full bg-neutral-300 object-cover" />
            </template>
            <template #title>
              <span :id="`blog-${i}`">
                {{ blog.title }}
              </span>
            </template>
            <template #subtitle>{{ blog.publishedAt }}</template>
            <template #content>{{ blog.content }}</template>
          </Card>
        </NuxtLink>
      </article>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.card-container:has(.blog-card:hover)> :not(.blog-card:hover, :has(button)) {
  @apply grayscale-100;
}

:deep(.card) {
  @apply bg-neutral-50;
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
