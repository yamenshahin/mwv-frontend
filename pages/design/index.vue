<template>
  <div class="section-bg fullscreen pt-5">
    <b-container class="color-white">
      <h1 class="text-center">Moving Van</h1>
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
          <b-form-group>
            <gmap-autocomplete
              class="form-control"
              placeholder="Delivery Address"
              :value="deliveryPlaceObject.address"
              @place_changed="setDeliveryPlace"
            >
            </gmap-autocomplete
          ></b-form-group>
          <div
            v-for="(wayPointPlacesObjectSingle, index) in wayPointPlacesObject"
            :key="index"
          >
            <div class="input-group mb-3">
              <gmap-autocomplete
                :value="wayPointPlacesObject[index].address"
                class="form-control"
                placeholder="Way Point Address"
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
              !collectionPlaceObject.postcode || !deliveryPlaceObject.postcode
            "
            v-b-tooltip.hover
            title="Please select a valid collection and delivery address"
            >Show Quotes</b-button
          >
          <nuxt-link
            v-if="
              collectionPlaceObject.postcode && deliveryPlaceObject.postcode
            "
            to="/my-move"
            class="btn btn-success"
            >Ready</nuxt-link
          >
          <b-button
            v-if="
              collectionPlaceObject.postcode && deliveryPlaceObject.postcode
            "
            @click="getDirection"
          >
            Cheack Direction
          </b-button>
          <b-button @click.prevent="addEmptyWayPoint">+ Add Waypoint</b-button>
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
    </b-container>
  </div>
</template>
<script>
export default {
  /* global google */
  data() {
    return {
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
