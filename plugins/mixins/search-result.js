import Vue from 'vue'
import { mapGetters } from 'vuex'

const SearchResult = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          searchResultObject: 'search-result/searchResult'
        })
      }
    })
  }
}

Vue.use(SearchResult)
