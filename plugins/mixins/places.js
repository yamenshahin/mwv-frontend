import Vue from 'vue'
import { mapGetters } from 'vuex'

const Places = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          collectionPlaceObject: 'places/collectionPlace',
          deliveryPlaceObject: 'places/deliveryPlace',
          wayPointPlacesObject: 'places/wayPointPlaces'
        })
      }
    })
  }
}

Vue.use(Places)
