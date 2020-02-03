<template>
  <div class="page-checkout section_mod-2">
    <h1 class="ui-title-page">Checkout</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <div class="container">
      <div v-if="checkoutObject.driver.name != ''">
        <h2 class="ui-title-block mt-2">Choose Your Payment Method:</h2>
        <div class="border-color border-color_default"></div>
        <form action="">
          <b-form-group>
            <b-form-radio-group
              v-model="paymentMethod"
              class="theme-green radio-help"
            >
              <b-form-radio value="cash">
                <fa
                  v-if="paymentMethod === 'cash'"
                  :icon="['fas', 'money-bill']"
                  class="icon-dark"
                />
                <fa v-else :icon="['fas', 'money-bill']" />
                Cash on completion
              </b-form-radio>
              <b-form-radio value="credit">
                <fa
                  v-if="paymentMethod === 'credit'"
                  :icon="['fas', 'credit-card']"
                  class="icon-dark"
                />
                <fa v-else :icon="['fas', 'credit-card']" />
                Pay with credit card
              </b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </form>
        <div>
          <b-row>
            <b-col md>
              <span v-if="paymentMethod === 'cash'">
                <app-checkout-cash
                  :total="total"
                  :success="success"
                  @successSubmit="success = true"
                ></app-checkout-cash>
              </span>
              <span v-else-if="paymentMethod === 'credit'">
                <app-checkout-credit
                  :total="total"
                  :success="success"
                  @successSubmit="success = true"
                ></app-checkout-credit>
              </span>
              <span v-else></span>
            </b-col>
            <b-col md>
              <h2 class="ui-title-block">Your Move:</h2>
              <div class="border-color border-color_default"></div>
              <div class="customer-info">
                <h4>Your info:</h4>
                <div>Name: {{ customerName }}</div>
                <div>Email: {{ customerEmail }}</div>
                <div>Phone: {{ customerPhone }}</div>
                <hr />
              </div>
              <div class="driver-info">
                <h4>Driver info:</h4>
                <div>Name: {{ checkoutObject.driver.name }}</div>
                <hr />
              </div>
              <div class="driver-info">
                <h4>Addresses:</h4>
                <div
                  v-for="job_meta in checkoutObject.job_metas"
                  :key="job_meta.index"
                >
                  <div v-if="job_meta.key === 'collection'">
                    <div><b>Collection:</b></div>
                    <div>Postcode: {{ job_meta.value.postcode }}</div>
                    <div>Address: {{ job_meta.value.address }}</div>
                    <div>City: {{ job_meta.value.city }}</div>
                    <hr />
                  </div>
                </div>
                <div
                  v-for="job_meta in checkoutObject.job_metas"
                  :key="job_meta.index"
                >
                  <div
                    v-if="
                      job_meta.key === 'waypoints' && job_meta.value.length > 0
                    "
                  >
                    <div><b>Stops:</b></div>
                    <div
                      v-for="waypoint in job_meta.value"
                      :key="waypoint.index"
                    >
                      <div>Postcode: {{ waypoint.postcode }}</div>
                      <div>Address: {{ waypoint.address }}</div>
                      <div>City: {{ waypoint.city }}</div>
                      <hr />
                    </div>
                  </div>
                </div>
                <div
                  v-for="job_meta in checkoutObject.job_metas"
                  :key="job_meta.index"
                >
                  <div v-if="job_meta.key === 'delivery'">
                    <div><b>Delivery:</b></div>
                    <div>Postcode: {{ job_meta.value.postcode }}</div>
                    <div>Address: {{ job_meta.value.address }}</div>
                    <div>City: {{ job_meta.value.city }}</div>
                    <hr />
                  </div>
                </div>
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
                  <div v-if="job_meta.key === 'vanSize'">
                    Van Size: {{ job_meta.value | vanSize }}
                  </div>
                  <div v-if="job_meta.key === 'helpersRequired'">
                    Helpers Required: {{ job_meta.value | helpersRequired }}
                  </div>
                  <div v-if="job_meta.key === 'additionalTimePrice'">
                    Additional Time Price: {{ job_meta.value | currency }} per
                    half hour
                  </div>
                  <div v-if="job_meta.key === 'totalTime'">
                    Total Time:
                    {{ job_meta.value | timeInFloatToSec | timeInHoursMinutes }}
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
        <b-alert show variant="warning" class="text-center">
          <h2>You have no moves</h2>
        </b-alert>
        <nuxt-link to="/my-move" class="btn mb-1 btn-secondary btn-block lg">
          Refine My Quotes
        </nuxt-link>
      </div>

      <!--If there's a success, let's let people know it's being processed, we'll add a success component later on-->
      <div v-else>
        <b-alert show variant="success">
          <h2>Thank you for booking with HelloVans.com</h2>
          <p>
            We have received your booking and its being taken care of, you will
            soon receive booking confirmation to your email.
          </p>
          <p v-if="!authenticated">
            Your account has been created successfully. You can now
            <nuxt-link to="/login">
              login
            </nuxt-link>
            and can see your job by clicking on jobs section and you can see the
            contact details of the service provider.
          </p>
          <p v-else>
            You are now logged in and can see your job by clicking on
            <nuxt-link to="/my-jobs">jobs</nuxt-link>
            section and you can see the contact details of the service provider.
          </p>
          <p>
            If you have paid for the service online then you will also get a
            receipt at the end of the job, if the payment is paid in cash on the
            moving day then you need to pay it to the service provider and email
            us for a receipt. Should you have any questions about your booking
            please do not hesitate to
            <nuxt-link to="/contact">contact us</nuxt-link>
            or speak to us here on the live chat.
          </p>
        </b-alert>
      </div>
    </div>
  </div>
</template>

<script>
import AppCheckoutCash from '~/components/AppCheckoutCash.vue'
import AppCheckoutCredit from '~/components/AppCheckoutCredit.vue'
import EmptySpace from '~/components/EmptySpace.vue'

export default {
  components: {
    AppCheckoutCash,
    AppCheckoutCredit,
    EmptySpace
  },
  head() {
    return {
      title:
        'Checkout | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Checkout  | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  },
  data() {
    return {
      success: false,
      google_tag_on: process.env.google_tag_on,
      paymentMethod: 'cash',
      paymentOptions: [
        { text: 'Cash on completion', value: 'cash' },
        { text: 'Pay with credit card', value: 'credit' }
      ]
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
  mounted() {
    if (process.browser && this.google_tag_on) {
      this.$gtag('event', 'conversion', {
        send_to: 'AW-983351056/ovYBCIrH37YBEJD-8tQD'
      })
    }
  },
  methods: {}
}
</script>
