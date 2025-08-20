<script setup lang="ts">
import type { NavLink } from "~/types/static.type";

const { label, ...props } = defineProps<NavLink>();
</script>

<template>
  <li>
    <template v-if="props.type === 'group'">
      <ul class="mt-3 grid gap-4">
        {{
          label
        }}
        <FooterQuickLink
          v-for="item of props.items"
          :key="item.label"
          v-bind="item"
        />
      </ul>
    </template>

    <NuxtLink
      v-else
      :to="props.path"
      class="transition-colors duration-200 hover:text-foreground"
    >
      {{ label }}
    </NuxtLink>
  </li>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.router-link-exact-active {
  @apply text-foreground;
}
</style>
