<template>
  <div v-if="!submitted" class="payment">
    {{ total }}
    {{ success }}
    status: {{ status }}
    <h3>Please enter your payment details:</h3>
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
      stripe="pk_test_CCgY3WR7wVqUaPrlKbZf8yHp00ktjc8X74"
      :options="stripeOptions"
      @change="complete = $event.complete"
    />
    <button class="pay-with-stripe" :disabled="!complete" @click="pay">
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
  props: {
    total: {
      type: [Number, String],
      default: '50.00'
    },
    success: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      submitted: false,
      complete: false,
      status: '',
      response: '',
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },
  methods: {
    async pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      await createToken().then((data) => {
        this.$axios
          .$post('/jobs/checkout', {
            stripeToken: data.token.id,
            id: this.checkoutObject.id,
            amount: this.total
          })
          .then((response) => {
            this.status = 'success'
            this.$emit('successSubmit')
            this.restCheckoutState()
            this.submitted = true
            this.response = response
          })
          .catch((error) => {
            this.status = 'failure'
            this.response = 'Error!: ' + error
            console.log(this.response)
          })
      })
    },
    clearCheckout() {
      this.submitted = false
      this.status = ''
      this.complete = false
      this.response = ''
    },
    restCheckoutState() {
      const checkoutState = {
        driver: {
          name: ''
        }
      }
      this.$store.dispatch('checkout/setCheckout', checkoutState)
    }
  }
}
</script>