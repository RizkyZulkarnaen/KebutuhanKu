// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: [
    '~/assets/css/main.css'
  ],
  
  postcss: {
    plugins: {
      tailwindcss: {
        exposeConfig: true,
      },
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/ui', '@nuxtjs/color-mode', 'radix-vue/nuxt', '@nuxt/image'],

  colorMode: {
    preference: 'light',
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  }
});