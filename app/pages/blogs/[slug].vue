<script setup lang="ts">
import dayjs from 'dayjs'
const { params } = useRoute();

const { blog, pending } = await useBlogDetail(params.slug as string);

// Debug the publishedAt value

if (import.meta.server) {
  console.log('publishedAt:', blog.value.data)
  useSeoMeta({
    ogImage: blog.value.data.image.url,
    twitterImage: blog.value.data.image.url,
  });

  useSchemaOrg([
    defineWebPage({
      name: blog.value.data.title,
      author: blog.value.data.author,
      datePublished: blog.value.data.createdAt,
      dateModified: blog.value.data.updatedAt,
      url: `${process.env.NUXT_PUBLIC_SITE_URL}/${blog.value.data.slug}`,
    }),
  ]);
}
</script>

<template>
  <SectionWrapper
    class="mt-23 mb-40 text-neutral-900"
    :inner-container-props="{
      class: 'max-w-[996px]',
    }"
  >
    <LoadingBlogDetail v-if="pending" />
    <template v-else>
      <figure>
        <NuxtImg
          :src="blog.data.image.url"
          class="h-96 w-full object-cover"
          width="996"
          height="384"
          :alt="blog.data.title"
        />
        <figcaption class="sr-only">
          Featured image for the article: {{ blog.data.title }}
        </figcaption>
      </figure>

      <article class="mt-6" itemscope itemtype="https://schema.org/Article">
        <div class="flex flex-col gap-3 text-brand-500">
          <h1 class="text-h3 font-bold">{{ blog.data.title }}</h1>
          <div class="grid w-full grid-cols-2 grid-rows-2 gap-x-7 md:w-fit">
            <span class="inline-block md:min-w-80">Written by</span>
            <span class="inline-block md:min-w-80">Posted</span>
            <address
              class="line-clamp-1 break-words not-italic"
              itemprop="author"
            >
              {{ blog.data.author }}
            </address>
            <span :datetime="blog.data.publishedAt" itemprop="datePublished">
              {{ dayjs(blog.data.publishedAt).format('DD MMMM YYYY') }}
            </span>
          </div>
        </div>

        <div class="prose mt-6" v-sanitize-html="blog.data.content" />
      </article>

      <nav class="mt-6 py-8" aria-label="To blog list">
        <NuxtLink to="/blogs" class="text-left">
          <Icon name="heroicons:chevron-left" />
          <div>
            <p>Go back</p>
            <p class="line-clamp-1 text-h5 break-words">See All Blogs</p>
          </div>
        </NuxtLink>
      </nav>
    </template>
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
