<template>
  <div class="container">
    <div v-if="checkoutObject.driver.name != ''">
      {{ success }}
      <div>
        <b-row>
          <b-col md>
            <div>Name: {{ customerName }}</div>
            <div>Email: {{ customerEmail }}</div>
            <div>Phone: {{ customerPhone }}</div>
            <app-checkout
              :total="total"
              :success="success"
              @successSubmit="success = true"
            ></app-checkout>
          </b-col>
          <b-col md>
            <div>Your Driver Name: {{ checkoutObject.driver.name }}</div>
            <div
              v-for="job_meta in checkoutObject.job_metas"
              :key="job_meta.index"
            >
              <div v-if="job_meta.key === 'movingDate'">
                Moving Date: {{ job_meta.value }}
              </div>
              <div v-if="job_meta.key === 'total'">
                Total Price: {{ job_meta.value | currency }}
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
      <h1>Checkout</h1>
      <h3>Your have no moving.</h3>
      <nuxt-link exact to="/my-move"><button>Fill 'er up!</button></nuxt-link>
    </div>

    <!--If there's a success, let's let people know it's being processed, we'll add a success component later on-->
    <div v-else>
      <h1>Checkout</h1>
      <h2>Success!</h2>
      <p>Your order has been processed, it will be delivered shortly.</p>
    </div>

    <h1>Checkout</h1>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ success }}</pre>
      <pre class="m-0">{{ checkoutObject }}</pre>
    </b-card>
  </div>
</template>

<script>
import AppCheckout from '~/components/AppCheckout.vue'

export default {
  components: {
    AppCheckout
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
