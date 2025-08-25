<script setup lang="ts">
const route = useRoute();
const page = computed(() => {
  const p = route.query.page;
  return p ? +p : 1;
});

const { blogs } = useBlogList(page);
</script>

<template>
  <SectionWrapper id="blogListSection" class="gap-3 break-words pt-32 pb-12" aria-label="Blog list">
    <header class="text-brand-200">
      <h3 class="text-h3 mb-3">Our Writings</h3>
      <h1 class="italic text-h1 font-normal">Blogs</h1>
    </header>

    <ListContainer :items="blogs.data" v-slot="{ item: blog }" :page-count="blogs.meta.pagination.pageCount">
      <article :key="blog.id" class="inline-block sm:max-w-68 transition-all duration-200"
        :aria-labelledby="blog.title">
        <NuxtLink :to="`/blogs/${blog.slug}`">
          <Card class="transition-color bg-neutral-50 duration-200 hover:bg-primary-500 hover:text-neutral-50">
            <template #illustration>
              <NuxtImg :src="blog.image.url" class="h-64 w-full bg-neutral-300 object-cover" />
            </template>
            <template #title>
              <span class="line-clamp-1 break-words">
                {{ blog.title }}
              </span>
            </template>
            <template #subtitle>{{ getLocalTime(blog.publishedAt) }}</template>
            <template #content>
              <div v-sanitize-html="stripStyleAttr(blog.content)" class="line-clamp-2 break-words" />
            </template>
          </Card>
        </NuxtLink>
      </article>
    </ListContainer>
  </SectionWrapper>
</template>
