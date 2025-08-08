<script setup lang="ts">
import { motion } from "motion-v";
import type { NavLink } from "~/types/static.type";

const { label, ...props } = defineProps<NavLink>();
const showGroup = ref(false);

const expandable = props.type === "group";

const groupContainer = useTemplateRef<HTMLElement>("group-container");

function toggleGroupedLinks() {
  if (!expandable) return;
  showGroup.value = !showGroup.value;
}

if (expandable) {
  onClickOutside(groupContainer, () => {
    showGroup.value = false;
  });
}
</script>

<template>
  <div class="relative text-neutral-300 transition-colors duration-200 hover:text-secondary-200" :class="{
    'cursor-pointer': expandable,
  }" ref="group-container" @click="toggleGroupedLinks()">
    <template v-if="props.type === 'group'">
      {{ label }}
      <AnimatePresence>
        <motion.div
          class="flex flex-col gap-4 border-neutral-200 px-2 py-3 lg:absolute lg:-bottom-2.5 lg:min-w-[143px] lg:translate-y-full lg:rounded lg:border lg:bg-neutral-50"
          :key="label" :initial="{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          }" :animate="{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          }" :exit="{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          }" v-if="showGroup">
          <NavigationItem v-for="item of props.items" :key="item.label" v-bind="item" />
        </motion.div>
      </AnimatePresence>
    </template>

    <template v-else>
      <NuxtLink :to="props.path" class="cursor-pointer">
        {{ label }}
      </NuxtLink>
    </template>
  </div>
</template>
