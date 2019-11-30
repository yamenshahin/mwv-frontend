<template>
  <div class="page-my-base">
    <h1 class="ui-title-page">My Base</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <div class="container section_mod-2">
      <no-ssr>
        <form @submit.prevent="onSubmit">
          <b-row>
            <b-col>
              <b-card>
                <b-card-body>
                  <b-row>
                    <b-col>
                      <div>
                        <div class="driver-info">
                          <h2 class="ui-title-block">Your Professional Info</h2>
                          <div class="border-color border-color_default"></div>
                        </div>
                        <b-form-group
                          label="Describe your service"
                          description="150 characters max"
                        >
                          <b-form-textarea
                            type="text"
                            :value="driverPlaceLegalObject.disc"
                            required
                            maxlength="150"
                            @input="setDriverPlaceLegal($event, 'disc')"
                          ></b-form-textarea>
                        </b-form-group>

                        <b-form-group label="Vehicle registration">
                          <b-form-input
                            type="text"
                            :value="driverPlaceLegalObject.vehicleRegistration"
                            required
                            @input="
                              setDriverPlaceLegal($event, 'vehicleRegistration')
                            "
                          ></b-form-input>
                        </b-form-group>

                        <!-- <b-form-group label="National Insurance number">
                        <b-form-input
                          type="text"
                          :value="
                            driverPlaceLegalObject.nationalInsuranceNumber
                          "
                          required
                          @input="
                            setDriverPlaceLegal(
                              $event,
                              'nationalInsuranceNumber'
                            )
                          "
                        ></b-form-input>
                      </b-form-group> -->

                        <b-form-group label="Driving licence number">
                          <b-form-input
                            type="text"
                            :value="driverPlaceLegalObject.drivingLicenceNumber"
                            required
                            @input="
                              setDriverPlaceLegal(
                                $event,
                                'drivingLicenceNumber'
                              )
                            "
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group label="Your business image">
                          <b-form-file
                            ref="fileInput"
                            v-model="file"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                            class="mb-2"
                            @change="btnToggle"
                          ></b-form-file>
                        </b-form-group>

                        <!-- <b-button
                        class="mr-2"
                        :disabled="btnDisabled"
                        @click="handleFileUpload"
                      >
                        Upload
                      </b-button> -->
                        <p v-if="driverPlaceFilesObject.placeImageURL !== ''">
                          <img
                            :src="
                              driverPlaceFilesObject.baseUrl +
                                driverPlaceFilesObject.placeImageURL
                            "
                            alt="place-image"
                            class="img-fluid"
                          />
                        </p>
                      </div>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
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
                          @input="
                            setDriverPlacePrice($event, 'priceMidVanWeekday')
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
                          :value="driverPlacePriceObject.priceMidVanWeekend"
                          @input="
                            setDriverPlacePrice($event, 'priceMidVanWeekend')
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
      </no-ssr>
    </div>
  </div>
</template>

<script>
import EmptySpace from '~/components/EmptySpace.vue'

export default {
  middleware: ['auth'],
  components: {
    EmptySpace
  },
  head() {
    return {
      saveSuccess: false,
      title:
        'My Base | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'My Base  | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  },
  data() {
    return {
      showMap: true,
      file: null,
      btnDisabled: true,
      btnSubmitDisabled: true
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
    if (this.user.role === 'driver') {
      const responseDataPrice = await this.$axios
        .get('/driver/get-price')
        .then(function(response) {
          // handle success
          return response.data
        })
        .catch(function(error) {
          console.log(error)
        })
      let entries = Object.entries(responseDataPrice.data)
      for (let i = 0; i < entries.length; i++) {
        const metaObject = {
          [entries[i][0]]: entries[i][1]
        }
        this.$store.dispatch('driver-place/setDriverPlacePrice', metaObject)
      }

      const responseDataLegal = await this.$axios
        .get('/driver/get-legal')
        .then(function(response) {
          // handle success
          return response.data
        })
        .catch(function(error) {
          console.log(error)
        })
      entries = Object.entries(responseDataLegal.data)
      for (let i = 0; i < entries.length; i++) {
        const metaObject = {
          [entries[i][0]]: entries[i][1]
        }
        this.$store.dispatch('driver-place/setDriverPlaceLegal', metaObject)
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
      this.$store.dispatch(
        'driver-place/setDriverPlaceLocationFromDb',
        responseDataLocation
      )

      const that = this
      await this.$axios
        .post('/files/file-get', {
          key: 'places'
        })
        .then(function(response) {
          console.log(response.data.data.url)
          that.$store.dispatch(
            'driver-place/setDriverPlaceFiles',
            response.data.data.url
          )
        })
        .catch(function(error) {
          console.log(error)
        })
    } else {
      this.$router.push('/')
    }
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
    async setDriverPlaceLegal(event, stateName) {
      const metaObject = {
        [stateName]: event
      }
      await this.$store.dispatch('driver-place/setDriverPlaceLegal', metaObject)
    },
    async onSubmit() {
      const that = this
      this.handleFileUpload()
      const responseDataLegal = await this.$axios
        .post('/driver/create-update-legal', this.driverPlaceLegalObject)
        .then(function(response) {
          // handle success
          that.$bvToast.toast('Your base has been saved successfully.', {
            title: 'Base Saved',
            variant: 'success',
            solid: true
          })
          return response.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch(
        'driver-place/setDriverPlaceLegal',
        responseDataLegal
      )

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
    },
    async handleFileUpload() {
      // console.log(this.$refs.fileInput.$refs.input.files[0])

      if (this.file !== null) {
        const formData = new FormData()
        formData.append('file', this.file)
        formData.append('key', 'places')
        // formData.append('_method', 'PUT')
        const responseDataFiles = await this.$axios
          .$post('/files/user-file', formData)
          .then(function(response) {
            // handle success
            return response.data
          })
          .catch(function(error) {
            console.log(error)
          })
        await this.$store.dispatch(
          'driver-place/setDriverPlaceFiles',
          responseDataFiles.url
        )
      }
    },
    btnToggle() {
      if (this.file !== '') {
        this.btnDisabled = false
      }
    }
  }
}
</script>
