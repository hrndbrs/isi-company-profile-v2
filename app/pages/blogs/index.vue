<script setup lang="ts">
import dayjs from 'dayjs'
const route = useRoute();
const page = computed(() => {
  const p = route.query.page;
  return p ? +p : 1;
});

const { blogs, pending } = await useBlogList(page);

watchEffect(async () => {
  if (pending.value || !blogs.value) return;

  if (blogs.value.data.length < 1) {
    await navigateTo("/in-the-works");
  }
});
</script>

<template>
  <SectionWrapper
    id="blogListSection"
    class="gap-3 pt-32 pb-12 break-words"
    aria-label="Blog list"
  >
    <header class="text-brand-200">
      <h3 class="mb-3 text-h3">Our Writings</h3>
      <h1 class="text-h1 font-normal italic">Blogs</h1>
    </header>

    <LoadingListContainer
      v-if="pending"
      loading-text="Warming up your reading list…"
    />
    <ListContainer
      v-else
      :items="blogs.data"
      v-slot="{ item: blog }"
      :page-count="blogs.meta.pagination.pageCount"
    >
      <article
        :key="blog.id"
        class="inline-block transition-all duration-200 sm:max-w-68"
        :aria-labelledby="blog.title"
      >
        <NuxtLink :to="`/blogs/${blog.slug}`">
          <Card
            class="transition-color bg-neutral-50 duration-200 hover:bg-primary-500 hover:text-neutral-50"
          >
            <template #illustration>
              <NuxtImg
                :src="blog.image.url"
                sizes="100vw sm:272px"
                width="600"
                format="webp"
                height="256"
                class="h-64 w-full bg-neutral-300 object-cover"
                :alt="blog.title"
              />
            </template>
            <template #title>
              <span class="line-clamp-1 break-words">
                {{ blog.title }}
              </span>
            </template>
            <template #subtitle>{{
              dayjs(blog.publishedAt).format('DD MMMM YYYY')
            }}</template>
            <template #content>
              <ClientOnly>
                <div
                  v-sanitize-html="stripStyleAttr(blog.content)"
                  class="line-clamp-2 break-words"
                />
              </ClientOnly>
            </template>
          </Card>
        </NuxtLink>
      </article>
    </ListContainer>
  </SectionWrapper>
</template>
