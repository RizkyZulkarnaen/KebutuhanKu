// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // config tailwindcss
  postcss: {
    plugins: {
      tailwindcss: {
        exposeConfig: true,
      },
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/ui']
})