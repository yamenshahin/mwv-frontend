<template>
  <b-container>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ customerJobsObject }}</pre>
    </b-card>
    <b-button class="mt-3" @click="popToast">Show reminder</b-button>
    <b-row>
      <b-col>
        <div class="card mt-3">
          <div class="card-body">
            <b-row>
              <b-col md>
                <b-table-simple hover small responsive>
                  <b-tbody>
                    <b-tr>
                      <b-td>Driver name</b-td>
                      <b-td>{{ customerJobsObject.driver.user.name }}</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td>Driver email</b-td>
                      <b-td>{{ customerJobsObject.driver.user.email }}</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td>Driver phone</b-td>
                      <b-td>{{ customerJobsObject.driver.user.phone }}</b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-col>
              <b-col md>
                <b-button
                  v-if="
                    collectionPlaceObject.address && deliveryPlaceObject.address
                  "
                  class="mb-3"
                  @click="getDirection"
                >
                  Cheack Direction
                </b-button>
                <!-- Map -->
                <gmap-map
                  v-show="showMap"
                  ref="mapDir"
                  class="mt-2"
                  :center="collectionComputed"
                  :zoom="15"
                  style="width: 100%; height: 300px"
                ></gmap-map>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* global google */
export default {
  data() {
    return {
      count: 0,
      // Map Data
      showMap: true,
      collectionComputed: {
        lat: null,
        lng: null
      },
      deliveryComputed: {
        lat: null,
        lng: null
      },
      waypointsComputed: null,
      directionsService: null,
      directionsDisplay: null
    }
  },
  computed: {
    wayPoints() {
      const formatted = []
      let googleLatLng = {}
      for (
        let i = 0;
        i < this.customerJobsObject.job_meta.waypoints.length;
        i++
      ) {
        if (this.customerJobsObject.job_meta.waypoints[i].address) {
          googleLatLng = new google.maps.LatLng(
            this.customerJobsObject.job_meta.waypoints[i].lat,
            this.customerJobsObject.job_meta.waypoints[i].lng
          )
          formatted[i] = {
            location: googleLatLng
          }
        }
      }
      return formatted
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.$gmapApiPromiseLazy().then(() => {
        this.$options.directionsService = new google.maps.DirectionsService()
        this.$options.directionsDisplay = new google.maps.DirectionsRenderer()
        this.$options.directionsDisplay.setMap(this.$refs.mapDir.$mapObject)
      })
    })
    this.collectionComputed.lat = this.customerJobsObject.job_meta.collection.lat
    this.collectionComputed.lng = this.customerJobsObject.job_meta.collection.lng
    this.deliveryComputed.lat = this.customerJobsObject.job_meta.delivery.lat
    this.deliveryComputed.lng = this.customerJobsObject.job_meta.delivery.lng
    this.waypointsComputed = this.customerJobsObject.job_meta.delivery
  },
  methods: {
    getDirection() {
      const calculatedWayPoint = this.wayPoints
      this.$gmapApiPromiseLazy().then(() => {
        this.$options.directionsDisplay.set('directions', null)
        this.$options.directionsService.route(
          {
            origin: this.collectionComputed,
            destination: this.deliveryComputed,
            waypoints: calculatedWayPoint,
            travelMode: 'DRIVING',
            region: 'uk'
          },
          (result, status) => {
            if (status === 'OK') {
              this.$options.directionsDisplay.setDirections(result)
            }
          }
        )
      })
    },
    popToast() {
      // Use a shorter name for this.$createElement
      const h = this.$createElement
      // Increment the toast count
      this.count++
      // Create the message
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        ' Flashy ',
        h('strong', {}, 'toast'),
        ` message #${this.count} `,
        h('b-spinner', { props: { type: 'grow', small: true } })
      ])
      // Create the title
      const vNodesTitle = h(
        'div',
        { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
        [
          h('strong', { class: 'mr-2' }, 'The Title'),
          h('small', { class: 'ml-auto text-italics' }, '5 minutes ago')
        ]
      )
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: 'info'
      })
    }
  }
}
</script>
