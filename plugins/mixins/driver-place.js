import Vue from 'vue'
import { mapGetters } from 'vuex'

const DriverPlace = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          driverPlaceLocationObject: 'driver-place/driverPlaceLocation',
          driverPlacePriceObject: 'driver-place/driverPlacePrice'
        })
      }
    })
  }
}

Vue.use(DriverPlace)