<template>
  <div class="page-my-quotes  section-no-bg">
    <h1 class="ui-title-page">Quotes Results</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container v-if="searchResultObject.data.length === 0">
      <b-alert show variant="warning" class="text-center">
        <h2>We didn't find any quotes for you!</h2>
      </b-alert>
      <nuxt-link to="/my-move" class="btn mb-1 btn-secondary btn-block lg">
        Refine My Quotes
      </nuxt-link>
    </b-container>
    <b-container v-if="searchResultObject.data.length !== 0" class="mt-3">
      <b-row>
        <b-col>
          <nuxt-link to="/my-move" class="btn btn-primary">
            <fa :icon="['fas', 'sliders-h']" />
            Refine My Quotes
          </nuxt-link>
        </b-col>
        <b-col>
          <b-form-group>
            <b-form-select
              :value="null"
              :options="sorteOptions"
              @change="sortPlaces"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <div
        v-for="(place, index) in searchResultObject.data"
        :key="index"
        class="search-results"
      >
        <div class="card mt-3">
          <div class="card-body section_mod-2">
            <div class="desktop d-none d-md-block">
              <b-row>
                <b-col cols="2">
                  <img
                    :src="driverPlaceFilesObject.baseUrl + place.placeFile.url"
                    alt="place-image"
                    class="img-fluid"
                  />
                </b-col>
                <b-col cols="10">
                  <b-row>
                    <b-col>
                      <h2 class="ui-title-block">
                        {{ place.user.name }}
                        <!-- <b-badge variant="warning">Gold</b-badge> -->
                      </h2>
                      <div class="border-color border-color_default"></div>
                      <div class="driver-desc">
                        <p>
                          {{ place.disc }}
                        </p>
                      </div>
                      <b-row>
                        <b-col>
                          <b-button
                            variant="primary"
                            disabled
                            class="disabled-alt"
                          >
                            <fa
                              v-for="indexy in Math.round(place.score)"
                              :key="indexy"
                              :icon="['fas', 'star']"
                            />
                            <fa
                              v-if="Math.round(place.score) < place.score"
                              :icon="['fas', 'star-half']"
                            />
                          </b-button>
                          <b-button
                            variant="primary"
                            class="disabled-alt"
                            @click.prevent="showReviews(place.user.id)"
                          >
                            <fa :icon="['fas', 'thumbs-up']" />
                            {{ place.votes }} Reviews
                          </b-button>
                          <b-button
                            variant="primary"
                            disabled
                            class="disabled-alt"
                          >
                            <fa :icon="['fas', 'shipping-fast']" />
                            {{ place.jobsBooked }} Jobs
                          </b-button>
                          <b-button
                            variant="primary"
                            disabled
                            class="disabled-alt"
                          >
                            <fa :icon="['fas', 'gas-pump']" />
                            {{ place.milesDriven }} Miles driven
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col>
                      <b-row>
                        <b-col class="text-right">
                          <h3>Total {{ place.price.total | currency }}</h3>
                          <p>Includes VAT &amp; booking fee</p>
                          <p>
                            For the first
                            <strong>
                              {{ searchResultObject.job_meta.totalTime }} hours
                            </strong>
                            and then
                            <strong>
                              {{ place.price.additionalTimePrice | currency }}
                            </strong>
                            per half hour
                          </p>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <b-button
                            variant="dark"
                            block
                            class="lg mb-1"
                            @click.prevent="createCustomerJobs(index)"
                          >
                            <fa :icon="['fas', 'calendar-check']" />
                            Book Now
                          </b-button>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl>
                          <b-button
                            block
                            class="mb-1"
                            @click.prevent="emailQuote(index)"
                          >
                            <fa :icon="['fas', 'share']" />
                            Email Qoute
                          </b-button>
                        </b-col>
                        <b-col xl>
                          <b-button
                            v-b-toggle="'collapse-' + index"
                            block
                            class="mb-1"
                          >
                            <fa :icon="['fas', 'tags']" />
                            Price Breakdown
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>

            <div class="mobile d-block d-md-none d-lg-none d-xl-none">
              <b-row>
                <b-col cols="2">
                  <img
                    :src="driverPlaceFilesObject.baseUrl + place.placeFile.url"
                    alt="place-image"
                    class="img-fluid"
                  />
                </b-col>
                <b-col cols="10">
                  <b-row>
                    <b-col>
                      <b-button
                        variant="dark"
                        block
                        class="lg mb-1"
                        @click.prevent="createCustomerJobs(index)"
                      >
                        <fa :icon="['fas', 'calendar-check']" />
                        Book Now
                      </b-button>

                      <div class="text-right">
                        <h3>Total {{ place.price.total | currency }}</h3>
                        <p>Includes VAT &amp; booking fee</p>
                        <p>
                          For the first
                          <strong>
                            {{ searchResultObject.job_meta.totalTime }} hours
                          </strong>
                          and then
                          <strong>
                            {{ place.price.additionalTimePrice | currency }}
                          </strong>
                          per half hour
                        </p>
                      </div>
                      <h2 class="ui-title-block">
                        {{ place.user.name }}
                        <!-- <b-badge variant="warning">Gold</b-badge> -->
                      </h2>
                      <div class="border-color border-color_default"></div>
                      <div class="driver-desc">
                        <p>
                          {{ place.disc }}
                        </p>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa
                            v-for="indexy in Math.round(place.score)"
                            :key="indexy"
                            :icon="['fas', 'star']"
                          />
                          <fa
                            v-if="Math.round(place.score) < place.score"
                            :icon="['fas', 'star-half']"
                          />
                        </b-button>
                        <b-button
                          variant="primary"
                          class="disabled-alt"
                          @click.prevent="showReviews(place.user.id)"
                        >
                          <fa :icon="['fas', 'thumbs-up']" />
                          {{ place.votes }} Reviews
                        </b-button>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'shipping-fast']" />
                          {{ place.jobsBooked }} Jobs
                        </b-button>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'gas-pump']" />
                          {{ place.milesDriven }} Miles driven
                        </b-button>
                        <b-button
                          block
                          class="mb-1"
                          @click.prevent="emailQuote(index)"
                        >
                          <fa :icon="['fas', 'share']" />
                          Email Qoute
                        </b-button>
                        <b-button
                          v-b-toggle="'collapse-' + index"
                          block
                          class="mb-1"
                        >
                          <fa :icon="['fas', 'tags']" />
                          Price Breakdown
                        </b-button>
                      </div>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
        <b-collapse :id="'collapse-' + index">
          <b-card>
            <b-table-simple hover small responsive>
              <b-thead head-variant="info">
                <b-tr>
                  <b-th>Item</b-th>
                  <b-th>Price</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-td>Mileage charge</b-td>
                  <b-td>
                    {{ place.price.estimatedDistancePrice | currency }}
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>Driver time charge</b-td>
                  <b-td>{{ place.price.totalTimePrice | currency }}</b-td>
                </b-tr>
                <b-tr>
                  <b-td>Total stairs price</b-td>
                  <b-td>{{ place.price.stairsPrice | currency }}</b-td>
                </b-tr>
                <b-tr>
                  <b-td>Subtotal</b-td>
                  <b-td>{{ place.price.subtotal | currency }}</b-td>
                </b-tr>
                <!-- <b-tr>
                  <b-td>Fee</b-td>
                  <b-td>{{ place.price.fee | currency }}</b-td>
                </b-tr> -->
              </b-tbody>
              <b-tfoot>
                <b-tr variant="secondary">
                  <b-td>Total</b-td>
                  <b-td>{{ place.price.total | currency }}</b-td>
                </b-tr>
                <b-tr variant="primary">
                  <b-td>Estimated distance</b-td>
                  <b-td>
                    {{ searchResultObject.job_meta.milesDriven }} miles
                  </b-td>
                </b-tr>
                <b-tr variant="primary">
                  <b-td>Estimated driving time</b-td>
                  <b-td>
                    {{
                      searchResultObject.job_meta.travelTime
                        | timeInHoursMinutes
                    }}
                  </b-td>
                </b-tr>
                <b-tr variant="primary">
                  <b-td>Any additional time will be charged at</b-td>
                  <b-td>
                    {{ place.price.additionalTimePrice | currency }} per half
                    hour
                  </b-td>
                </b-tr>
              </b-tfoot>
            </b-table-simple>
          </b-card>
        </b-collapse>
      </div>
      <b-modal v-model="reviewsModalShow" title="Driver Reviews" ok-only>
        <div v-for="driverReview in driverReviews" :key="driverReview.id">
          <b-card class="driver-review mb-2">
            <h1 class="driver-review-stars">
              <fa
                v-for="star in driverReview.stars"
                :key="star"
                :icon="['fas', 'star']"
              />
            </h1>
            <p>{{ driverReview.comment }}</p>
          </b-card>
        </div>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import EmptySpace from '~/components/EmptySpace.vue'
export default {
  components: {
    EmptySpace
  },
  head() {
    return {
      title: 'Quotes Results',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Quotes Results description'
        }
      ]
    }
  },
  data() {
    return {
      reviewsModalShow: false,
      sorteOptions: [
        { text: 'Sort My Quotes', value: null },
        { text: 'Price (Lowest to Highest)', value: '0' },
        { text: 'Price (Highest to Lowest)', value: '1' },
        { text: 'Driver Rating', value: '2' },
        { text: 'Miles Driven', value: '3' },
        { text: 'Number Of Jobs Done', value: '4' },
        { text: 'Reviews', value: '5' }
      ],
      driverReviews: [
        {
          id: 0
        }
      ]
    }
  },
  mounted() {
    this.jobMeta = this.searchResultObject.job_meta
    this.places = this.searchResultObject.data
  },
  methods: {
    async createCustomerJobs(placeIndex) {
      const customerJobs = {
        driver: this.searchResultObject.data[placeIndex],
        job_meta: this.searchResultObject.job_meta
      }
      if (this.authenticated) {
        // Loop!!!
        // await this.$store.dispatch('customer-jobs/setCustomerJobs', customerJobs)
        // Create db Job from customerJobs
        const response = await this.$axios
          .$post('/jobs/store-authenticated', customerJobs)
          .then(function(response) {
            // handle success
            return response
          })
          .catch(function(error) {
            console.log(error)
          })
        await this.$store.dispatch('checkout/setCheckout', response.data)
        this.$router.push('/checkout')
      } else {
        // Loop!!!
        // await this.$store.dispatch('customer-jobs/setCustomerJobs', customerJobs)
        // Create db Job from customerJobs
        const response = await this.$axios
          .$post('/jobs/store-unauthenticated', customerJobs)
          .then(function(response) {
            // handle success
            return response
          })
          .catch(function(error) {
            console.log(error)
          })
        await this.$store.dispatch('checkout/setCheckout', response.data)
        this.$router.push('/checkout')
      }
    },
    async emailQuote(placeIndex) {
      const quote = this.searchResultObject.data[placeIndex]
      quote.job_meta = this.searchResultObject.job_meta
      console.log(quote)
      const that = this
      await this.$axios
        .$post('/user/email/send-quote', quote)
        .then(function(response) {
          // handle success
          that.$bvToast.toast('Your quote has been sent successfully.', {
            title: 'Quote Sent',
            variant: 'success',
            solid: true
          })
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    async sortPlaces(sortOrder) {
      await this.$store.dispatch('search-result/sortSearchResult', sortOrder)
    },
    async showReviews(userId) {
      const response = await this.$axios
        .$post('/feedback/place/show', { userId })
        .then(function(response) {
          // handle success
          return response
        })
        .catch(function(error) {
          console.log(error)
        })
      this.driverReviews = response
      this.reviewsModalShow = true
    }
  }
}
</script>
