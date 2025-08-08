import tailwindcss from "@tailwindcss/vite";

const prod = process.env.NODE_ENV === "production";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: !prod },
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "motion-v/nuxt",
  ],
  icon: {
    mode: "svg",
    collections: ["heroicons"],
    customCollections: [
      {
        prefix: "svg",
        dir: "./app/assets/svg",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  components: [
    {
      path: "~/components",
    },
    {
      path: "~/components/sections",
    },
  ],
  css: ["~/assets/css/main.css"],
});
