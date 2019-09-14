import Vue from 'vue'
import { mapGetters } from 'vuex'

const CustomerJobs = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          collectionPlaceObject: 'customer-jobs/customerJobs'
        })
      }
    })
  }
}

Vue.use(CustomerJobs)
