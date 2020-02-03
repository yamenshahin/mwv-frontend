<template>
  <div v-if="!submitted" class="payment">
    <h2 class="ui-title-block">Please Enter Your Payment Details:</h2>
    <div class="border-color border-color_default"></div>
    <p>All fields are required</p>
    <label for="card">Credit Card</label>
    <!-- <p>
      Test using this credit card:
      <span class="cc-number">4242 4242 4242 4242</span>
      , and enter any 5 digits for the zip code
    </p> -->
    <div v-if="status === 'failure'">
      <b-alert show variant="danger">
        <h3>Oh No!</h3>
        <p>Something went wrong!</p>
        <b-button @click="clearCheckout">Please try again</b-button>
      </b-alert>
    </div>
    <card
      id="card"
      :class="{ complete }"
      :stripe="stripe_key"
      :options="stripeOptions"
      @change="complete = $event.complete"
      class="stripe-card"
    />
    <!-- regNotDone ? onSubmit : pay -->
    <b-form
      v-if="!authenticated"
      @submit.prevent="regNotDone ? onSubmitCredit() : payCredit()"
    >
      <h2 class="ui-title-block mt-2">Create Your Account:</h2>
      <div class="border-color border-color_default"></div>
      <div class="form-group">
        <label>Name:</label>
        <input
          v-model="form.name"
          :class="{ 'is-invalid': form.errors.has('name') }"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter your full name"
        />
        <has-error :form="form" field="name"></has-error>
      </div>

      <div class="form-group">
        <label>Email:</label>
        <input
          v-model="form.email"
          :class="{ 'is-invalid': form.errors.has('email') }"
          type="email"
          name="email"
          class="form-control"
          placeholder="Enter your email"
        />
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
        <has-error :form="form" field="email"></has-error>
      </div>

      <div class="form-group">
        <label>Phone:</label>
        <input
          v-model="form.phone"
          :class="{ 'is-invalid': form.errors.has('phone') }"
          type="text"
          name="phone"
          class="form-control"
          placeholder="Enter your phone number"
        />
        <has-error :form="form" field="phone"></has-error>
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input
          v-model="form.password"
          :class="{ 'is-invalid': form.errors.has('password') }"
          type="password"
          name="password"
          class="form-control"
          placeholder="Enter password"
        />
        <has-error :form="form" field="password"></has-error>
      </div>

      <div class="form-group">
        <label>Password Confirmation:</label>
        <input
          v-model="form.password_confirmation"
          :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
          type="password"
          name="password_confirmation"
          class="form-control"
          placeholder="Confirm password"
        />
        <has-error :form="form" field="password_confirmation"></has-error>
      </div>
      <b-form-group label="Do you accept Terms and Conditions?">
        <b-form-checkbox
          v-model="statusTAC"
          name="DTAC"
          value="accepted"
          unchecked-value="not_accepted"
          required
        >
          I accept the
          <nuxt-link to="/terms-and-conditions" exact>
            Terms and Conditions
          </nuxt-link>
        </b-form-checkbox>
      </b-form-group>
      <b-button
        :disabled="!complete || statusTAC === 'not_accepted' || processing"
        type="submit"
        variant="dark"
        block
        class="lg mb-1 pay-with-stripe"
      >
        Pay with credit card
      </b-button>
    </b-form>
    <div v-else>
      <b-form-group label="Do you accept Terms and Conditions?">
        <b-form-checkbox
          v-model="statusTAC"
          name="DTAC"
          value="accepted"
          unchecked-value="not_accepted"
          required
        >
          I accept the
          <nuxt-link to="/terms-and-conditions" exact>
            Terms and Conditions
          </nuxt-link>
        </b-form-checkbox>
      </b-form-group>
      <b-button
        :disabled="!complete || statusTAC === 'not_accepted' || processing"
        @click.prevent="payCredit()"
        variant="dark"
        block
        class="lg mb-1 pay-with-stripe"
      >
        Pay with credit card
      </b-button>
    </div>
    <Processing />
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  components: {
    Card,
    Processing: () => import('~/components/Processing')
  },
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
      stripe_key: process.env.stripe_key,
      processing: false,
      statusTAC: 'not_accepted',
      regNotDone: true,
      form: this.$vform({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
      }),
      submitted: false,
      complete: false,
      status: '',
      response: '',
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.form.fill({
        name: this.searchMetaObject.customerInfoName,
        email: this.searchMetaObject.customerInfoEmail,
        phone: this.searchMetaObject.customerInfoPhone,
        password: '',
        password_confirmation: ''
      })
    }
  },
  methods: {
    async onSubmitCredit() {
      const that = this
      this.processing = true
      await this.form
        .post('register')
        .then(() => {
          that.regNotDone = false
          that.payCredit()
        })
        .catch(() => {
          that.processing = false
        })
    },
    async payCredit() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      const that = this
      this.processing = true
      this.$bvModal.show('processing')
      await createToken().then((data) => {
        this.$axios
          .$post('/jobs/checkout-credit', {
            stripeToken: data.token.id,
            id: this.checkoutObject.id,
            amount: this.total,
            customerEmail: this.form.email
          })
          .then((response) => {
            this.status = 'success'
            this.$emit('successSubmit')
            this.restCheckoutState()
            this.submitted = true
            this.response = response
            that.$bvModal.hide('processing')
          })
          .catch((error) => {
            this.status = 'failure'
            this.response = 'Error!: ' + error
            that.processing = false
            that.$bvModal.hide('processing')
          })
      })
    },
    clearCheckout() {
      this.submitted = false
      this.status = ''
      this.complete = false
      this.response = ''
      this.processing = false
      this.$bvModal.hide('processing')
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
