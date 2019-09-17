import Vue from 'vue'
import { mapGetters } from 'vuex'

const CustomerJobs = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          customerJobsObject: 'customer-jobs/customerJobs'
        })
      }
    })
  }
}

Vue.use(CustomerJobs)
