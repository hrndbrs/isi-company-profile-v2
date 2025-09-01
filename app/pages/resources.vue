<script setup lang="ts">
const route = useRoute();
const page = computed(() => {
  const p = route.query.page;
  return p ? +p : 1;
});

const { resources, pending } = await useResourceList(page);

watchEffect(async () => {
  if (pending.value || !resources.value) return;

  if (resources.value.data.length < 1) {
    await navigateTo("/in-the-works");
  }
});
</script>

<template>
  <SectionWrapper
    class="gap-3 py-32 break-words"
    style="visibility: visible"
    aria-label="Free resource list"
  >
    <header class="text-brand-200">
      <h3 class="mb-2 text-h3">Free</h3>
      <h1 class="text-h1 font-normal italic">Resources</h1>
    </header>

    <LoadingListContainer
      v-if="pending"
      loading-text="Preparing materials for you…"
    />
    <ListContainer
      v-else
      :items="resources.data"
      :page-count="resources.meta.pagination.pageCount"
      v-slot="{ item: resource }"
    >
      <article
        :key="resource.title"
        class="inline-block translate-y-8 transition-all duration-200 sm:max-w-68"
        :aria-labelledby="resource.title"
      >
        <a :href="resource.file.url" target="_blank">
          <Card
            class="transition-color bg-neutral-50 duration-200 hover:bg-primary-500 hover:text-neutral-50"
          >
            <template #illustration>
              <NuxtImg
                :src="resource.image.url"
                sizes="100vw sm:272px"
                width="600"
                format="webp"
                height="256"
                class="h-64 w-full bg-neutral-300 object-cover"
                :alt="resource.title"
              />
            </template>
            <template #title>
              {{ resource.title }}
            </template>
            <template #subtitle>
              <NuxtTime
                :datetime="resource.createdAt"
                locale="en-ID"
                year="numeric"
                month="long"
                day="numeric"
                itemprop="datePublished"
              />
            </template>
            <template #content>
              <ClientOnly>
                <div v-sanitize-html="resource.description" />
              </ClientOnly>
            </template>
          </Card>
        </a>
      </article>
    </ListContainer>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

:deep(.card-title) {
  @apply line-clamp-1 break-words;
}
</style>
