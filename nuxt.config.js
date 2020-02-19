
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Olakunle Boye | Full Stack Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: "og:site_name", content: "Fullstack Developer | WordPress Expert | Remote Developer"},
      
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {name:"twitter:site", content: "@dev_boye"},
      {name:"twitter:creator", content: "@dev_boye"},
      {name: "twitter:card", content: "summary"},
      {name: "twitter:tittle", content: "Contact | Full Stack Developer"},
      {name: "twitter:description", content: "Hire Professional Full Stack Developer &amp; WordPress Expert - stunning animations, hi-end solutions, interactivity &amp; amazing web experience."},
      {name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/icon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon/apple-icon-180x180.png' },
      { rel: 'icon', sizes: '192x192', href: '/icon/android-icon-192x192.png' },
      { rel: 'icon', sizes: '32x32', href: '/icon/favicon-32x32.png' },
      { rel: 'icon', sizes: '96x96', href: '/icon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/icon/favicon.ico' },
      { rel: 'manifest', href: '/icon/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald&display=swap' },
      {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: './css/animate.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { name: 'cube-grid', color: '#fff' }, //'~/components/Loading.vue', //{ color: '#000' },
  /*
  ** Global CSS
  */
  css: [
  {src: './assets/sass/main.scss', lang: 'scss'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    //'@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  /*axios: {
  },*/
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'active'
  },
  transition: 'slide-fade'
}
