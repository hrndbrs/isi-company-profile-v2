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
  <footer class="relative bg-brand-300 px-5 py-64 text-2xl">
    <div class="container">
      <div class="flex items-center justify-between text-brand-100">
        <span id="brandName" class="max-w-2xl text-title font-bold">
          Inspirasi Satu
          <span class="font-normal italic"> Indonesia </span>
        </span>
        <ul class="grid gap-8 text-right">
          <FooterQuickLink v-for="link of navLinks" :key="link.label" v-bind="link" />
        </ul>
      </div>
      <p class="absolute bottom-8 left-1/2 -translate-x-1/2 leading-tight text-foreground">
        Inspirasi Satu Indonesia | 2025
      </p>
    </div>
  </footer>
</template>
