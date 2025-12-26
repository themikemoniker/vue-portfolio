// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: '../docs'
    }
  },
  compatibilityDate: '2024-11-01',
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  app: {
    cdnURL: './',
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" }
      ]
    }
  },
  devtools: { enabled: true }
})
