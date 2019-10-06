<template>
  <b-container>
    <div v-if="Object.keys(customerJobsObject).length">
      <div v-for="job in customerJobsObject" :key="job.id" class="card mt-3">
        <div :class="getClassNames(job.status)" class="card-body">
          <b-row>
            <b-col md>
              <div>Your Driver Name: {{ job.driver.name }}</div>
              <div v-if="job.status === 'booked'">
                Your Driver Email: {{ job.driver.email }}
              </div>
              <div v-if="job.status === 'booked'">
                Your Driver Phone: {{ job.driver.phone }}
              </div>
              <div v-for="job_meta in job.job_metas" :key="job_meta.index">
                <div v-if="job_meta.key === 'movingDate'">
                  Moving Date: {{ job_meta.value }}
                </div>
                <div v-if="job_meta.key === 'total'">
                  Total Price: {{ job_meta.value | currency }}
                </div>
              </div>
            </b-col>
            <b-col md>
              <b-button
                v-if="job.status === 'unbooked'"
                block
                variant="info"
                class="mb-1"
                @click.prevent="createCurrnetJob(job.id)"
              >
                Book Now
              </b-button>
              <div v-if="job.status === 'booked'">
                Booked
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
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
          console.log(response)
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
