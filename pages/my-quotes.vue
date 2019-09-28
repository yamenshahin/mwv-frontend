<template>
  <b-container>
    <div v-for="(place, index) in places" :key="index">
      <div class="card mt-3">
        <div class="card-body">
          <b-row>
            <b-col md="8">
              <h4>{{ place.user.name }}</h4>
              {{ place.score }}
              <b-row>
                <b-col md>
                  <b-button block variant="dark">
                    {{ place.milesDriven }}
                  </b-button>
                  <div>Miles driven</div>
                </b-col>
                <b-col md>
                  <b-button block variant="dark">
                    {{ place.jobsBooked }}
                  </b-button>
                  <div>Jobs booked</div>
                </b-col>
                <b-col md>
                  <b-button block variant="dark">{{ place.votes }}</b-button>
                  <div>Reviews</div>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="4">
              <h5>Total {{ place.price.total | currency }}</h5>
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
              <b-button
                block
                variant="info"
                class="mb-1"
                @click.prevent="createCustomerJobs(index)"
              >
                Book Now
              </b-button>
              <b-button
                v-b-toggle="'collapse-' + index"
                variant="danger"
                size="sm"
              >
                Price breakdown
              </b-button>
              <b-button variant="danger" size="sm">
                Email
              </b-button>
            </b-col>
          </b-row>
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
              <b-tr variant="info">
                <b-td>Estimated distance</b-td>
                <b-td>{{ searchResultObject.job_meta.milesDriven }} miles</b-td>
              </b-tr>
              <b-tr variant="info">
                <b-td>Estimated driving time</b-td>
                <b-td>
                  {{
                    searchResultObject.job_meta.travelTime | timeInHoursMinutes
                  }}
                </b-td>
              </b-tr>
              <b-tr variant="info">
                <b-td>Any additional time will be charged at</b-td>
                <b-td>
                  {{ place.price.additionalTimePrice | currency }} per half hour
                </b-td>
              </b-tr>
            </b-tfoot>
          </b-table-simple>
        </b-card>
      </b-collapse>
    </div>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      places: {},
      jobMeta: {}
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
      // this.$router.push('/checkout')
    }
  }
}
</script>
