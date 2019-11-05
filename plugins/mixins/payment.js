import Vue from 'vue'
import { mapGetters } from 'vuex'

const Payment = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          paymentObject: 'payment/payment'
        })
      }
    })
  }
}

Vue.use(Payment)
