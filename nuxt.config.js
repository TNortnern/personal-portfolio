// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hi I'm Trayvon Northern, a fast growing full time web developer passionate about Web Development. I have a large array of skillsets from building complex UI/UX, creating advanced API's, and HTML email development.",
      },
      {
        name: 'og:description',
        content:
          "Hi I'm Trayvon Northern, a fast growing full time web developer passionate about Web Development. I have a large array of skillsets from building complex UI/UX, creating advanced API's, and HTML email development.",
      },
      {
        name: 'og:title',
        content: 'Trayvon Northern - Personal Portfolio',
      },
      {
        name: 'og:image',
        content: 'https://i.imgur.com/oWZZCSh.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap',
        rel: 'stylsheet',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vue-swiper', ssr: false },
    { src: '~/plugins/vue-particles', ssr: false },
    '~/plugins/v-click-outside',
    { src: '~/plugins/v-scrollactive', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    '~/components/common',
    '~/components/layout',
    '~/components/misc',
    '~/components/portfolio',
  ],
  /*
   ** Nuxt.js dev-modules
   */ buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/composition-api',
    ['vue-scrollto/nuxt', { duration: 300 }],
    'nuxt-lazy-load',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://personalport-be.herokuapp.com',
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
}
