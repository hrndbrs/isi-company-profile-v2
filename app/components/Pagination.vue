<script setup lang="ts">
const route = useRoute();

const {
  pageCount,
  class: classList,
  display = 5,
} = defineProps<{
  pageCount: number;
  display?: number;
  class?: string;
}>();

function getPath(page: number) {
  const query = { ...route.query, page: String(page) };
  return { path: route.path, query };
}

const opts = computed(() => {
  const currentPage = Number(route.query.page) || 1;
  const mid = Math.floor(display / 2);
  const hasMorePageCount = pageCount > display;

  const linkDisplay = hasMorePageCount ? display : pageCount;
  const showStart = hasMorePageCount && currentPage > mid + 1;
  const showEnd = hasMorePageCount && currentPage < pageCount - mid;
  const start = hasMorePageCount
    ? showStart
      ? showEnd
        ? currentPage - mid
        : pageCount - display + 1
      : 1
    : 1;

  const pages = Array.from({ length: linkDisplay }, (_, i) => ({
    index: start + i,
    active: start + i === currentPage,
  }));

  return {
    hasPrev: currentPage > 1,
    hasNext: currentPage < pageCount,
    currentPage,
    pages,
    ellipsis: {
      showStart,
      showEnd,
    },
  };
});
</script>

<template>
  <nav
    role="navigation"
    aria-label="pagination"
    :class="cn('flex gap-1 items-center pagination', classList)"
  >
    <NuxtLink
      class="pagination-item inline-flex size-9 items-center justify-center"
      :to="getPath(opts.currentPage - 1)"
      :aria-disabled="!opts.hasPrev"
      :class="{
        'inactive pointer-events-none': !opts.hasPrev,
      }"
    >
      <span class="sr-only"> Previous page </span>
      <slot name="prevBtn">
        <Icon name="heroicons:chevron-left" class="size-5" />
      </slot>
    </NuxtLink>

    <slot name="ellipsis" v-if="opts.ellipsis.showStart">
      <span
        class="pagination-item ellipsis inline-flex size-9 items-center justify-center"
      >
        <Icon name="heroicons:ellipsis-horizontal" class="size-5" />
      </span>
    </slot>

    <NuxtLink
      v-for="p in opts.pages"
      :to="getPath(p.index)"
      :key="p.index"
      :aria-current="p.active ? 'page' : null"
    >
      <slot name="link" :active="p.active" :index="p.index">
        <span
          class="pagination-item inline-flex size-9 items-center justify-center"
          :class="{
            active: p.active,
          }"
        >
          {{ p.index }}
        </span>
      </slot>
    </NuxtLink>

    <slot name="ellipsis" v-if="opts.ellipsis.showEnd">
      <span
        class="pagination-item ellipsis inline-flex size-9 items-center justify-center"
      >
        <Icon name="heroicons:ellipsis-horizontal" class="size-5" />
      </span>
    </slot>

    <NuxtLink
      class="pagination-item inline-flex size-9 items-center justify-center"
      :to="getPath(opts.currentPage + 1)"
      :aria-disabled="!opts.hasNext"
      :class="{
        'inactive pointer-events-none': !opts.hasNext,
      }"
    >
      <span class="sr-only">Next page</span>
      <slot name="nextBtn">
        <Icon name="heroicons:chevron-right" class="size-5" />
      </slot>
    </NuxtLink>
  </nav>
</template>
