<template>
  <b-container>
    <b-card class="mt-3" header="Form Data Result">
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
              <b-button block variant="info">Book Now</b-button>
              <a v-b-toggle.1 href="#">a</a>
            </b-col>
          </b-row>
        </div>
      </div>
      <div id="0" class="collapse">
        <b-card>I should start open!</b-card>
      </div>
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
  }
}
</script>
