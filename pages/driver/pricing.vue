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
                <b-form-input step="0.01" min="1" type="number"></b-form-input>
              </b-form-group>
              <b-form-group
                label="Your charge per flight of stairs per man"
                description="Minimum: £1.00"
              >
                <b-form-input step="0.01" min="1" type="number"></b-form-input>
              </b-form-group>
              <b-form-group
                label="Your mileage charge per mile"
                description="Minimum: £0.6"
              >
                <b-form-input
                  step="0.01"
                  min="0.6"
                  type="number"
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
                      :value="driverPlaceObject.address"
                      required
                      @place_changed="setDriverPlace"
                    ></gmap-autocomplete>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Radius from address"
                    description="In miles"
                  >
                    <b-form-input
                      :value="driverPlaceObject.distance"
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
                  :radius="driverPlaceObject.distance * 1609.344"
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
  data() {
    return {
      showMap: true
    }
  },
  computed: {
    mapCenter() {
      return {
        lat: this.driverPlaceObject.lat,
        lng: this.driverPlaceObject.lng
      }
    }
  },
  methods: {
    async setDriverPlace(driverPlace) {
      this.driverPlace = driverPlace
      await this.$store.dispatch(
        'driver-place/setDriverPlace',
        this.driverPlace
      )
    },
    async setDistance(event) {
      await this.$store.dispatch('driver-place/setDistancePlace', event)
    }
  }
}
</script>
