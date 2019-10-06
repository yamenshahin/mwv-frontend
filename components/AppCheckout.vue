<template>
  <div v-if="!submitted" class="payment">
    <h3>Please enter your payment details:</h3>
    <label for="email">Email</label>
    <input
      id="email"
      v-model="stripeEmail"
      type="email"
      placeholder="name@example.com"
    />
    <label for="card">Credit Card</label>
    <p>
      Test using this credit card:
      <span class="cc-number">4242 4242 4242 4242</span>
      , and enter any 5 digits for the zip code
    </p>
    <card
      id="card"
      class="stripe-card"
      :class="{ complete }"
      stripe="pk_test_5ThYi0UvX3xwoNdgxxxTxxrG"
      :options="stripeOptions"
      @change="complete = $event.complete"
    />
    <button
      class="pay-with-stripe"
      :disabled="!complete || !stripeEmail"
      @click="pay"
    >
      Pay with credit card
    </button>
    <div v-if="status === 'failure'">
      <h3>Oh No!</h3>
      <p>Something went wrong!</p>
      <button @click="clearCheckout">Please try again</button>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  components: { Card },
  data() {
    return {
      submitted: false,
      complete: false,
      status: '',
      response: '',
      stripeEmail: '',
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },

  methods: {
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then((data) => {
        console.log(data.token)
        this.submitted = true
        this.$axios
          .$post()
          .then((response) => {
            this.status = 'success'
            this.$emit('successSubmit')
            this.$store.commit('clearCartCount')
            // console logs for you :)
            this.response = JSON.stringify(response, null, 2)
            console.log(this.response)
          })
          .catch((error) => {
            this.status = 'failure'
            // console logs for you :)
            this.response = 'Error: ' + JSON.stringify(error, null, 2)
            console.log(this.response)
          })
      })
    },
    clearCheckout() {
      this.submitted = false
      this.status = ''
      this.complete = false
      this.response = ''
    }
  }
}
</script>
