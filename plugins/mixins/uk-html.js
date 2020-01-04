import Vue from 'vue'
import { mapGetters } from 'vuex'

const UkHtml = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          ukHtmlObject: 'uk-html/ukHtml'
        })
      }
    })
  }
}

Vue.use(UkHtml)
