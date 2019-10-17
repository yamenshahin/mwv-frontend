<template>
  <div class="page-my-jobs section-no-bg">
    <h1 class="ui-title-page">My Move</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container>
      <div v-if="Object.keys(customerJobsObject).length">
        <b-row v-for="job in customerJobsObject" :key="job.id">
          <b-col>
            <div class="card mt-3 section_mod-2">
              <div class="card-body">
                <b-row>
                  <b-col xl="4">
                    <b-button
                      v-if="job.status === 'unbooked'"
                      block
                      variant="dark"
                      class="lg mb-1"
                      @click.prevent="createCurrnetJob(job.id)"
                    >
                      <fa :icon="['fas', 'calendar-check']" />
                      Book Now
                    </b-button>
                    <h2 class="ui-title-block">
                      <fa :icon="['fas', 'calendar-check']" />
                      2019-10-04 14:26:00
                      <b-badge v-if="job.status === 'booked'" variant="success">
                        Booked
                      </b-badge>
                      <b-badge
                        v-if="job.status === 'unbooked'"
                        variant="warning"
                      >
                        Not Booked
                      </b-badge>
                    </h2>
                    <div class="border-color border-color_default"></div>
                    <div class="driver-info">
                      <h4>Driver info:</h4>
                      <div>Name: {{ job.driver.name }}</div>
                      <div v-if="job.status === 'booked'">
                        Email: {{ job.driver.email }}
                      </div>
                      <div v-if="job.status === 'booked'">
                        Phone: {{ job.driver.phone }}
                      </div>
                    </div>
                  </b-col>
                  <b-col xl="4">
                    <div
                      v-for="job_meta in job.job_metas"
                      :key="job_meta.index"
                    >
                      <div v-if="job_meta.key === 'collection'">
                        <h4>Addresses:</h4>
                        <h5>Collection:</h5>
                        <p>Postcode: {{ job_meta.value.postcode }}</p>
                        <p>Address: {{ job_meta.value.address }}</p>
                        <p>City: {{ job_meta.value.city }}</p>
                      </div>
                      <div v-if="job_meta.key === 'delivery'">
                        <h5>Delivery:</h5>
                        <p>Postcode: {{ job_meta.value.postcode }}</p>
                        <p>Address: {{ job_meta.value.address }}</p>
                        <p>City: {{ job_meta.value.city }}</p>
                      </div>
                    </div>
                  </b-col>
                  <b-col xl="4">
                    <div
                      v-for="job_meta in job.job_metas"
                      :key="job_meta.index"
                    >
                      <div v-if="job_meta.key === 'helpersRequired'">
                        <h4>Others info:</h4>
                        <p>Helpers Required: {{ job_meta.value }}</p>
                      </div>
                      <div v-if="job_meta.key === 'total'">
                        <h3>Total Price: {{ job_meta.value | currency }}</h3>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
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
  data() {
    return {}
  },
  async mounted() {
    const response = await this.$axios
      .$get('/jobs/show')
      .then(function(response) {
        // handle success
        return response
      })
      .catch(function(error) {
        console.log(error)
      })
    this.$store.dispatch('customer-jobs/setCustomerJobs', response.data)
  },
  methods: {
    getClassNames(status) {
      if (status === 'booked') {
        return 'bg-success'
      } else {
        return 'bg-warning'
      }
    },
    async createCurrnetJob(id) {
      const response = await this.$axios
        .$get('/jobs/get-current/' + id)
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
  }
}
</script>
