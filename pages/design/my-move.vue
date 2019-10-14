<template>
  <b-container class="my-move">
    <form @submit.prevent="onSubmit">
      <b-row>
        <b-col>
          <!-- Van Size -->
          <div class="card mt-3 section_mod-2">
            <div class="card-body">
              <div class="ui-subtitle-block">CHOOSE VEHICLE SIZE</div>
              <h2 class="ui-title-block">Which Vehicle Do You Need?</h2>
              <div class="border-color border-color_default"></div>
              <b-form-group>
                <b-form-radio-group
                  v-model="vanSizeComputed"
                  :options="vanSizeOptions"
                  class="theme-green"
                  required
                  @input="setSerchMeta($event, 'vanSize')"
                ></b-form-radio-group>
              </b-form-group>
            </div>
          </div>

          <!-- Helpers Required -->
          <div class="card mt-3 section_mod-2 ">
            <div class="card-body">
              <div class="ui-subtitle-block">
                CHOOSE THE NUMBER OF REQUIRED HELPER
              </div>
              <h2 class="ui-title-block">
                Will You Need Help With Loading And Unloading?
              </h2>
              <div class="border-color border-color_default"></div>
              <b-form-group>
                <b-form-radio-group
                  v-model="helpersRequiredComputed"
                  :options="helpersRequiredOptions"
                  class="theme-green"
                  required
                  @input="setSerchMeta($event, 'helpersRequired')"
                ></b-form-radio-group>
              </b-form-group>
            </div>
          </div>

          <!-- Date time -->
          <div class="card mt-3 section_mod-2">
            <div class="card-body">
              <div class="ui-subtitle-block">CHOOSE THE MOVING DATE</div>
              <h2 class="ui-title-block">When You're Moving?</h2>
              <div class="border-color border-color_default"></div>
              <datetime
                v-model="movingDateComputed"
                class="theme-green"
                type="datetime"
                :value-zone="getUTCPlusTimeOffset"
                use12-hour
                required
                @input="setSerchMeta($event, 'movingDate')"
              ></datetime>
            </div>
          </div>

          <!-- description -->
          <div class="card mt-3 section_mod-2 ">
            <div class="card-body">
              <div class="ui-subtitle-block">WRITE A NOTE FOR YOUR DRIVER</div>
              <h2 class="ui-title-block">Any Note?</h2>
              <div class="border-color border-color_default"></div>
              <b-form-group
                label="Please enter a brief description of the items you will be moving and any additional contact numbers. Please also let us know if you need any items assembled or re-assembled."
                label-for="description"
              >
                <b-form-input
                  v-model="descriptionComputed"
                  required
                  @input="setSerchMeta($event, 'description')"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>

          <!-- Customer Info -->
          <div class="card mt-3 section_mod-2">
            <div class="card-body">
              <div class="ui-subtitle-block">YOUR INFO</div>
              <h2 class="ui-title-block">About You</h2>
              <div class="border-color border-color_default"></div>
              <b-row>
                <b-col>
                  <b-form-group label="Name" label-for="customerInfoName">
                    <b-form-input
                      v-model="customerInfoNameComputed"
                      required
                      @input="setSerchMeta($event, 'customerInfoName')"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Email" label-for="customerInfoEmail">
                    <b-form-input
                      v-model="customerInfoEmailComputed"
                      type="email"
                      required
                      @input="setSerchMeta($event, 'customerInfoEmail')"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    label="Phone Number"
                    label-for="customerInfoPhone"
                  >
                    <b-form-input
                      v-model="customerInfoPhoneComputed"
                      required
                      @input="setSerchMeta($event, 'customerInfoPhone')"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
          </div>

          <!-- Where you're moving? -->
          <div class="card mt-3 section_mod-2 ">
            <div class="card-body">
              <div class="ui-subtitle-block">
                COLLECTION, DELIVERY AND WAYPOINTS ADDRESSES
              </div>
              <h2 class="ui-title-block">Where You're Moving?</h2>
              <div class="border-color border-color_default"></div>
              <b-row>
                <b-col md>
                  <b-row>
                    <b-col md>
                      <b-form-group>
                        <gmap-autocomplete
                          class="form-control"
                          placeholder="Collection Address"
                          :value="collectionPlaceObject.address"
                          required
                          @place_changed="setCollectionPlace"
                        ></gmap-autocomplete>
                      </b-form-group>
                    </b-col>
                    <b-col md>
                      <b-form-group>
                        <b-form-select
                          :value="collectionPlaceObject.stairs"
                          :options="stairsOptions"
                          required
                          @input="setStairs($event, 'collection')"
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
                          required
                          @place_changed="setDeliveryPlace"
                        ></gmap-autocomplete>
                      </b-form-group>
                    </b-col>
                    <b-col md>
                      <b-form-group>
                        <b-form-select
                          :value="deliveryPlaceObject.stairs"
                          :options="stairsOptions"
                          required
                          @input="setStairs($event, 'delivery')"
                        ></b-form-select>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-button class="mb-3" @click.prevent="addEmptyWayPoint">
                    +
                    <fa :icon="['fas', 'map-marker-alt']" />
                    Add Waypoint
                  </b-button>
                  <div
                    v-for="(wayPointPlacesObjectSingle,
                    index) in wayPointPlacesObject"
                    :key="index"
                  >
                    <b-row>
                      <b-col md>
                        <div class="input-group mb-3">
                          <gmap-autocomplete
                            :value="wayPointPlacesObject[index].address"
                            class="form-control"
                            placeholder="Waypoint Address"
                            required
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
                      </b-col>
                      <b-col md>
                        <b-form-group>
                          <b-form-select
                            :value="wayPointPlacesObject[index].stairs"
                            :options="stairsOptions"
                            required
                            @input="setStairs($event, 'waypoint', index)"
                          ></b-form-select>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
                <b-col md>
                  <b-button
                    v-if="
                      collectionPlaceObject.address &&
                        deliveryPlaceObject.address
                    "
                    variant="primary"
                    @click="getDirection"
                  >
                    <fa :icon="['fas', 'route']" />
                    Check Direction
                  </b-button>
                  <!-- Map -->
                  <gmap-map
                    v-show="showMap"
                    ref="mapDir"
                    class="mt-2"
                    :center="center"
                    :zoom="15"
                    style="width: 100%; height: 300px"
                  ></gmap-map>
                </b-col>
              </b-row>
            </div>
          </div>

          <!-- Total Time -->
          <div class="card mt-3 section_mod-2">
            <div class="card-body">
              <div class="ui-subtitle-block">
                NUMBER OF REQUIRED HOURS FOR THE THE MOVE TO BE COMPLETED
              </div>
              <h2 class="ui-title-block">
                How Many Hours Do You Want The Vehicle For?
              </h2>
              <div class="border-color border-color_default"></div>
              <div class="row">
                <div class="col-xs-12 col-sm-1">
                  <p>Est:</p>
                </div>

                <div class="col-xs-12 col-sm-3">
                  <p>
                    <fa :icon="['fas', 'road']" />
                    Travel time:
                    <strong>
                      <span id="estimated-driving-time">
                        {{ searchMetaObject.travelTime | timeInHoursMinutes }}
                      </span>
                    </strong>
                  </p>
                </div>

                <div class="col-xs-12 col-sm-5">
                  <p>
                    <fa :icon="['fas', 'truck-loading']" />
                    Loading and unloading time:
                    <strong>
                      <span id="estimated-loading-time">
                        {{
                          searchMetaObject.loadingUnloadingTime
                            | timeInHoursMinutes
                        }}
                      </span>
                    </strong>
                  </p>
                </div>

                <div class="col-xs-12 col-sm-3">
                  <p>
                    <fa :icon="['fas', 'clock']" />
                    Total time:
                    <strong>
                      <span class="estimated-total-time">
                        {{
                          searchMetaObject.estimatedTotalTime
                            | timeInHoursMinutes
                        }}
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <b-form-group>
                <b-form-select
                  v-model="totalTimeComputed"
                  :options="totalTimeOptions"
                  required
                  @input="setSerchMeta($event, 'totalTime')"
                ></b-form-select>
              </b-form-group>
            </div>
          </div>

          <!-- Notification -->
          <div class="card mt-3 section_mod-2 ">
            <div class="card-body">
              <div class="ui-subtitle-block">CHOOSE VEHICLE SIZE</div>
              <h2 class="ui-title-block">Notify Me</h2>
              <div class="border-color border-color_default"></div>
              <b-form-group
                label="We'd love to keep in touch about this move by email and text message."
              >
                <b-form-radio-group
                  v-model="notificationComputed"
                  :options="notificationOptions"
                  class="theme-green"
                  required
                  @input="setSerchMeta($event, 'notification')"
                ></b-form-radio-group>
              </b-form-group>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md></b-col>
        <b-col md>
          <div class="card mt-3 section_mod-2 mb-3">
            <b-button block type="submit" size="lg">
              Get My Free Quotes
            </b-button>
          </div>
        </b-col>
        <b-col md></b-col>
      </b-row>
    </form>
  </b-container>
</template>
<script>
/* global google */
export default {
  data() {
    return {
      vanSizeComputed: null,
      helpersRequiredComputed: null,
      movingDateComputed: null,
      descriptionComputed: null,
      customerInfoNameComputed: null,
      customerInfoEmailComputed: null,
      customerInfoPhoneComputed: null,
      totalTimeComputed: null,
      notificationComputed: null,
      vanSizeOptions: [
        { text: 'Small Van', value: '1' },
        { text: 'Medium Van', value: '2' },
        { text: 'Large Van', value: '3' },
        { text: 'Giant Van', value: '4' }
      ],
      helpersRequiredOptions: [
        { text: 'No help needed', value: '0' },
        { text: 'Driver helping', value: '1' },
        { text: 'Driver helping + 1 helper', value: '2' },
        { text: 'Driver helping + 2 helpers', value: '3' }
      ],
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
      notificationOptions: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' }
      ],
      // Map Data
      showMap: true,
      center: {
        lat: 51.507441,
        lng: -0.1277
      },

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
    },
    searchData() {
      return {
        collection: this.collectionPlaceObject,
        delivery: this.deliveryPlaceObject,
        waypoints: this.wayPointPlacesObject,
        vanSize: this.searchMetaObject.vanSize,
        movingDate: this.searchMetaObject.movingDate,
        helpersRequired: this.searchMetaObject.helpersRequired,
        description: this.searchMetaObject.description,
        customerInfoName: this.searchMetaObject.customerInfoName,
        customerInfoEmail: this.searchMetaObject.customerInfoEmail,
        customerInfoPhone: this.searchMetaObject.customerInfoPhone,
        notification: this.searchMetaObject.notification,
        loadingUnloadingTime: this.searchMetaObject.loadingUnloadingTime,
        travelTime: this.searchMetaObject.travelTime,
        totalTime: this.searchMetaObject.totalTime,
        milesDriven: this.searchMetaObject.milesDriven,
        stairsTime: this.searchMetaObject.stairsTime,
        estimatedTotalTime: this.searchMetaObject.estimatedTotalTime,
        weekDay: this.searchMetaObject.weekDay
      }
    },
    getUTCPlusTimeOffset() {
      const d = new Date()
      const n = d.getTimezoneOffset()
      let offset = ''
      if (n < 0) {
        offset = 'UTC+' + (-1 * n) / 60
      } else if (n < 0) {
        offset = 'UTC-' + n / 60
      } else {
        offset = 'UTC'
      }
      return offset
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
    this.vanSizeComputed = this.searchMetaObject.vanSize
    this.helpersRequiredComputed = this.searchMetaObject.helpersRequired
    this.movingDateComputed = this.searchMetaObject.movingDate
    this.descriptionComputed = this.searchMetaObject.description
    this.customerInfoNameComputed = this.searchMetaObject.customerInfoName
    this.customerInfoEmailComputed = this.searchMetaObject.customerInfoEmail
    this.customerInfoPhoneComputed = this.searchMetaObject.customerInfoPhone
    this.totalTimeComputed = this.searchMetaObject.totalTime
    this.notificationComputed = this.searchMetaObject.notification
  },
  methods: {
    async setSerchMeta(event, value) {
      const metaObject = {
        [value]: event
      }
      await this.$store.dispatch('search/setSearchMetaValue', metaObject)
      if (value === 'movingDate') {
        const metaObjectWeekday = {
          weekDay: this.isoStringToDate(event).getDay()
        }
        await this.$store.dispatch(
          'search/setSearchMetaValue',
          metaObjectWeekday
        )
      }
    },
    async setStairs(event, locationType, index = null) {
      const placeArray = [event, locationType, index]
      await this.$store.dispatch('places/setStairsPlaces', placeArray)
      const metaObject = {
        stairsTime: this.getStairsTime()
      }
      await this.$store.dispatch('search/setSearchMetaValue', metaObject)
    },

    getStairsTime() {
      let collectionStairsTime = 0
      if (this.collectionPlaceObject.stairs < 9) {
        collectionStairsTime = this.collectionPlaceObject.stairs * 15
      } else {
        collectionStairsTime = 10
      }
      let deliveryStairsTime = 0
      if (this.deliveryPlaceObject.stairs < 9) {
        deliveryStairsTime = this.deliveryPlaceObject.stairs * 15
      } else {
        deliveryStairsTime = 10
      }
      let waypointStairsTime = 0
      if (this.wayPointPlacesObject.length >= 0) {
        for (let i = 0; this.wayPointPlacesObject.length > i; i++) {
          if (this.wayPointPlacesObject[i].stairs < 9) {
            waypointStairsTime =
              this.wayPointPlacesObject[i].stairs * 15 + waypointStairsTime
          } else {
            waypointStairsTime = 10 + waypointStairsTime
          }
        }
      }

      return (
        (collectionStairsTime + deliveryStairsTime + waypointStairsTime) * 60
      )
    },

    async onSubmit() {
      const responseData = await this.$axios
        .$post('/places', this.searchData)
        .then(function(response) {
          // handle success
          return response
        })
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch('search-result/setSearchResult', responseData)
      this.$router.push('/my-quotes')
    }
  }
}
</script>
