import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(_to, _from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: "instant" };
  },
} satisfies RouterConfig;
