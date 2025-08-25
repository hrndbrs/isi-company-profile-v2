<script setup lang="ts">
import gsap from "gsap";
import { motion } from "motion-v";

const route = useRoute();
const { y } = useWindowScroll();
const scrolled = computed(() => y.value > 100);
const mobileMenuIsOpen = ref(false);
const mobileLinksContainer = useTemplateRef<HTMLElement>("links-container");
const mobileTriggerBtn = useTemplateRef<HTMLButtonElement>("trigger-btn");

function toggleMobileContainer(value?: boolean) {
  if (typeof value !== "undefined") {
    mobileMenuIsOpen.value = value;
    return;
  }

  mobileMenuIsOpen.value = !mobileMenuIsOpen.value;
}

const closeMobileContainer = () => toggleMobileContainer(false);

watch(() => route.path, closeMobileContainer);
watch(mobileMenuIsOpen, (isOpen) => {
  const menuIconSelector = '#menu [data-id="main"]';
  const duration = 0.3;

  if (isOpen) {
    gsap.to(menuIconSelector, {
      morphSVG: '#menu [data-id="x"]',
      duration,
    });
  } else {
    gsap.to(menuIconSelector, {
      morphSVG: '#menu [data-id="bars"]',
      duration,
    });
  }
});

onClickOutside(mobileLinksContainer, closeMobileContainer, {
  ignore: [mobileTriggerBtn],
});
</script>

<template>
  <header
    class="fixed top-0 z-[1000] w-dvw transition-all duration-200 hover:bg-neutral-50"
    :class="{
      'bg-neutral-50': scrolled,
      'max-lg:bg-neutral-50': mobileMenuIsOpen,
    }"
  >
    <div class="relative px-5 py-3">
      <div class="container flex items-center justify-between gap-8">
        <div class="flex-1">
          <NuxtLink to="/">
            <span
              class="transition-all duration-200 lg:text-5xl"
              :class="mobileMenuIsOpen ? 'text-5xl' : 'text-2xl'"
              >LOGO</span
            >
          </NuxtLink>
        </div>

        <nav
          aria-label="Main Navigation"
          class="hidden flex-[4] justify-between lg:flex"
        >
          <NavigationItem
            v-for="item of navLinks"
            :key="item.label"
            v-bind="item"
          />
        </nav>

        <div class="flex-1">
          <ButtonWithWave class="float-right hidden lg:inline-flex">
            Book Now
          </ButtonWithWave>
          <button
            ref="trigger-btn"
            class="float-right block lg:hidden"
            @click="toggleMobileContainer()"
          >
            <Icon name="svg:menu-btn" id="menu" class="size-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        <motion.nav
          aria-label="Main Navigation"
          ref="links-container"
          v-if="mobileMenuIsOpen"
          class="absolute bottom-0 left-0 flex w-full translate-y-full flex-col gap-6 bg-neutral-50 py-5 max-sm:px-5 sm:max-lg:px-20 lg:hidden"
          key="mobile"
          :initial="{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          }"
          :animate="{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          }"
          :exit="{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          }"
        >
          <NavigationItem
            v-for="item of navLinks"
            :key="item.label"
            v-bind="item"
          />

          <ButtonWithWave class="float-right">Book Now</ButtonWithWave>
        </motion.nav>
      </AnimatePresence>
    </div>
  </header>
</template>
