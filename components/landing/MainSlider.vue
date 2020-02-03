<template>
  <div
    :style="{
      backgroundImage: 'url(' + filesBaseURL + landingHtmlObject.url + ')'
    }"
    class="main-slider-bg"
  >
    <b-container fluid class="main-slider main-slider_mod-2">
      <b-row>
        <b-col>
          <b-container>
            <no-ssr>
              <form>
                <b-row>
                  <b-col md>
                    <div
                      v-html="landingHtmlObject.meta.mainSliderTitle"
                      class="slide-title"
                    ></div>
                    <no-ssr>
                      <b-form-group class="mt-2">
                        <gmap-autocomplete
                          :value="collectionPlaceObject.address"
                          @place_changed="setCollectionPlace"
                          class="form-control main-address"
                          placeholder="Collection Address"
                          required
                        ></gmap-autocomplete>
                      </b-form-group>
                    </no-ssr>

                    <b-button
                      @click.prevent="addEmptyWayPoint"
                      size="sm"
                      class="mb-3"
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
                        <no-ssr>
                          <gmap-autocomplete
                            :value="wayPointPlacesObject[index].address"
                            @click="setCurrentWayPointIndex(index)"
                            @place_changed="setWayPointPlace"
                            class="form-control"
                            placeholder="Stop Address"
                          ></gmap-autocomplete>
                        </no-ssr>

                        <div
                          v-if="wayPointPlacesObject.length - 1 == index"
                          class="input-group-append"
                        >
                          <span
                            @click.prevent="deleteWayPoint(index)"
                            class="input-group-text bg-danger color-white"
                          >
                            X
                          </span>
                        </div>
                      </div>
                    </div>

                    <b-form-group>
                      <no-ssr>
                        <gmap-autocomplete
                          :value="deliveryPlaceObject.address"
                          @place_changed="setDeliveryPlace"
                          class="form-control main-address"
                          placeholder="Delivery Address"
                          required
                        ></gmap-autocomplete>
                      </no-ssr>
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
                      ref="mapDir"
                      v-show="showMap"
                      :center="center"
                      :zoom="15"
                      class="mt-2 mb-3"
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
      filesBaseURL: process.env.filesBaseURL,
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
