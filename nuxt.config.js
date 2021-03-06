export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nkechi\'s 23rd 🖤',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Celebrating 23 Years with Nkechi Okochi' },
      {
        property: 'og:image',
        hid: 'og:image',
        content:
          'https://res.cloudinary.com/areoladaniel-com/image/upload/v1633014004/Nkechi%20Birthday/webclip_njwsbv.jpg'
      },
      { hid: 'og:title', property: 'og:title', content: 'Nkechi\'s 23rd 🖤' },
      { hid: 'og:description', property: 'og:description', content: 'Celebrating 23 Years with Nkechi Okochi' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Nkechi\'s 23rd 🖤' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Celebrating 23 Years with Nkechi Okochi' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/webflow.css',
    '@/assets/css/normalize.css',
    '@/assets/css/nkechis-23rd.webflow.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/both',
    '@/plugins/client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap']
  }
}
