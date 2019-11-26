<template>
  <div class="page-my-jobs section-no-bg">
    <h1 class="ui-title-page">My Jobs</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container>
      <div v-if="!Object.keys(customerJobsObject).length">
        <b-row>
          <b-col>
            <b-alert show variant="warning" class="text-center">
              <h2>You don't have any job</h2>
            </b-alert>
            <nuxt-link
              to="/my-move"
              class="btn mb-1 btn-secondary btn-block lg"
            >
              Refine My Quotes
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
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
                      <div
                        v-for="job_meta in job.job_metas"
                        :key="job_meta.index"
                      >
                        <div v-if="job_meta.key === 'movingDate'">
                          <fa :icon="['fas', 'calendar']" />
                          {{ job_meta.value | isoDateToString }}
                          <b-badge
                            v-if="job.status === 'booked'"
                            variant="success"
                          >
                            Booked
                          </b-badge>
                          <b-badge
                            v-if="job.status === 'unbooked'"
                            variant="warning"
                          >
                            Not Booked
                          </b-badge>
                        </div>
                      </div>
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
                      <div v-if="job_meta.key === 'vanSize'">
                        <h4>Others info:</h4>

                        <p>Van Size: {{ job_meta.value | vanSize }}</p>
                      </div>
                      <div v-if="job_meta.key === 'helpersRequired'">
                        <p>Helpers Required: {{ job_meta.value }}</p>
                      </div>
                      <div v-if="job_meta.key === 'description'">
                        <p>Note: {{ job_meta.value }}</p>
                      </div>
                      <div v-if="job_meta.key === 'total'">
                        <h3>Total Price: {{ job_meta.value | currency }}</h3>
                      </div>
                    </div>
                    <span v-if="job.feedback === 0"></span>
                    <b-button
                      v-else-if="job.feedback === null"
                      block
                      @click.prevent="voteModal(job)"
                    >
                      Give Feedback To Driver
                    </b-button>
                    <div v-else>
                      <p>
                        Rating:
                        <fa
                          v-for="star in job.feedback.stars"
                          :key="star"
                          :icon="['fas', 'star']"
                        />
                      </p>
                      <div>
                        <p>Comment:</p>
                        <p>{{ job.feedback.comment }}</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-modal
        v-model="voteModalShow"
        :hide-footer="voteModalFooterHide"
        class="vote-modal"
        :title="'Give ' + form.job.driver.name + ' your feedback'"
      >
        <!-- <pre>
          {{ form.job }}
        </pre> -->
        <form form="voteForm" @submit.prevent="vote()">
          <star-vote v-model="form.stars"></star-vote>
          <b-form-group label="Comment:" class="mt-2">
            <b-form-textarea
              v-model="form.comment"
              placeholder="Enter comment..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <div class="modal-footer justify-content-between">
            <b-button type="submit">
              Send Feedback
            </b-button>
            <b-button
              variant="primary"
              type="button"
              @click.prevent="hideVoteForm()"
            >
              Close
            </b-button>
          </div>
          <alert-success :form="form">
            Thank you for Your feedback!
          </alert-success>
        </form>
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
      title:
        'My Jobs | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'My Jobs | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  },
  data() {
    return {
      voteModalShow: false,
      voteModalFooterHide: true,
      form: this.$vform({
        job: {
          driver: {
            name: ''
          }
        },
        comment: '',
        stars: 5
      })
    }
  },
  async mounted() {
    const response = await this.$axios
      .$get('/jobs/show')
      .then(function(response) {
        // handle success
        console.log(response)
        return response
      })
      .catch(function(error) {
        console.log(error)
      })
    this.$store.dispatch('customer-jobs/setCustomerJobs', response.data)
  },
  methods: {
    async updateJobs() {
      const response = await this.$axios
        .$get('/jobs/show')
        .then(function(response) {
          console.log('update jobs')
          return response
        })
        .catch(function(error) {
          console.log(error)
        })
      this.$store.dispatch('customer-jobs/setCustomerJobs', response.data)
    },
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
    },
    voteModal(job) {
      this.voteModalShow = true
      this.form.clear()
      this.form.reset()
      this.form.job = job
    },
    async vote() {
      await this.form
        .post('feedback/job/store')
        .then(function(response) {})
        .catch(() => {})
      this.updateJobs()
    },
    hideVoteForm() {
      this.voteModalShow = false
    }
  }
}
</script>
