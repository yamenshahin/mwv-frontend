<template>
  <div class="container">
    <div v-if="checkoutObject.driver.name != ''">
      <div>
        <b-row>
          <b-col md>
            <app-checkout></app-checkout>
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
      <app-success @restartCart="success = false" />
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
  mounted() {
    window.setTimeout(() => this.$emit('restartCart'), 3000)
  },
  methods: {}
}
</script>
