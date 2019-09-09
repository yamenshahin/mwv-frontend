<template>
  <b-container class="my-move">
    <b-row>
      <b-col>
        <!-- Van Size -->
        <div class="card mt-3">
          <div class="card-body">
            <h2 class="pb-2 mb-3">Which vehicle do you need?</h2>
            <b-form-group>
              <b-form-radio-group
                v-model="job_metas.vanSize"
                :options="vanSizeOptions"
                class="theme-green"
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </div>

        <!-- Helpers Required -->
        <div class="card mt-3">
          <div class="card-body">
            <h2 class="pb-2 mb-3">
              Will you need help with loading and unloading?
            </h2>
            <b-form-group>
              <b-form-radio-group
                v-model="job_metas.helpersRequired"
                :options="helpersRequiredOptions"
                class="theme-green"
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </div>

        <!-- Date time -->
        <div class="card mt-3">
          <div class="card-body">
            <h2 class="pb-2 mb-3">
              When you're moving?
            </h2>
            <datetime
              v-model="moveDateTime"
              class="theme-green"
              type="datetime"
              use12-hour
            ></datetime>
          </div>
        </div>

        <!-- description -->
        <div class="card mt-3">
          <div class="card-body">
            <h2 class="pb-2 mb-3">
              Any note?
            </h2>
            <b-form-group
              label="Please enter a brief description of the items you will be moving and any additional contact numbers. Please also let us know if you need any items assembled or re-assembled."
              label-for="description"
            >
              <b-form-input
                id="description"
                v-model="description"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <!-- Customer Info -->
        <div class="card mt-3">
          <div class="card-body">
            <h2 class="pb-2 mb-3">
              About you
            </h2>
            <b-row>
              <b-col>
                <b-form-group label="Name" label-for="customerInfoName">
                  <b-form-input
                    id="customerInfoName"
                    v-model="customerInfo.name"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Email" label-for="customerInfoEmail">
                  <b-form-input
                    id="customerInfoEmail"
                    v-model="customerInfo.email"
                    type="email"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label="Phone Number"
                  label-for="customerInfoPhone"
                >
                  <b-form-input
                    id="customerInfoPhone"
                    v-model="customerInfo.phone"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </div>
        </div>

        <!-- Where you're moving? -->
        <div class="card mt-3">
          <div class="card-body">
            <h2 class="pb-2 mb-3">Where you're moving?</h2>
            <b-row>
              <b-col md>
                <b-row>
                  <b-col md>
                    <b-form-group>
                      <gmap-autocomplete
                        class="form-control"
                        placeholder="Collection Address"
                        :value="collectionPlaceObject.address"
                        @place_changed="setCollectionPlace"
                      >
                      </gmap-autocomplete
                    ></b-form-group>
                  </b-col>
                  <b-col md>
                    <b-form-group>
                      <b-form-select
                        v-model="collectionAddress.stairs"
                        :options="stairsOptions"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md>
                    <b-form-group>
                      <gmap-autocomplete
                        class="form-control"
                        placeholder="Delivery Address"
                        :value="deliveryPlaceObject.address"
                        @place_changed="setDeliveryPlace"
                      >
                      </gmap-autocomplete
                    ></b-form-group>
                  </b-col>
                  <b-col md>
                    <b-form-group>
                      <b-form-select
                        v-model="deliveryAddress.stairs"
                        :options="stairsOptions"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-button class="mb-3" @click.prevent="addEmptyWayPoint"
                  >+ Add Waypoint</b-button
                >
                <div
                  v-for="(wayPointPlacesObjectSingle,
                  index) in wayPointPlacesObject"
                  :key="index"
                >
                  <div class="input-group mb-3">
                    <gmap-autocomplete
                      :value="wayPointPlacesObject[index].address"
                      class="form-control"
                      placeholder="Waypoint Address"
                      @click="setCurrnetWayPointIndex(index)"
                      @place_changed="setWayPointPlace"
                    >
                    </gmap-autocomplete>
                    <div
                      v-if="wayPointPlacesObject.length - 1 == index"
                      class="input-group-append"
                    >
                      <span
                        class="input-group-text bg-danger color-white"
                        @click.prevent="deleteWayPoint(index)"
                        >X</span
                      >
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md>
                <b-button
                  v-if="
                    collectionPlaceObject.address && deliveryPlaceObject.address
                  "
                  @click="getDirection"
                >
                  Cheack Direction
                </b-button>
                <!-- Map -->
                <gmap-map
                  v-show="showMap"
                  ref="map"
                  class="mt-2"
                  :center="coords"
                  :zoom="15"
                  style="width: 100%; height: 300px"
                >
                  <gmap-marker :position="coords"> </gmap-marker>
                  <gmap-marker :position="destination"> </gmap-marker>
                </gmap-map>
              </b-col>
            </b-row>
          </div>
        </div>

        <!-- Total Time -->
        <div class="card mt-3">
          <div class="card-body">
            <h2 class="pb-2 mb-3">
              How many hours do you want the vehicle for?
            </h2>
            <b-form-group>
              <b-form-select
                v-model="totalTime"
                :options="totalTimeOptions"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>

        <!-- Notification -->
        <div class="card mt-3">
          <div class="card-body">
            <h2 class="pb-2 mb-3">Notify me</h2>
            <b-form-group
              label="We'd love to keep in touch about this move by email and text message."
            >
              <b-form-radio-group
                v-model="notification"
                :options="notificationOptions"
                class="theme-green"
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  /* global google */
  data() {
    return {
      job_metas: {},
      vanSizeOptions: [
        { text: 'Small Van', value: '1' },
        { text: 'Medium Van', value: '2' },
        { text: 'Large van', value: '3' },
        { text: 'Giant van', value: '4' }
      ],
      helpersRequiredOptions: [
        { text: 'No help needed', value: '0' },
        { text: 'Driver helping', value: '1' },
        { text: 'Driver helping + 1 helper', value: '2' },
        { text: 'Driver helping + 2 helpers', value: '3' }
      ],
      moveDateTime: '',
      description: '',
      customerInfo: {},
      collectionAddress: {
        stairs: null
      },
      deliveryAddress: {
        stairs: null
      },
      stairsOptions: [
        { text: 'At my address there', value: null },
        { text: 'are no flights of stairs', value: '0' },
        { text: 'is 1 flight of stairs', value: '1' },
        { text: 'are 2 flights of stairs', value: '2' },
        { text: 'are 3 flights of stairs', value: '3' },
        { text: 'are 4 flights of stairs', value: '4' },
        { text: 'are 5 flights of stairs', value: '5' },
        { text: 'are 6 flights of stairs', value: '6' },
        { text: 'are 7 flights of stairs', value: '7' },
        { text: 'are 8+ flights of stairs', value: '8' },
        { text: 'is a lift', value: '9' }
      ],
      totalTime: '',
      totalTimeOptions: [
        { text: '30 minutes', value: '0.5' },
        { text: '1 hour', value: '1' },
        { text: '1 and a half hours', value: '1.5' },
        { text: '2 hour', value: '2' },
        { text: '2 and a half hours', value: '2.5' },
        { text: '3 hour', value: '3' },
        { text: '3 and a half hours', value: '3.5' },
        { text: '4 hour', value: '4' },
        { text: '4 and a half hours', value: '4.5' },
        { text: '5 hour', value: '5' },
        { text: '5 and a half hours', value: '4.5' },
        { text: '6 hour', value: '6' },
        { text: '6 and a half hours', value: '6.5' },
        { text: '7 hour', value: '7' },
        { text: '7 and a half hours', value: '7.5' },
        { text: '8 hour', value: '8' },
        { text: '8 and a half hours', value: '8.5' },
        { text: '9 hour', value: '9' },
        { text: '9 and a half hours', value: '9.5' },
        { text: '10 hour', value: '10' },
        { text: '10 and a half hours', value: '10.5' },
        { text: '11 hour', value: '11' },
        { text: '11 and a half hours', value: '11.5' },
        { text: '12 hour', value: '12' },
        { text: '12 and a half hours', value: '12.5' }
      ],
      notification: '',
      notificationOptions: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' }
      ],
      // Map Data
      showMap: true,
      coords: {
        lat: 51.507441,
        lng: -0.1277
      },
      destination: {
        lat: 51.527182,
        lng: -0.133992
      },

      currnetWayPointIndex: 0,
      directionsService: {},
      directionsDisplay: {}
    }
  },
  computed: {
    wayPoints() {
      const formatted = []
      let googleLatLng = {}
      for (let i = 0; i < this.wayPointPlacesObject.length; i++) {
        if (this.wayPointPlacesObject[i].address) {
          googleLatLng = new google.maps.LatLng(
            this.wayPointPlacesObject[i].lat,
            this.wayPointPlacesObject[i].lng
          )
          formatted[i] = {
            location: googleLatLng
          }
        }
      }
      return formatted
    }
  },
  methods: {
    async setCollectionPlace(collectionPlace) {
      this.collectionPlace = collectionPlace
      await this.$store.dispatch(
        'places/setCollectionPlace',
        this.collectionPlace
      )
      this.coords = {
        lat: this.collectionPlaceObject.lat,
        lng: this.collectionPlaceObject.lng
      }
    },
    async setDeliveryPlace(deliveryPlace) {
      this.deliveryPlace = deliveryPlace
      await this.$store.dispatch('places/setDeliveryPlace', this.deliveryPlace)
      this.destination = {
        lat: this.deliveryPlaceObject.lat,
        lng: this.deliveryPlaceObject.lng
      }
    },
    getDirection() {
      this.directionsService = new google.maps.DirectionsService()
      this.directionsDisplay = new google.maps.DirectionsRenderer()
      this.directionsDisplay.setMap(null)
      this.directionsDisplay.setMap(this.$refs.map.$mapObject)
      const calculatedWayPoint = this.wayPoints
      // google maps API's direction service
      function calculateAndDisplayRoute(
        directionsService,
        directionsDisplay,
        start,
        destination
      ) {
        directionsService.route(
          {
            origin: start,
            destination,
            waypoints: calculatedWayPoint,
            travelMode: 'DRIVING'
          },
          function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response)
            } else {
              window.alert('Directions request failed due to ' + status)
            }
          }
        )
      }
      calculateAndDisplayRoute(
        this.directionsService,
        this.directionsDisplay,
        this.coords,
        this.destination
      )
    },
    async addEmptyWayPoint() {
      await this.$store.dispatch('places/setWayPointPlaces', 'empty')
    },
    async deleteWayPoint(index) {
      await this.$store.dispatch('places/deleteWayPointPlaces', index)
    },
    setCurrnetWayPointIndex(index) {
      this.currnetWayPointIndex = index
    },
    async setWayPointPlace(wayPointPlace) {
      wayPointPlace.id = this.currnetWayPointIndex
      await this.$store.dispatch('places/setWayPointPlaces', wayPointPlace)
    }
  }
}
</script>
