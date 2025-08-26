<script setup lang="ts">
import { SplitText } from "gsap/all";

let brandNameSplit: SplitText;

const { ctx } = useGSAP(
  (gsap) => {
    ctx.value?.revert();
    brandNameSplit?.revert();

    brandNameSplit = SplitText.create("#brandName", {
      type: "lines",
    });

    ctx.value = gsap.context(() => {
      gsap.from(brandNameSplit.lines, {
        opacity: 0,
        y: "50%",
        stagger: 0.1,
        scrollTrigger: {
          trigger: brandNameSplit.lines,
          start: "top bottom",
        },
      });
    });
  },
  { scope: "footer" },
);
</script>

<template>
  <footer class="relative bg-brand-500 px-5 py-64">
    <div class="container text-h5">
      <div
        class="flex flex-col justify-between gap-29 text-brand-200 sm:max-lg:px-20 lg:flex-row lg:items-center"
      >
        <span id="brandName" class="max-w-2xl text-h1">
          Inspirasi Satu
          <span class="font-normal italic"> Indonesia </span>
        </span>
        <nav aria-label="Quick Links">
          <ul class="grid gap-8 text-right">
            <FooterQuickLink
              v-for="link of NAV_LINKS"
              :key="link.label"
              v-bind="link"
            />
          </ul>
        </nav>
      </div>
      <p
        class="absolute bottom-8 left-1/2 -translate-x-1/2 text-nowrap text-foreground"
      >
        Inspirasi Satu Indonesia | 2025
      </p>
    </div>
  </footer>
</template>
