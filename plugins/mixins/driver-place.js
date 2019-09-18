import Vue from 'vue'
import { mapGetters } from 'vuex'

const DriverPlace = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          driverPlaceObject: 'driver-place/driverPlace'
        })
      }
    })
  }
}

Vue.use(DriverPlace)
