import Vue from 'vue'
import { mapGetters } from 'vuex'

const DriverJobs = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          driverJobsObject: 'driver-jobs/driverJobs'
        })
      }
    })
  }
}

Vue.use(DriverJobs)
