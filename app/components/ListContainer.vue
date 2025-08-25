<script setup lang="ts" generic="T">
const listContainerRef = useTemplateRef("listContainer");
const route = useRoute();

function animateItems() {
  const items = listContainerRef.value?.children;

  if (!items) return;

  Array.from(items as HTMLCollectionOf<HTMLElement>).forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.translate = "0 0";
    }, index * 100);
  });
}

onMounted(animateItems);

watch(() => route.query.page, animateItems);

defineProps<{
  items: T[];
  pageCount: number;
}>();
</script>

<template>
  <div
    ref="listContainer"
    class="flex flex-wrap justify-center gap-y-4 sm:gap-y-6 mt-11 gap-x-4"
  >
    <slot v-for="item in items" :key="item" :item />
  </div>

  <Pagination :page-count class="justify-center mt-14" />
</template>

<style scoped>
@reference "~/assets/css/main.css";

:deep(.inactive) {
  @apply hidden;
}

:deep(.pagination-item) {
  @apply bg-foreground rounded-full text-brand-200;

  &.active {
    @apply bg-brand-200 text-foreground;
  }
}
</style>
