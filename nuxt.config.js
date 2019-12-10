export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Hello Vans |  | Compare low cost Man with a van quotes - book Man and van for Removals',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Hello Vans |  | Compare low cost Man with a van quotes - book Man and van for Removals'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Moving, Movers, Moving van, Moving man, Man with van'
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
    '@/assets/css/main.css',
    // https://fullcalendar.io/docs/vue
    '@fullcalendar/core/main.css',
    '@fullcalendar/daygrid/main.css',
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
    // The plugin used to store and getting driver jobs
    '~plugins/mixins/driver-jobs.js',
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
    //https://github.com/fullcalendar/fullcalendar-vue/issues/5
    { ssr: false, src: '~/plugins/full-calendar'  },
    // Get all places (id, lat, lng) used for area we cover
    '~plugins/mixins/area.js',
    // Star Rating Component for Vue 2.x
    // https://github.com/craigh411/vue-star-rating
    '~plugins/star-vote.js',
    // Home HTML
    '~plugins/mixins/home-html.js',
    // Lazy load
    //https://github.com/Akryum/vue-observe-visibility
    //https://vueschool.io/articles/vuejs-tutorials/async-vuejs-components/
    '~plugins/lazyload.js',
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
    }],
    // https://github.com/HapLifeMan/nuxt-trustbox-module
    ['nuxt-trustbox-module', {
      businessunitId: '5cdf3f58188c010001d2d032',
      businessunitName: 'helloservices.co.uk',
    }],
    //
    '@nuxtjs/sitemap',
    
  ],
  /**
   * .env
   */
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    stripe_key: process.env.NODE_ENV !== 'production' ? 'pk_test_CCgY3WR7wVqUaPrlKbZf8yHp00ktjc8X74' : 'pk_live_lclxGfi4gE7tP2oLiGpasP8900PLpojQPu',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:8000/api/' : 'https://hellovansapi.com/api/',
    //credentials: false
    //proxy: true,
    //https: true
  },
  proxy: {
    '/api/': {
      target: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:8000/' : 'https://hellovansapi.com/'
    }
  }, 
  auth: {
    //plugins: ['~/plugins/auth.js'],
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'meta.token' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'user', method: 'get', propertyName: 'data' }
        },
      }
    },
    /* redirect: {
      login: '/login',
      home: '/driver/my-base',
      logout: '/login'
    } */
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    //analyze: true,
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
  server: {
    port: 3001, // default: 3000
    host: 'localhost' // default: localhost
  },
  sitemap: {
    hostname: 'https://hellovans.com',
  }
}
