// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js",
          defer: true,
        },
      ],
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@vueuse/nuxt"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/api/**": {
      cors: true,
    },
  },

  compatibilityDate: "2024-07-11",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
