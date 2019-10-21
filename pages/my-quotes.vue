<template>
  <div class="page-my-quotes  section-no-bg">
    <h1 class="ui-title-page">Quotes Results</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container v-if="!Object.keys(places).length">
      <nuxt-link to="/my-move" class="btn mb-1 btn-secondary btn-block lg">
        Refine My Quotes
      </nuxt-link>
    </b-container>
    <b-container v-if="Object.keys(places).length">
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
      <div v-for="(place, index) in places" :key="index" class="search-results">
        <div class="card mt-3">
          <div class="card-body section_mod-2">
            <div class="desktop d-none d-md-block">
              <b-row>
                <b-col cols="2">
                  <img
                    src="http://127.0.0.1:8000/storage/user-files/2019/10/nafW5WbwHWsvUI3aBn4KgYVwVSlSpz9JqmGEGCGL.png"
                    alt="place-image"
                    class="img-fluid"
                  />
                </b-col>
                <b-col cols="10">
                  <b-row>
                    <b-col>
                      <h2 class="ui-title-block">
                        {{ place.user.name }}
                        <b-badge variant="warning">Gold</b-badge>
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
                              v-for="index in Math.round(place.score)"
                              :key="index"
                              :icon="['fas', 'star']"
                            />
                            <fa
                              v-if="Math.round(place.score) < place.score"
                              :icon="['fas', 'star-half']"
                            />
                          </b-button>
                          <b-button
                            variant="primary"
                            disabled
                            class="disabled-alt"
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
                            <strong>{{ jobMeta.totalTime }} hours</strong>
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
                          <b-button block class="mb-1">
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
                    src="http://127.0.0.1:8000/storage/user-files/2019/10/nafW5WbwHWsvUI3aBn4KgYVwVSlSpz9JqmGEGCGL.png"
                    alt="place-image"
                    class="img-fluid"
                  />
                </b-col>
                <b-col cols="10">
                  <b-row>
                    <b-col>
                      <b-button variant="dark" block class="lg mb-1">
                        <fa :icon="['fas', 'calendar-check']" />
                        Book Now
                      </b-button>
                      <div class="text-right">
                        <h3>Total £50.44</h3>
                        <p>Includes VAT &amp; booking fee</p>
                        <p>
                          For the first
                          <strong>1.5 hours</strong>
                          and then
                          <strong>
                            £7
                          </strong>
                          per half hour
                        </p>
                      </div>
                      <h2 class="ui-title-block">
                        Sammy's North London Logistics
                        <b-badge variant="warning">Gold</b-badge>
                      </h2>
                      <div class="border-color border-color_default"></div>
                      <div class="driver-desc">
                        <p>
                          ** I DO NOT TRANSPORT PIANOS ** ** ONLY MOVES 50 MILES
                          AWAY FROM LONDON ** specialist moving company based in
                          London, offering fast home and office removals
                          services.
                        </p>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'star']" />
                          <fa :icon="['fas', 'star']" />
                          <fa :icon="['fas', 'star']" />
                          <fa :icon="['fas', 'star']" />
                          <fa :icon="['fas', 'star-half']" />
                        </b-button>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'thumbs-up']" />
                          109 Reviews
                        </b-button>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'shipping-fast']" />
                          170 Jobs
                        </b-button>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'gas-pump']" />
                          3k Miles driven
                        </b-button>
                        <b-button block class="mb-1">
                          <fa :icon="['fas', 'share']" />
                          Email Qoute
                        </b-button>
                        <b-button block class="mb-1">
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
                <b-tr>
                  <b-td>Fee</b-td>
                  <b-td>{{ place.price.fee | currency }}</b-td>
                </b-tr>
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
      places: {},
      jobMeta: {},
      sorteOptions: [
        { text: 'Sort My Quotes', value: null },
        { text: 'Price (Lowest to Highest)', value: '0' },
        { text: 'Price (Highest to Lowest)', value: '1' },
        { text: 'Driver Rating', value: '2' },
        { text: 'Miles Driven', value: '3' },
        { text: 'Number Of Jobs Done', value: '4' },
        { text: 'Reviews', value: '5' }
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
      // Loop!!!
      // await this.$store.dispatch('customer-jobs/setCustomerJobs', customerJobs)
      // Create db Job from customerJobs
      const response = await this.$axios
        .$post('/jobs/store', customerJobs)
        .then(function(response) {
          // handle success
          return response
        })
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch('checkout/setCheckout', response.data)
      this.$router.push('/checkout')
    },
    async sortPlaces(sortOrder) {
      await this.$store.dispatch('search-result/sortSearchResult', sortOrder)
    }
  }
}
</script>
