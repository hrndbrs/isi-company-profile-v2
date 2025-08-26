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
    "@radya/nuxt-dompurify",
    "nuxt-gtag",
  ],
  runtimeConfig: {
    public: {
      apiToken: process.env.STRAPI_TOKEN,
      apiUrl: process.env.STRAPI_URL,
      whatsapp: process.env.ISI_WHATSAPP_NUMBER,
      discordGroup: process.env.ISI_DISCORD_GROUP,
      dashboardUrl: process.env.ISI_DASHBOARD_URL,
    },
  },
  gtag: {
    enabled: prod,
    id: process.env.GTAG_ID,
  },
  image: {
    domains: [prod ? "" : "*"],
    format: ["webp"],
  },
  routeRules: {
    "/blogs/**": { isr: prod ? 60 * 60 * 24 * 7 : false },
  },
  app: {
    head: {
      noscript: [
        {
          textContent: `
        <style>main { visibility : visible !important }</style>
        `,
        },
      ],
    },
  },
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
