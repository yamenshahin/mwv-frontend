<template>
  <b-container>
    <div v-if="Object.keys(customerJobsObject).length">
      <div v-for="job in customerJobsObject" :key="job" class="card mt-3">
        <pre class="m-0">{{ job.id }}</pre>
        <div :class="getClassNames(job.status)" class="card-body">
          <b-row>
            <b-col md>
              <b-table-simple hover small responsive>
                <b-tbody>
                  <b-tr>
                    <b-td>Driver name</b-td>
                    <b-td>{{ job.driver.name }}</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td>Driver email</b-td>
                    <b-td>{{ job.driver.email }}</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td>Driver phone</b-td>
                    <b-td>{{ job.driver.phone }}</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
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
    }
  }
}
</script>
