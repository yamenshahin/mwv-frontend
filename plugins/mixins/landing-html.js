import Vue from 'vue'
import { mapGetters } from 'vuex'

const LandingHtml = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          landingHtmlObject: 'landing-html/landingHtml'
        })
      }
    })
  }
}

Vue.use(LandingHtml)
