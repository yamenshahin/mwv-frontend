<template>
  <div class="page-checkout section_mod-2">
    <h1 class="ui-title-page">Checkout</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <div class="container">
      <div v-if="checkoutObject.driver.name != ''">
        <div>
          <b-row>
            <b-col md>
              <app-checkout
                :total="total"
                :success="success"
                @successSubmit="success = true"
              ></app-checkout>
            </b-col>
            <b-col md>
              <h2 class="ui-title-block">Your Move:</h2>
              <div class="border-color border-color_default"></div>
              <div class="customer-info">
                <h4>Your info:</h4>
                <div>Name: {{ customerName }}</div>
                <div>Email: {{ customerEmail }}</div>
                <div>Phone: {{ customerPhone }}</div>
              </div>
              <div class="driver-info">
                <h4>Driver info:</h4>
                <div>Name: {{ checkoutObject.driver.name }}</div>
              </div>
              <div class="job-meta">
                <h4>Others info:</h4>
                <div
                  v-for="job_meta in checkoutObject.job_metas"
                  :key="job_meta.index"
                >
                  <div v-if="job_meta.key === 'movingDate'">
                    Moving Date: {{ job_meta.value | isoDateToString }}
                  </div>
                  <div v-if="job_meta.key === 'total'">
                    <br />
                    <h3>Total Price: {{ job_meta.value | currency }}</h3>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>

      <!--If the cart is empty, give them the ability to get back to the main page to add items-->
      <div
        v-else-if="checkoutObject.driver.name === '' && success === false"
        class="empty"
      >
        <nuxt-link
          exact
          to="/my-move"
          class="btn mb-1 btn-secondary btn-block lg"
        >
          Your have no moving
        </nuxt-link>
      </div>

      <!--If there's a success, let's let people know it's being processed, we'll add a success component later on-->
      <div v-else>
        <b-alert show variant="success">
          <h2>Success!</h2>
          <p>Your order has been processed, it will be delivered shortly.</p>
        </b-alert>
      </div>
    </div>
  </div>
</template>

<script>
import AppCheckout from '~/components/AppCheckout.vue'
import EmptySpace from '~/components/EmptySpace.vue'

export default {
  components: {
    AppCheckout,
    EmptySpace
  },
  data() {
    return {
      success: false
    }
  },
  computed: {
    total() {
      for (const index in this.checkoutObject.job_metas) {
        if (this.checkoutObject.job_metas[index].key === 'total') {
          return this.checkoutObject.job_metas[index].value
        }
      }
      return 0
    },
    customerName() {
      for (const index in this.checkoutObject.job_metas) {
        if (this.checkoutObject.job_metas[index].key === 'customerInfoName') {
          return this.checkoutObject.job_metas[index].value
        }
      }
      return null
    },
    customerEmail() {
      for (const index in this.checkoutObject.job_metas) {
        if (this.checkoutObject.job_metas[index].key === 'customerInfoEmail') {
          return this.checkoutObject.job_metas[index].value
        }
      }
      return null
    },
    customerPhone() {
      for (const index in this.checkoutObject.job_metas) {
        if (this.checkoutObject.job_metas[index].key === 'customerInfoPhone') {
          return this.checkoutObject.job_metas[index].value
        }
      }
      return null
    }
  },
  mounted() {},
  methods: {}
}
</script>
