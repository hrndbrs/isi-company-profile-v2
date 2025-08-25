<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import { SplitText } from "gsap/all";
import type { Blog } from "~/types/schema.type";

const { md } = useBreakpoints(breakpointsTailwind);
const lottieSize = computed(() => (md.value ? 242 : 94));

useGSAP(
  (gsap) => {
    const titleSplit = SplitText.create(".section-title h2", {
      type: "lines",
    });

    gsap.from([".section-title p", ...titleSplit.lines], {
      opacity: 0,
      duration: 0.55,
      stagger: 0.11,
      translateX: "30%",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top bottom",
      },
    });

    gsap.from("#seeMoreBlogs", {
      scale: 0,
      duration: 1,
      yoyo: true,
      ease: "elastic.out",

      scrollTrigger: {
        trigger: "#seeMoreBlogs",
        start: "10% bottom",
      },
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
    class="py-28"
    aria-labelledby="blogListSectionTitle"
    :inner-container-props="{
      class: 'gap-16',
    }"
  >
    <header
      class="section-title text-brand-200 relative md:flex justify-between items-center"
    >
      <div class="max-w-xl max-sm:overflow-clip max-sm:pb-0.5">
        <p class="text-h3 font-semibold">And you can</p>
        <h2 id="blogListSectionTitle" class="text-h1">
          Read Our <em class="font-normal">Writings</em>
        </h2>
      </div>

      <Lottie
        class="md:static absolute bottom-0 right-3 max-md:translate-y-5/6 z-10"
        animation-link="/assets/lotties/pencil.json"
        :width="lottieSize"
        :height="lottieSize"
      />
    </header>

    <div class="relative">
      <div class="card-container flex gap-4 overflow-x-auto">
        <article
          v-for="(blog, i) in blogs"
          :key="blog.slug"
          class="blog-card transition-all duration-200"
          :aria-labelledby="`blog-${i}`"
        >
          <NuxtLink :to="`/blogs/${blog.slug}`">
            <Card
              class="transition-color bg-neutral-50 duration-200 hover:bg-primary-500 hover:text-neutral-50"
            >
              <template #illustration>
                <NuxtImg
                  :src="blog.image"
                  class="aspect-square w-full bg-neutral-300 object-cover"
                />
              </template>
              <template #title>
                <span :id="`blog-${i}`">
                  {{ blog.title }}
                </span>
              </template>
              <template #subtitle>{{ blog.publishedAt }}</template>
              <template #content>
                <div v-sanitize-html="blog.content" />
              </template>
            </Card>
          </NuxtLink>
        </article>
      </div>

      <nav
        aria-label="See blog list"
        class="top-1/2 right-0 z-[2] flex justify-center max-1.5xl:mt-11 max-1.5xl:w-full 1.5xl:absolute 1.5xl:translate-x-1/2 1.5xl:-translate-y-1/2"
      >
        <NuxtLink id="seeMoreBlogs" to="/blogs">
          <Button class="aspect-square w-36 rounded-full text-h6">
            Find More
          </Button>
        </NuxtLink>
      </nav>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.card-container:has(.blog-card:hover) > :not(.blog-card:hover) {
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
