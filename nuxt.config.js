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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    '~node_modules/vue-datetime/dist/vue-datetime.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // The plugin is auth related which change user status to logged
    '~plugins/mixins/user.js',
    // DateTimePicker
    '~plugins/datetime.js'
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
    '@nuxtjs/auth'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://127.0.0.1:8000/api/'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'meta.token' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'user', method: 'get', propertyName: 'data' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
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
