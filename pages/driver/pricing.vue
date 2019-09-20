<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <b-row>
        <b-col md>
          <b-card title="Small Van" class="mt-3">
            <b-card-body>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday customer loading"
                    description="Minimum: £10.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="10"
                      type="number"
                      :value="driverPlacePriceObject.priceSmallVanWeekday"
                      @input="
                        setDriverPlacePrice($event, 'priceSmallVanWeekday')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend customer loading"
                    description="Minimum: £10.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="10"
                      type="number"
                      :value="driverPlacePriceObject.priceSmallVanWeekend"
                      @input="
                        setDriverPlacePrice($event, 'priceSmallVanWeekend')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 1 man loading"
                    description="Minimum: £12.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="12"
                      type="number"
                      :value="driverPlacePriceObject.priceSmallVanWeekday1"
                      @input="
                        setDriverPlacePrice($event, 'priceSmallVanWeekday1')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 1 man loading"
                    description="Minimum: £12.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="12"
                      type="number"
                      :value="driverPlacePriceObject.priceSmallVanWeekend1"
                      @input="
                        setDriverPlacePrice($event, 'priceSmallVanWeekend1')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 2 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceSmallVanWeekday2"
                      @input="
                        setDriverPlacePrice($event, 'priceSmallVanWeekday2')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 2 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceSmallVanWeekend2"
                      @input="
                        setDriverPlacePrice($event, 'priceSmallVanWeekend2')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 3 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceSmallVanWeekday3"
                      @input="
                        setDriverPlacePrice($event, 'priceSmallVanWeekday3')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 3 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceSmallVanWeekend3"
                      @input="
                        setDriverPlacePrice($event, 'priceSmallVanWeekend3')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md>
          <b-card title="Medium van" class="mt-3">
            <b-card-body>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday customer loading"
                    description="Minimum: £10.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="10"
                      type="number"
                      :value="driverPlacePriceObject.priceMidVanWeekday"
                      @input="setDriverPlacePrice($event, 'priceMidVanWeekday')"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend customer loading"
                    description="Minimum: £10.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="10"
                      type="number"
                      :value="driverPlacePriceObject.priceMidVanWeekend"
                      @input="setDriverPlacePrice($event, 'priceMidVanWeekend')"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 1 man loading"
                    description="Minimum: £12.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="12"
                      type="number"
                      :value="driverPlacePriceObject.priceMidVanWeekday1"
                      @input="
                        setDriverPlacePrice($event, 'priceMidVanWeekday1')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 1 man loading"
                    description="Minimum: £12.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="12"
                      type="number"
                      :value="driverPlacePriceObject.priceMidVanWeekend1"
                      @input="
                        setDriverPlacePrice($event, 'priceMidVanWeekend1')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 2 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceMidVanWeekday2"
                      @input="
                        setDriverPlacePrice($event, 'priceMidVanWeekday2')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 2 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceMidVanWeekend2"
                      @input="
                        setDriverPlacePrice($event, 'priceMidVanWeekend2')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 3 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceMidVanWeekday3"
                      @input="
                        setDriverPlacePrice($event, 'priceMidVanWeekday3')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 3 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceMidVanWeekend3"
                      @input="
                        setDriverPlacePrice($event, 'priceMidVanWeekend3')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md>
          <b-card title="Large (Xlwb) van" class="mt-3">
            <b-card-body>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday customer loading"
                    description="Minimum: £10.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="10"
                      type="number"
                      :value="driverPlacePriceObject.priceLargeVanWeekday"
                      @input="
                        setDriverPlacePrice($event, 'priceLargeVanWeekday')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend customer loading"
                    description="Minimum: £10.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="10"
                      type="number"
                      :value="driverPlacePriceObject.priceLargeVanWeekend"
                      @input="
                        setDriverPlacePrice($event, 'priceLargeVanWeekend')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 1 man loading"
                    description="Minimum: £12.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="12"
                      type="number"
                      :value="driverPlacePriceObject.priceLargeVanWeekday1"
                      @input="
                        setDriverPlacePrice($event, 'priceLargeVanWeekday1')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 1 man loading"
                    description="Minimum: £12.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="12"
                      type="number"
                      :value="driverPlacePriceObject.priceLargeVanWeekend1"
                      @input="
                        setDriverPlacePrice($event, 'priceLargeVanWeekend1')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 2 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceLargeVanWeekday2"
                      @input="
                        setDriverPlacePrice($event, 'priceLargeVanWeekday2')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 2 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceLargeVanWeekend2"
                      @input="
                        setDriverPlacePrice($event, 'priceLargeVanWeekend2')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 3 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceLargeVanWeekday3"
                      @input="
                        setDriverPlacePrice($event, 'priceLargeVanWeekday3')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 3 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceLargeVanWeekend3"
                      @input="
                        setDriverPlacePrice($event, 'priceLargeVanWeekend3')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md>
          <b-card title="Giant (Luton) van" class="mt-3">
            <b-card-body>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday customer loading"
                    description="Minimum: £10.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="10"
                      type="number"
                      :value="driverPlacePriceObject.priceGiantVanWeekday"
                      @input="
                        setDriverPlacePrice($event, 'priceGiantVanWeekday')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend customer loading"
                    description="Minimum: £10.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="10"
                      type="number"
                      :value="driverPlacePriceObject.priceGiantVanWeekend"
                      @input="
                        setDriverPlacePrice($event, 'priceGiantVanWeekend')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 1 man loading"
                    description="Minimum: £12.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="12"
                      type="number"
                      :value="driverPlacePriceObject.priceGiantVanWeekday1"
                      @input="
                        setDriverPlacePrice($event, 'priceGiantVanWeekday1')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 1 man loading"
                    description="Minimum: £12.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="12"
                      type="number"
                      :value="driverPlacePriceObject.priceGiantVanWeekend1"
                      @input="
                        setDriverPlacePrice($event, 'priceGiantVanWeekend1')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 2 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceGiantVanWeekday2"
                      @input="
                        setDriverPlacePrice($event, 'priceGiantVanWeekday2')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 2 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceGiantVanWeekend2"
                      @input="
                        setDriverPlacePrice($event, 'priceGiantVanWeekend2')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    label="Weekday 3 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceGiantVanWeekday3"
                      @input="
                        setDriverPlacePrice($event, 'priceGiantVanWeekday3')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Weekend 3 man loading"
                    description="Minimum: £20.00"
                  >
                    <b-form-input
                      step="0.01"
                      min="20"
                      type="number"
                      :value="driverPlacePriceObject.priceGiantVanWeekend3"
                      @input="
                        setDriverPlacePrice($event, 'priceGiantVanWeekend3')
                      "
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card title="Charges related to the journey" class="mt-3">
            <b-card-body>
              <b-form-group
                label="Your fee for stopping at Via addresses on route to destination"
                description="Minimum: £1.00"
              >
                <b-form-input
                  step="0.01"
                  min="1"
                  type="number"
                  required
                  :value="driverPlacePriceObject.priceStop"
                  @input="setDriverPlacePrice($event, 'priceStop')"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="Your charge per flight of stairs"
                description="Minimum: £1.00"
              >
                <b-form-input
                  step="0.01"
                  min="1"
                  type="number"
                  required
                  :value="driverPlacePriceObject.priceStairs"
                  @input="setDriverPlacePrice($event, 'priceStairs')"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="Your mileage charge per mile"
                description="Minimum: £0.6"
              >
                <b-form-input
                  step="0.01"
                  min="0.6"
                  type="number"
                  required
                  :value="driverPlacePriceObject.priceMile"
                  @input="setDriverPlacePrice($event, 'priceMile')"
                ></b-form-input>
              </b-form-group>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-card title="Service Area" class="mt-3">
            <b-card-body>
              <b-row>
                <b-col>
                  <b-form-group label="Base address">
                    <gmap-autocomplete
                      class="form-control"
                      :value="driverPlaceLocationObject.address"
                      required
                      @place_changed="setDriverPlaceLocation"
                    ></gmap-autocomplete>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Radius from address"
                    description="In miles"
                  >
                    <b-form-input
                      :value="driverPlaceLocationObject.distance"
                      type="number"
                      min="0"
                      @input="setDistance($event)"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <GmapMap
                v-show="showMap"
                ref="mapDir"
                class="mt-2"
                :center="mapCenter"
                :zoom="7"
                style="width: 100%; height: 300px"
              >
                <GmapMarker :position="mapCenter"></GmapMarker>
                <GmapCircle
                  :center="mapCenter"
                  :radius="driverPlaceLocationObject.distance * 1609.344"
                  :visible="true"
                  :options="{ fillColor: 'red', fillOpacity: 0.5 }"
                ></GmapCircle>
              </GmapMap>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col md></b-col>
        <b-col md>
          <div class="card mt-3 mb-3">
            <div class="card-body">
              <b-button block type="submit" variant="info">
                Save
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col md></b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      showMap: true
    }
  },
  computed: {
    mapCenter() {
      return {
        lat: this.driverPlaceLocationObject.lat,
        lng: this.driverPlaceLocationObject.lng
      }
    }
  },
  async mounted() {
    const responseDataPrice = await this.$axios
      .get('/driver/get-price')
      .then(function(response) {
        // handle success
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
    const entries = Object.entries(responseDataPrice.data)
    for (let i = 0; i < entries.length; i++) {
      const metaObject = {
        [entries[i][0]]: entries[i][1]
      }
      this.$store.dispatch('driver-place/setDriverPlacePrice', metaObject)
    }

    const responseDataLocation = await this.$axios
      .get('/driver/get-location')
      .then(function(response) {
        // handle success
        return response.data.data
      })
      .catch(function(error) {
        console.log(error)
      })
    console.log(responseDataLocation)
    this.$store.dispatch(
      'driver-place/setDriverPlaceLocationFromDb',
      responseDataLocation
    )
  },
  methods: {
    async setDriverPlaceLocation(driverPlaceLocation) {
      this.driverPlaceLocation = driverPlaceLocation
      await this.$store.dispatch(
        'driver-place/setDriverPlaceLocation',
        this.driverPlaceLocation
      )
    },
    async setDistance(event) {
      await this.$store.dispatch('driver-place/setDistancePlace', event)
    },
    async setDriverPlacePrice(event, stateName) {
      const metaObject = {
        [stateName]: event
      }
      await this.$store.dispatch('driver-place/setDriverPlacePrice', metaObject)
    },
    async onSubmit() {
      const responseDataPrice = await this.$axios
        .post('/driver/create-update-price', this.driverPlacePriceObject)
        .then(function(response) {
          // handle success
          return response.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch(
        'driver-place/setDriverPlacePrice',
        responseDataPrice
      )

      const responseDataLocation = await this.$axios
        .post('/driver/create-update-location', this.driverPlaceLocationObject)
        .then(function(response) {
          // handle success
          return response.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch(
        'driver-place/setDriverPlaceLocationFromDb',
        responseDataLocation
      )
    }
  }
}
</script>
