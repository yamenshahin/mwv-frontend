import Vue from 'vue'
import { mapGetters } from 'vuex'

const Area = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          areasObject: 'area/areas'
        })
      }
    })
  }
}

Vue.use(Area)
