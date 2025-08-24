<script setup lang="ts">
onMounted(() => {
  const cards = document.querySelectorAll("article");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.translate = "0 0";
    }, index * 100);
  });
});

type MyObject = {
  title: string;
  createdAt: string;
  description: string;
  image: string;
  file: {
    url: string;
  };
};

const arr: MyObject[] = Array(8).fill({
  title: "Title f sdfsdf sdf sdf sdf sdf sd",
  file: { url: "https://google.com" },
  createdAt: "21-05-2004",
  image:
    "https://i.pinimg.com/736x/f6/f5/0d/f6f50d5f97407b67d8bddc20056b9917.jpg",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
});
</script>

<template>
  <SectionWrapper
    class="text-brand-200 gap-3 break-words my-23"
    style="visibility: visible"
    aria-label="Free resource list"
  >
    <h3 class="text-h3 mb-2">Free</h3>
    <h1 class="italic text-h1 font-normal">Resources</h1>

    <div class="flex flex-wrap justify-center gap-y-4 sm:gap-y-6 mt-11 gap-x-4">
      <article
        v-for="resource in arr"
        :key="resource.title"
        class="inline-block sm:max-w-68 opacity-0 translate-y-8 transition-all duration-200"
        :aria-labelledby="resource.title"
      >
        <a :href="resource.file.url" target="_blank">
          <Card
            class="transition-color bg-neutral-50 duration-200 hover:bg-primary-500 hover:text-neutral-50"
          >
            <template #illustration>
              <NuxtImg
                :src="resource.image"
                class="h-64 w-full bg-neutral-300 object-cover"
              />
            </template>
            <template #title>
              {{ resource.title }}
            </template>
            <template #subtitle>{{ resource.createdAt }}</template>
            <template #content>
              <div v-dompurify-html="resource.description" />
            </template>
          </Card>
        </a>
      </article>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

:deep(.card-title) {
  @apply line-clamp-1 break-words;
}
</style>
