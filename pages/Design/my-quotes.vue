<template>
  <b-container>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ customerJobsObject }}</pre>
      <pre class="m-0">{{ searchMetaObject }}</pre>
      <pre class="m-0">{{ searchResultObject }}</pre>
    </b-card>
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
              <h5>Total £{{ place.price.total }}</h5>
              <p>Includes VAT &amp; booking fee</p>
              <p>
                For the first
                <strong>{{ jobMeta.totalTime }} hours</strong>
                and then
                <strong>£{{ place.price.additionalTimePrice }}</strong>
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
                <b-td>£{{ place.price.estimatedDistancePrice }}</b-td>
              </b-tr>
              <b-tr>
                <b-td>Driver time charge</b-td>
                <b-td>£{{ place.price.totalTimePrice }}</b-td>
              </b-tr>
              <b-tr>
                <b-td>Total stairs price</b-td>
                <b-td>£{{ place.price.stairsPrice }}</b-td>
              </b-tr>
              <b-tr>
                <b-td>Subtotal</b-td>
                <b-td>£{{ place.price.subtotal }}</b-td>
              </b-tr>
              <b-tr>
                <b-td>Fee</b-td>
                <b-td>£{{ place.price.fee }}</b-td>
              </b-tr>
            </b-tbody>
            <b-tfoot>
              <b-tr variant="secondary">
                <b-td>Total</b-td>
                <b-td>£{{ place.price.total }}</b-td>
              </b-tr>
              <b-tr variant="info">
                <b-td>Estimated distance</b-td>
                <b-td>{{ searchResultObject.job_meta.milesDriven }} miles</b-td>
              </b-tr>
              <b-tr variant="info">
                <b-td>Estimated driving time</b-td>
                <b-td>
                  {{
                    formateTimeToString(searchResultObject.job_meta.travelTime)
                  }}
                </b-td>
              </b-tr>
              <b-tr variant="info">
                <b-td>Any additional time will be charged at</b-td>
                <b-td>
                  £{{ place.price.additionalTimePrice }} per half hour
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
    formateTimeToString(timeInSec) {
      const h = Math.floor(timeInSec / 3600)
      const m = Math.floor((timeInSec % 3600) / 60)

      const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : ''
      const mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes ') : ''
      const coma = hDisplay && mDisplay ? ', ' : ''
      return hDisplay + coma + mDisplay
    },
    async createCustomerJobs(placeIndex) {
      const customerJobs = {
        driver: this.searchResultObject.data[placeIndex],
        job_meta: this.searchResultObject.job_meta
      }
      await this.$store.dispatch('customer-jobs/setCustomerJobs', customerJobs)
      this.$router.push('/my-jobs')
    }
  }
}
</script>
