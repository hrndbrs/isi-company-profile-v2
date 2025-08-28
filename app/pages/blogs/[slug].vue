<script setup lang="ts">
const { params } = useRoute();

const { blog, pending } = await useBlogDetail(params.slug as string);

useSeoMeta({
  ogImage: blog.value.data.image.url,
})

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
            <time :datetime="blog.data.createdAt" itemprop="datePublished">
              {{ new Date(blog.data.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) }}
            </time>
          </div>
        </div>

        <div class="prose mt-6" v-sanitize-html="blog.data.content" />
      </article>

      <nav class="mt-6 grid grid-cols-2 py-8" aria-label="Blog post navigation">
        <div>
          <NuxtLink to="#" class="text-left" rel="prev">
            <Icon name="heroicons:chevron-left" />
            <div>
              <p>Previous</p>
              <p class="line-clamp-1 text-h5 break-words">Previous Title</p>
            </div>
          </NuxtLink>
        </div>

        <div>
          <NuxtLink to="#" rel="next" class="float-right text-right">
            <div>
              <p>Next</p>
              <p class="line-clamp-1 text-h5 break-words">Next Title</p>
            </div>

            <Icon name="heroicons:chevron-right" />
          </NuxtLink>
        </div>
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
