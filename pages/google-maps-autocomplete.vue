<template>
  <div class="container">
    <div>
      <h1>Google Maps Demo</h1>

      <h1>Autocomplete Example (#164)</h1>
      <label>
        AutoComplete
        <gmap-autocomplete
          placeholder="This is a placeholder text"
          @place_changed="setPlace"
        >
        </gmap-autocomplete>
        <button @click="usePlace">Add</button>
      </label>
      <br />

      <Gmap-Map
        style="width: 600px; height: 300px;"
        :zoom="1"
        :center="{ lat: 0, lng: 0 }"
      >
        <Gmap-Marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
        ></Gmap-Marker>
        <Gmap-Marker
          v-if="place"
          label="&#x2605;"
          :position="{
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          }"
        ></Gmap-Marker>
      </Gmap-Map>
      <b-button type="submit" variant="primary" @click.prevent="onSendPlaces"
        >Show Quotes</b-button
      >
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ place }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [],
      place: null
    }
  },
  methods: {
    setDescription(description) {
      this.description = description
    },
    setPlace(place) {
      this.place = place
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        })
        this.place = null
      }
    },
    onSendPlaces() {}
  }
}
</script>
<style lang="css" scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>
