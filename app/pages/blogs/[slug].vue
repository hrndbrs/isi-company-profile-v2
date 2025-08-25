<script setup lang="ts">
import type { Blog } from "~/types/schema.type";

const { params } = useRoute();

const { blog } = await useBlogDetail(params.slug as string);
</script>

<template>
  <SectionWrapper
    class="mt-23 mb-40 text-neutral-900"
    :inner-container-props="{
      class: 'max-w-[996px]',
    }"
  >
    <figure>
      <NuxtImg
        :src="blog.data.image.url"
        class="max-h-96 min-h-96 w-full object-cover"
        :alt="blog.data.title"
      />
      <figcaption class="sr-only">
        Featured image for the article: {{ blog.data.title }}
      </figcaption>
    </figure>

    <article class="mt-6" itemscope itemtype="https://schema.org/Article">
      <div class="flex flex-col gap-3 text-brand-500">
        <h1 class="text-h3 font-bold">{{ blog.data.title }}</h1>
        <div class="grid w-fit grid-cols-2 grid-rows-2 gap-x-56">
          <span>Written by</span>
          <span>Posted</span>
          <address class="not-italic" itemprop="author">Budi</address>
          <time :datetime="blog.data.publishedAt" itemprop="datePublished">
            {{ blog.data.publishedAt }}
          </time>
        </div>
      </div>

      <div class="prose mt-6" v-sanitize-html="blog.data.content" />
    </article>

    <nav
      class="mt-6 flex justify-between py-8"
      aria-label="Blog post navigation"
    >
      <NuxtLink to="#" class="text-left" rel="prev">
        <Icon name="heroicons:chevron-left" />
        <div>
          <p>Previous</p>
          <p class="text-h5">Previous Title</p>
        </div>
      </NuxtLink>

      <NuxtLink to="#" rel="next" class="text-right">
        <div>
          <p>Next</p>
          <p class="text-h5">Next Title</p>
        </div>

        <Icon name="heroicons:chevron-right" />
      </NuxtLink>
    </nav>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

a {
  @apply inline-flex items-center gap-2;

  svg {
    @apply size-9 text-brand-500;
  }
}
</style>
