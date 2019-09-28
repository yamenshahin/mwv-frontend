import Vue from 'vue'
import { mapGetters } from 'vuex'

const Checkout = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          checkoutObject: 'checkout/checkout'
        })
      }
    })
  }
}

Vue.use(Checkout)
