// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Hines Automotive and Customs - Professional Automotive Services',
      meta: [
        { name: 'description', content: 'Professional automotive services including repairs, detailing, stereo installs, and custom accessory work. Expert one-on-one service by Greg Hines.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Hines Automotive and Customs - Professional Automotive Services' },
        { property: 'og:description', content: 'Professional automotive services including repairs, detailing, stereo installs, and custom accessory work. Expert one-on-one service by Greg Hines.' },
        { property: 'og:type', content: 'website' }
      ]
    }
  }
})
