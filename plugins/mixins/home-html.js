import Vue from 'vue'
import { mapGetters } from 'vuex'

const HomeHtml = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          homeHtmlObject: 'home-html/homeHtml'
        })
      }
    })
  }
}

Vue.use(HomeHtml)
