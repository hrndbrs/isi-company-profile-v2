<script setup lang="ts">
type Image = {
  url: string;
  width?: number;
  height?: number;
};

type MyObject = {
  id: string;
  slug: string;
  title: string;
  content: string;
  image: Image;
  publishedAt: string;
  author?: string;
  createdAt: string;
};

const arr: MyObject[] = Array(8).fill({
  id: "1",
  slug: "example-post",
  title: "Sample Title",
  content: "This is a sample content for testing purposes.",
  image: {
    url: "https://i.pinimg.com/736x/f6/f5/0d/f6f50d5f97407b67d8bddc20056b9917.jpg",
    width: 800,
    height: 600,
  },
  publishedAt: "2025-08-23T10:00:00Z",
  author: "John Doe",
  createdAt: "2025-08-20",
});
</script>

<template>
  <SectionWrapper
    id="blogListSection"
    class="gap-3 break-words pt-32 pb-12"
    aria-label="Blog list"
  >
    <header class="text-brand-200">
      <h3 class="text-h3 mb-3">Our Writings</h3>
      <h1 class="italic text-h1 font-normal">Blogs</h1>
    </header>

    <ListContainer :items="arr" v-slot="{ item: blog }" :page-count="10">
      <article
        :key="blog.id"
        class="inline-block sm:max-w-68 opacity-0 translate-y-8 transition-all duration-200"
        :aria-labelledby="blog.title"
      >
        <NuxtLink :to="`/blogs/${blog.slug}`">
          <Card
            class="transition-color bg-neutral-50 duration-200 hover:bg-primary-500 hover:text-neutral-50"
          >
            <template #illustration>
              <NuxtImg
                :src="blog.image.url"
                class="h-64 w-full bg-neutral-300 object-cover"
              />
            </template>
            <template #title>
              {{ blog.title }}
            </template>
            <template #subtitle>{{ blog.createdAt }}</template>
            <template #content>
              <div v-sanitize-html="blog.content" />
            </template>
          </Card>
        </NuxtLink>
      </article>
    </ListContainer>
  </SectionWrapper>
</template>
