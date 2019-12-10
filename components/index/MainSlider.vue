<template>
  <div class="main-slider-bg">
    <b-container fluid class="main-slider main-slider_mod-2">
      <b-row>
        <b-col>
          <b-container>
            <no-ssr>
              <form>
                <b-row>
                  <b-col md>
                    <div class="slide-title">
                      <strong>100s Man With Van Providers</strong>
                      To Compare And Book For Your Next Move
                    </div>

                    <b-form-group class="mt-2">
                      <gmap-autocomplete
                        class="form-control main-address"
                        placeholder="Collection Address"
                        :value="collectionPlaceObject.address"
                        required
                        @place_changed="setCollectionPlace"
                      ></gmap-autocomplete>
                    </b-form-group>

                    <b-button
                      size="sm"
                      class="mb-3"
                      @click.prevent="addEmptyWayPoint"
                    >
                      +
                      <fa :icon="['fas', 'map-marker-alt']" />
                      Add Stop
                    </b-button>
                    <div
                      v-for="(wayPointPlacesObjectSingle,
                      index) in wayPointPlacesObject"
                      :key="index"
                    >
                      <div class="input-group mb-3">
                        <gmap-autocomplete
                          :value="wayPointPlacesObject[index].address"
                          class="form-control"
                          placeholder="Stop Address"
                          @click="setCurrentWayPointIndex(index)"
                          @place_changed="setWayPointPlace"
                        ></gmap-autocomplete>

                        <div
                          v-if="wayPointPlacesObject.length - 1 == index"
                          class="input-group-append"
                        >
                          <span
                            class="input-group-text bg-danger color-white"
                            @click.prevent="deleteWayPoint(index)"
                          >
                            X
                          </span>
                        </div>
                      </div>
                    </div>

                    <b-form-group>
                      <gmap-autocomplete
                        class="form-control main-address"
                        placeholder="Delivery Address"
                        :value="deliveryPlaceObject.address"
                        required
                        @place_changed="setDeliveryPlace"
                      ></gmap-autocomplete>
                    </b-form-group>
                    <b-button
                      v-if="
                        !collectionPlaceObject.address ||
                          !deliveryPlaceObject.address
                      "
                      v-b-tooltip.hover
                      type="submit"
                      size="lg"
                      title="Please select a valid collection and delivery address"
                      class="mb-1"
                      block
                    >
                      <fa :icon="['fas', 'shipping-fast']" />
                      GET FREE QUOTES
                    </b-button>
                    <nuxt-link
                      v-if="
                        collectionPlaceObject.address &&
                          deliveryPlaceObject.address
                      "
                      to="/my-move"
                      class="btn mb-1 btn-secondary btn-lg btn-block"
                    >
                      <fa :icon="['fas', 'shipping-fast']" />
                      Get Free Quotes
                    </nuxt-link>
                  </b-col>
                  <b-col md>
                    <!-- Map -->
                    <gmap-map
                      v-show="showMap"
                      ref="mapDir"
                      class="mt-2 mb-3"
                      :center="center"
                      :zoom="15"
                      style="width: 100%; height: 300px"
                    >
                      <span></span>
                    </gmap-map>
                  </b-col>
                </b-row>
              </form>
            </no-ssr>
          </b-container>
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
      center: {
        lat: 51.507441,
        lng: -0.1277
      },
      addressItems: [{ name: 'Collection' }, { name: 'Delivery' }],
      currentWayPointIndex: 0,
      directionsService: null,
      directionsDisplay: null
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
  mounted() {
    this.$nextTick(function() {
      this.$gmapApiPromiseLazy().then(() => {
        this.$options.directionsService = new google.maps.DirectionsService()
        this.$options.directionsDisplay = new google.maps.DirectionsRenderer()
        this.$options.directionsDisplay.setMap(this.$refs.mapDir.$mapObject)
      })
    })
  },
  methods: {}
}
</script>
