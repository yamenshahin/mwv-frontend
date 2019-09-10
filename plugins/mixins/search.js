import Vue from 'vue'
import { mapGetters } from 'vuex'

const Search = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          searchMetaObject: 'search/searchMeta'
        })
      }
    })
  }
}

Vue.use(Search)
