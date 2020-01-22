<template>
  <div class="page-my-base">
    <h1 class="ui-title-page">My Base</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <div class="container section_mod-2">
      <no-ssr>
        <div v-if="firstEnter"></div>
        <div v-else>
          <form @submit.prevent="onSubmit">
            <b-row>
              <b-col>
                <b-card>
                  <b-card-body>
                    <b-row>
                      <b-col>
                        <div>
                          <div class="driver-info">
                            <h2 class="ui-title-block">
                              Your Professional Info
                            </h2>
                            <div
                              class="border-color border-color_default"
                            ></div>
                          </div>
                          <b-form-group
                            label="Please give a brief description about the service you provide"
                            description="150 characters max"
                          >
                            <b-form-textarea
                              :value="driverPlaceLegalObject.disc"
                              @input="setDriverPlaceLegal($event, 'disc')"
                              type="text"
                              required
                              maxlength="150"
                            ></b-form-textarea>
                          </b-form-group>

                          <b-form-group label="Vehicle registration">
                            <b-form-input
                              :value="
                                driverPlaceLegalObject.vehicleRegistration
                              "
                              @input="
                                setDriverPlaceLegal(
                                  $event,
                                  'vehicleRegistration'
                                )
                              "
                              type="text"
                              required
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group label="Driving licence number">
                            <b-form-input
                              :value="
                                driverPlaceLegalObject.drivingLicenceNumber
                              "
                              @input="
                                setDriverPlaceLegal(
                                  $event,
                                  'drivingLicenceNumber'
                                )
                              "
                              type="text"
                              required
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group label="Your business image">
                            <b-form-file
                              ref="fileInput"
                              v-model="file"
                              @change="btnToggle"
                              placeholder="Choose a file or drop it here..."
                              drop-placeholder="Drop file here..."
                              class="mb-2"
                            ></b-form-file>
                          </b-form-group>

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
              <b-col>
                <b-alert show variant="primary" class="mt-3">
                  <p class="mt-2">
                    Below are prices per hour, we have options for different
                    type of vans, small, medium, large, Giant vans.
                  </p>
                  <p>
                    <b>Note:</b>
                    We have two hours minimum charge and each quote is based on
                    two hours, there is also price per mile applied for the
                    distance travelled between pick up and delivery. We
                    recommend £1 per mile. However, its entirely up to you what
                    price you set.
                  </p>
                </b-alert>
              </b-col>
            </b-row>
            <b-row>
              <b-col md>
                <b-card title="Small Van" class="mt-1">
                  <b-card-body>
                    <b-row>
                      <b-col>
                        <b-form-group
                          label="Weekday customer loading"
                          description="Minimum: £10.00"
                        >
                          <b-form-input
                            :value="driverPlacePriceObject.priceSmallVanWeekday"
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceSmallVanWeekday'
                              )
                            "
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
                            :value="driverPlacePriceObject.priceSmallVanWeekend"
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceSmallVanWeekend'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceSmallVanWeekday1
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceSmallVanWeekday1'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceSmallVanWeekend1
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceSmallVanWeekend1'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceSmallVanWeekday2
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceSmallVanWeekday2'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceSmallVanWeekend2
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceSmallVanWeekend2'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceSmallVanWeekday3
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceSmallVanWeekday3'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceSmallVanWeekend3
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceSmallVanWeekend3'
                              )
                            "
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
                            :value="driverPlacePriceObject.priceMidVanWeekday"
                            @input="
                              setDriverPlacePrice($event, 'priceMidVanWeekday')
                            "
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
                            :value="driverPlacePriceObject.priceMidVanWeekend"
                            @input="
                              setDriverPlacePrice($event, 'priceMidVanWeekend')
                            "
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
                            :value="driverPlacePriceObject.priceMidVanWeekday1"
                            @input="
                              setDriverPlacePrice($event, 'priceMidVanWeekday1')
                            "
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
                            :value="driverPlacePriceObject.priceMidVanWeekend1"
                            @input="
                              setDriverPlacePrice($event, 'priceMidVanWeekend1')
                            "
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
                            :value="driverPlacePriceObject.priceMidVanWeekday2"
                            @input="
                              setDriverPlacePrice($event, 'priceMidVanWeekday2')
                            "
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
                            :value="driverPlacePriceObject.priceMidVanWeekend2"
                            @input="
                              setDriverPlacePrice($event, 'priceMidVanWeekend2')
                            "
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
                            :value="driverPlacePriceObject.priceMidVanWeekday3"
                            @input="
                              setDriverPlacePrice($event, 'priceMidVanWeekday3')
                            "
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
                            :value="driverPlacePriceObject.priceMidVanWeekend3"
                            @input="
                              setDriverPlacePrice($event, 'priceMidVanWeekend3')
                            "
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
                            :value="driverPlacePriceObject.priceLargeVanWeekday"
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceLargeVanWeekday'
                              )
                            "
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
                            :value="driverPlacePriceObject.priceLargeVanWeekend"
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceLargeVanWeekend'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceLargeVanWeekday1
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceLargeVanWeekday1'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceLargeVanWeekend1
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceLargeVanWeekend1'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceLargeVanWeekday2
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceLargeVanWeekday2'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceLargeVanWeekend2
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceLargeVanWeekend2'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceLargeVanWeekday3
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceLargeVanWeekday3'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceLargeVanWeekend3
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceLargeVanWeekend3'
                              )
                            "
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
                            :value="driverPlacePriceObject.priceGiantVanWeekday"
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceGiantVanWeekday'
                              )
                            "
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
                            :value="driverPlacePriceObject.priceGiantVanWeekend"
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceGiantVanWeekend'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceGiantVanWeekday1
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceGiantVanWeekday1'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceGiantVanWeekend1
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceGiantVanWeekend1'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceGiantVanWeekday2
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceGiantVanWeekday2'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceGiantVanWeekend2
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceGiantVanWeekend2'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceGiantVanWeekday3
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceGiantVanWeekday3'
                              )
                            "
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
                            :value="
                              driverPlacePriceObject.priceGiantVanWeekend3
                            "
                            @input="
                              setDriverPlacePrice(
                                $event,
                                'priceGiantVanWeekend3'
                              )
                            "
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
                <b-card class="mt-3">
                  <b-card-body>
                    <div class="driver-info">
                      <h2 class="ui-title-block">
                        Charges Related To The Journey
                      </h2>
                      <div class="border-color border-color_default"></div>
                    </div>
                    <b-form-group
                      label="Your fee for stopping at Via addresses on route to destination"
                      description="Minimum: £1.00"
                    >
                      <b-form-input
                        :value="driverPlacePriceObject.priceStop"
                        @input="setDriverPlacePrice($event, 'priceStop')"
                        step="0.01"
                        min="1"
                        type="number"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Your charge per flight of stairs"
                      description="Minimum: £1.00"
                    >
                      <b-form-input
                        :value="driverPlacePriceObject.priceStairs"
                        @input="setDriverPlacePrice($event, 'priceStairs')"
                        step="0.01"
                        min="1"
                        type="number"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Your mileage charge per mile"
                      description="Minimum: £0.6"
                    >
                      <b-form-input
                        :value="driverPlacePriceObject.priceMile"
                        @input="setDriverPlacePrice($event, 'priceMile')"
                        step="0.01"
                        min="0.6"
                        type="number"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <b-card class="mt-3">
                  <b-card-body>
                    <div class="driver-info">
                      <h2 class="ui-title-block">
                        Service Area
                      </h2>
                      <div class="border-color border-color_default"></div>
                    </div>
                    <b-alert show variant="primary" class="mt-3">
                      <p class="mt-2">
                        This is the coverage area you can cover from your base
                        post code, This should be for local jobs and its your
                        responsibility to attend jobs booked on your account
                        within the coverage area, Our recommended coverage is 20
                        miles from base
                      </p>
                    </b-alert>
                    <b-row>
                      <b-col>
                        <b-form-group label="Base address">
                          <gmap-autocomplete
                            :value="driverPlaceLocationObject.address"
                            @place_changed="setDriverPlaceLocation"
                            class="form-control"
                            required
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
                            @input="setDistance($event)"
                            type="number"
                            min="0"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <GmapMap
                      ref="mapDir"
                      v-show="showMap"
                      :center="mapCenter"
                      :zoom="7"
                      class="mt-2"
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
              <b-col>
                <b-card class="mt-3">
                  <b-card-body>
                    <b-row>
                      <b-col>
                        <div>
                          <div class="driver-info">
                            <h2 class="ui-title-block">
                              Drivers Terms and Conditions
                            </h2>
                            <div
                              class="border-color border-color_default"
                            ></div>
                          </div>
                          <b-form-group
                            label="Do you accept Drivers Terms and Conditions?"
                          >
                            <b-form-checkbox
                              v-model="statusDTAC"
                              name="DTAC"
                              value="accepted"
                              unchecked-value="not_accepted"
                              required
                            >
                              I accept the
                              <nuxt-link
                                to="/driver-terms-and-conditions"
                                exact
                              >
                                Drivers Terms and Conditions
                              </nuxt-link>
                            </b-form-checkbox>
                          </b-form-group>
                        </div>
                      </b-col>
                    </b-row>
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
      statusDTAC: 'accepted',
      showMap: true,
      file: null,
      btnDisabled: true,
      btnSubmitDisabled: true,
      firstEnter: true
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
          that.$store.dispatch(
            'driver-place/setDriverPlaceFiles',
            response.data.data.url
          )
        })
        .catch(function(error) {
          console.log(error)
        })

      this.firstEnter = false
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
      if (this.file !== null) {
        const formData = new FormData()
        formData.append('file', this.file)
        formData.append('key', 'places')
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
