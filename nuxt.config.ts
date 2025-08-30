import tailwindcss from "@tailwindcss/vite";
import { installNuxtSiteConfig, updateSiteConfig } from "nuxt-site-config/kit";

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
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-og-image",
    "nuxt-gtag",
  ],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: "Inspirasi Satu Indonesia – Empowering Change, Inspiring Growth",
    description:
      "Inspirasi Satu Indonesia is a leading coaching, training, and counseling company based in Jakarta, Indonesia. Established on October 1, 2020, ISI is committed to driving positive change and empowering individuals and organizations. Our mission is to help people discover their purpose, enhance their skills, and transform their lives through comprehensive, customized, and supportive services.",
    keywords:
      "Coaching and training company in Jakarta, Career development coaching Indonesia, Soft skills training Jakarta, Life counseling services Indonesia, Corporate training solutions Jakarta, Resilient Academy Indonesia, Empowering Gen-Z and millennials,Positive change and growth, Professional development coaching ,Leadership and team-building exercises",
    defaultLocale: "en",
    indexable: true,
    favicon: "/assets/images/favicon.ico"
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
    meta: {
      description:
        "Inspirasi Satu Indonesia is a leading coaching, training, and counseling company based in Jakarta, Indonesia. Established on October 1, 2020, ISI is committed to driving positive change and empowering individuals and organizations. Our mission is to help people discover their purpose, enhance their skills, and transform their lives through comprehensive, customized, and supportive services.",
      ogSiteName: process.env.NUXT_PUBLIC_SITE_NAME,
      ogTitle: process.env.NUXT_PUBLIC_SITE_NAME,
      ogLocale: "en_US",
      ogType: "website",
      ogUrl: process.env.NUXT_PUBLIC_SITE_URL,
      ogImage: `${process.env.NUXT_PUBLIC_SITE_URL}/assets/images/isi-logo.svg`,
      robots: "index, follow",
    },
  },
  sitemap: {
    autoLastmod: true,
    cacheMaxAgeSeconds: 3600,
    sitemaps: {
      pages: {
        includeAppSources: true,
        exclude: ["/blogs/**"],
        chunkSize: 1000,
        defaults: {
          priority: 0.8,
          changefreq: "monthly",
        },
      },
      blogs: {
        sources: ["/api/__sitemap__/blogs"],
        defaults: {
          priority: 0.7,
          changefreq: "weekly",
        },
      },
    },
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: process.env.NUXT_PUBLIC_SITE_NAME || "Inspirasi Satu Indonesia",
      url: process.env.NUXT_PUBLIC_SITE_URL,
      logo: `${process.env.NUXT_PUBLIC_SITE_URL}/assets/images/isi-logo.svg`,
    },
  },
  ogImage: {
    defaults: {
      component: "Custom",
    },
    strictNuxtContentPaths: true,
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    enabled: true,
    initCommands: [
      ['consent', 'default', {
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        ad_storage: 'granted',
        analytics_storage: 'granted',
        wait_for_update: 500,
      }]
    ]
  },
  runtimeConfig: {
    public: {
      apiToken: process.env.STRAPI_TOKEN,
      apiUrl: process.env.STRAPI_URL,
      whatsapp: process.env.ISI_WHATSAPP_NUMBER,
      discordGroup: process.env.ISI_DISCORD_GROUP,
      dashboardUrl: process.env.ISI_DASHBOARD_URL,
      linkedIn: process.env.ISI_LINKEDIN_ID,
      instagram: process.env.ISI_INSTAGRAM_USERNAME,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  nitro: {
    compressPublicAssets: true,
    minify: prod,
    publicAssets: [
      {
        dir: "~/public/assets/lotties",
        maxAge: 60 * 60 * 24 * 365,
      },
    ],
  },
  image: {
    domains: [prod ? String(process.env.STRAPI_CDN) : "*"],
    format: ["webp", "avif"],
    quality: 80,
  },
  routeRules: {
    "/blogs/**": { isr: prod ? 60 * 60 * 24 * 7 : false },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
        { rel: "icon", type: "image/x-icon", href: `${process.env.NUXT_PUBLIC_SITE_URL}/assets/images/favicon.ico` },
      ],
    },
  },
  fonts: {
    families: [
      {
        name: "Plus Jakarta Sans",
        provider: "google",
        preload: true,
        weights: [400, 500, 600, 700],
        styles: ["normal"],
        subsets: ["italic"],
        display: "swap",
      },
    ],
  },
  icon: {
    mode: "svg",
    collections: ["heroicons"],
    customCollections: [
      {
        prefix: "svg",
        dir: "./app/assets/svg",
      },
      {
        prefix: "social",
        dir: "./app/assets/svg/socials",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            gsap: ["gsap"],
            motion: ["motion-v"],
            lottie: ["vue3-lottie"],
          },
        },
      },
    },
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
