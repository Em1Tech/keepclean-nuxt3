export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [`assets/css/style.css`],
  
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],

  imports: {
    dirs: ["./store"],
  },

  pinia: {
    storesDirs: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
  }

})
