export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // You need a specific loader for CSS files
    // https://github.com/mariomka/vue-datetime
    '~node_modules/vue-datetime/dist/vue-datetime.css',
    // Main CSS file in the project
    '@/assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // The plugin is auth related which change user status to logged
    '~plugins/mixins/user.js',
    // The plugin is google map place object related which get collectionPlace and deliveryPlace objects
    '~plugins/mixins/places.js',
    // The plugin used for getting search for driver meta before searching
    '~plugins/mixins/search.js',
    // DateTimePicker
    { ssr: false, src: '~plugins/datetime.js'  },
    // The plugin used to store and getting final search result
    '~plugins/mixins/search-result.js',
    // The plugin used to store and getting customer jobs
    '~plugins/mixins/customer-jobs.js',
    // The plugin is google map place object related which get Driver Place object
    '~plugins/mixins/driver-place.js',
    // Google Map API https://github.com/xkjyeah/vue-google-maps
    // https://developers.google.com/maps/solutions/store-locator/clothing-store-locator
    { ssr: false, src: '~plugins/google-maps.js'  },
    // Persist and rehydrate your Vuex state between page reloads.
    // https://github.com/robinvdvleuten/vuex-persistedstate
    { ssr: false, src: '~plugins/localStorage.js'  },
    // The plugin is contains google map common tasks
    '~plugins/mixins/google-map-common-tasks.js',
    // The plugin is contains math common tasks
    '~plugins/mixins/math-common-tasks.js',
    // The plugin is for formating or filters
    '~plugins/mixins/filters.js',
    // The plugin is for store current checkout job
    '~plugins/mixins/checkout.js',
    // The plugin Vue MQ (MediaQuery)
    // https://github.com/AlexandreBonaventure/vue-mq
    '~plugins/media-query.js',
    // https://github.com/cretueusebiu/vform
    '~plugins/vform.js',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // Load .env
    '@nuxtjs/dotenv',
    // Font awesome
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        },
      ]
    }]
  ],
  /**
   * .env
   */
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://127.0.0.1:8000/api/',
    //credentials: false
    //proxy: true,
    //https: true
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:8000'
    }
  }, 
  auth: {
    /* redirect: {
      login: '/my-move',
      logout: '/my-move',
      callback: '/my-move',
      home: '/'
    }, */
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'meta.token' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'user', method: 'get', propertyName: 'data' }
        },
        watchLoggedIn: true,
        rewriteRedirects: true
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
}
