<template>
  <b-container>
    <h1>Hello Index</h1>
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
        <b-button
          v-if="
            !collectionPlaceObject.postcode || !deliveryPlaceObject.postcode
          "
          v-b-tooltip.hover
          title="Please select a valid collection and delivery address"
          >Show Quotes</b-button
        >
        <nuxt-link
          v-if="collectionPlaceObject.postcode && deliveryPlaceObject.postcode"
          to="/my-move"
          class="btn btn-secondary"
          >Ready</nuxt-link
        >
        <b-button
          v-if="collectionPlaceObject.postcode && deliveryPlaceObject.postcode"
          @click="getDirection"
        >
          Check Direction
        </b-button>
        <b-button @click.prevent="addWayPoint">+ Add Waypoint</b-button>
        <b-button @click.prevent="deleteWayPoint">- Remove Waypoint</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div v-for="(waypoint, index) in waypoints" :key="index">
          <b-form-group>
            {{ index }}
            <span @click="deleteWayPoint(index)">XX</span>
            <gmap-autocomplete
              class="form-control"
              placeholder="Way Point Address"
              @click="setCurrnetWayPointIndex(index)"
              @place_changed="setWayPointPlace"
            >
            </gmap-autocomplete>
          </b-form-group>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <gmap-map
          v-show="showMap"
          ref="map"
          :center="coords"
          :zoom="15"
          style="width: 100%; height: 300px"
        >
          <gmap-marker :position="this.coords"> </gmap-marker>
          <gmap-marker :position="this.destination"> </gmap-marker>
        </gmap-map>
      </b-col>
    </b-row>
  </b-container>
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
      waypoints: [],

      currnetWayPointIndex: 0
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
      const directionsService = new google.maps.DirectionsService()
      const directionsDisplay = new google.maps.DirectionsRenderer()
      directionsDisplay.setMap(this.$refs.map.$mapObject)
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
        directionsService,
        directionsDisplay,
        this.coords,
        this.destination
      )
    },
    addWayPoint() {
      this.waypoints.push({})
    },
    async deleteWayPoint(index) {
      this.waypoints.splice(index, 1)
      await this.$store.dispatch('places/deleteWayPointPlaces', index)
    },
    setCurrnetWayPointIndex(index) {
      this.currnetWayPointIndex = index
    },
    async setWayPointPlace(wayPointPlace) {
      wayPointPlace.id = this.currnetWayPointIndex
      await this.$store.dispatch('places/setWayPointPlaces', wayPointPlace)
    },
    test_console() {
      console.log()
    }
  }
}
</script>
