<template>
  <div>
    <gmap-map
      v-show="showMap"
      ref="mapXX"
      :center="coords"
      :zoom="15"
      style="width: 100%; height: 300px"
    >
      <gmap-marker :position="coords"> </gmap-marker>
      <gmap-marker :position="destination"> </gmap-marker>
    </gmap-map>
    <button @click="getDirection">get direction</button>
  </div>
</template>
<script>
/* global google */
export default {
  data() {
    return {
      showMap: true,
      coords: {
        lat: -7.824374,
        lng: 110.262371
      },
      destination: {
        lat: -7.925665,
        lng: 110.298115
      },
      directionsService: null,
      directionsDisplay: null
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.$gmapApiPromiseLazy().then(() => {
        this.$options.directionsService = new google.maps.DirectionsService()
        this.$options.directionsDisplay = new google.maps.DirectionsRenderer()
        this.$options.directionsDisplay.setMap(this.$refs.mapXX.$mapObject)
      })
    })
  },
  methods: {
    getDirection() {
      this.$gmapApiPromiseLazy().then(() => {
        this.$options.directionsDisplay.set('directions', null)
        this.$options.directionsService.route(
          {
            origin: this.coords,
            destination: this.destination,
            travelMode: 'DRIVING'
          },
          (result, status) => {
            if (status === 'OK') {
              this.$options.directionsDisplay.setDirections(result)
            }
          }
        )
      })
    }
  }
}
</script>
