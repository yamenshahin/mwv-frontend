<template>
  <div class="container">
    <h1>Hello New Move</h1>
    <template>
      <div>
        <b-form>
          <!-- Collection Address -->
          <h2>Collection Address</h2>
          <b-container class="collection-address-">
            <b-row>
              <b-col
                ><b-form-group label="Collection Address">
                  <gmap-autocomplete
                    class="form-control"
                    placeholder="Collection Address"
                    @place_changed="setCollectionPlace"
                  >
                  </gmap-autocomplete
                ></b-form-group>
              </b-col>
              <b-col
                ><b-form-group label="At my collection address there">
                  <b-form-select
                    id="collectionStairs"
                    v-model="collectionAddress.stairs"
                    :options="stairsOptions"
                    name="collection_stairs"
                  ></b-form-select> </b-form-group
              ></b-col>
            </b-row>
          </b-container>

          <!-- Delivery Address -->
          <h2>Delivery Address</h2>
          <b-container class="delivery-address-">
            <b-row>
              <b-col
                ><b-form-group label="Delivery Address">
                  <gmap-autocomplete
                    class="form-control"
                    placeholder="Delivery Address"
                    @place_changed="setDeliveryPlace"
                  >
                  </gmap-autocomplete
                ></b-form-group>
              </b-col>
              <b-col
                ><b-form-group label="At my delivery address there">
                  <b-form-select
                    id="deliveryStairs"
                    v-model="deliveryAddress.stairs"
                    :options="stairsOptions"
                    name="delivery_stairs"
                  ></b-form-select> </b-form-group
              ></b-col>
            </b-row>
          </b-container>

          <!-- Van Size -->
          <b-form-group label="Van Size">
            <b-form-radio-group
              id="vanSize"
              v-model="job_metas.vanSize"
              :options="vanSizeOptions"
              name="van-size"
            ></b-form-radio-group>
          </b-form-group>

          <!-- Helpers Required -->
          <b-form-group label="Helpers Required">
            <b-form-radio-group
              id="helpersRequired"
              v-model="job_metas.helpersRequired"
              :options="helpersRequiredOptions"
              name="helpers_required"
            ></b-form-radio-group>
          </b-form-group>

          <!-- Moving Date -->
          <h2>When you're moving</h2>

          <datetime
            v-model="moveDateTime"
            type="datetime"
            use12-hour
          ></datetime>

          <!-- Time -->
          <b-form-group label="I need the vehicle for">
            <b-form-select
              id="totalTime"
              v-model="totalTime"
              :options="totalTimeOptions"
              name="total_time"
            ></b-form-select>
          </b-form-group>

          <!-- Description -->
          <h2>Note</h2>

          <b-form-group
            label="Please enter a brief description of the items you will be moving and any additional contact numbers. Please also let us know if you need any items assembled or re-assembled."
            label-for="description"
          >
            <b-form-input id="description" v-model="description"></b-form-input>
          </b-form-group>

          <!-- Customer Info -->
          <h2>About you</h2>

          <b-form-group label="Name" label-for="customerInfoName">
            <b-form-input
              id="customerInfoName"
              v-model="customerInfo.name"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Email" label-for="customerInfoEmail">
            <b-form-input
              id="customerInfoEmail"
              v-model="customerInfo.email"
              type="email"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Phone Number" label-for="customerInfoPhone">
            <b-form-input
              id="customerInfoPhone"
              v-model="customerInfo.phone"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="We'd love to keep in touch about this move by email and text message."
          >
            <b-form-radio-group
              id="notification"
              v-model="notification"
              :options="notificationOptions"
              name="notification"
            ></b-form-radio-group>
          </b-form-group>

          <b-button type="submit" variant="danger" @click.prevent="onGetQuotes"
            >Get My Free Quotes</b-button
          >
          <b-button type="submit" variant="primary" @click.prevent="onSave"
            >Save as New Job</b-button
          >
          <b-button type="submit" variant="primary" @click.prevent="onSearch"
            >Search</b-button
          >
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0"
            >{{ job_metas }}{{ notification }}{{ collectionAddress
            }}{{ deliveryAddress }}{{ customerInfo }} {{ moveDateTime }}</pre
          >
        </b-card>
        <b-card class="mt-3" header="address_componentsResult">
          <pre v-if="collectionPlaceObject">{{
            collectionPlaceObject.lat
          }}</pre>
        </b-card>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ collectionPlace }}</pre>
        </b-card>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ deliveryPlace }}</pre>
        </b-card>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectionPlace: null,
      deliveryPlace: null,
      moveDateTime: '',
      job_metas: {},
      collectionAddress: {},
      deliveryAddress: {},
      totalTime: '',
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
      description: '',
      customerInfo: {},
      notification: '',
      vanSizeOptions: [
        { text: 'Small Van', value: '1' },
        { text: 'Medium Van', value: '2' },
        { text: 'Large van', value: '3' },
        { text: 'Giant van', value: '4' }
      ],
      helpersRequiredOptions: [
        { text: 'No help needed', value: '0' },
        { text: 'Driver helping', value: '1' },
        { text: 'Driver helping + 1 helper', value: '2' },
        { text: 'Driver helping + 2 helpers', value: '3' }
      ],
      stairsOptions: [
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
      notificationOptions: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' }
      ]
    }
  },
  methods: {
    async onSave() {
      await this.$axios.$post('jobs', {
        job_metas: [
          {
            key: 'vanSize',
            value: this.job_metas.vanSize
          },
          {
            key: 'helpersRequired',
            value: this.job_metas.helpersRequired
          },
          {
            key: 'collectionPostcode',
            value: this.collectionPlaceObject.postcode
          },
          {
            key: 'collectionStreetAddress',
            value: this.collectionPlaceObject.address
          },
          {
            key: 'collectionCity',
            value: this.collectionPlaceObject.city
          },
          {
            key: 'collectionLat',
            value: this.collectionPlaceObject.lat
          },
          {
            key: 'collectionLng',
            value: this.collectionPlaceObject.lng
          },
          {
            key: 'collectionStairs',
            value: this.collectionAddress.stairs
          },
          {
            key: 'deliveryPostcode',
            value: this.deliveryPlaceObject.postcode
          },
          {
            key: 'deliveryStreetAddress',
            value: this.deliveryPlaceObject.address
          },
          {
            key: 'deliveryCity',
            value: this.deliveryPlaceObject.city
          },
          {
            key: 'deliveryLat',
            value: this.deliveryPlaceObject.lat
          },
          {
            key: 'deliveryLng',
            value: this.deliveryPlaceObject.lng
          },
          {
            key: 'deliveryStairs',
            value: this.deliveryAddress.stairs
          },
          /* {
            key: 'travelTime',
            value: this.travelTime
          }, */
          {
            key: 'totalTime',
            value: this.totalTime
          },
          {
            key: 'moveDateTime',
            value: this.moveDateTime
          },
          {
            key: 'description',
            value: this.description
          },
          {
            key: 'customerInfoName',
            value: this.customerInfo.name
          },
          {
            key: 'customerInfoEmail',
            value: this.customerInfo.email
          },
          {
            key: 'customerInfoPhone',
            value: this.customerInfo.phone
          },
          {
            key: 'notification',
            value: this.notification
          }
        ]
      })
      this.$router.push('/')
    },
    async onGetQuotes() {
      await this.$axios.$post('places', {
        // Collection
        collectionPostcode: this.collectionPlaceObject.postcode,
        collectionStreetAddress: this.collectionPlaceObject.address,
        collectionCity: this.collectionPlaceObject.city,
        collectionLat: this.collectionPlaceObject.lat,
        collectionLng: this.collectionPlaceObject.lng,
        collectionStairs: this.collectionAddress.stairs,
        // Delivery
        deliveryPostcode: this.deliveryPlaceObject.postcode,
        deliveryStreetAddress: this.deliveryPlaceObject.address,
        deliveryCity: this.deliveryPlaceObject.city,
        deliveryLat: this.deliveryPlaceObject.lat,
        deliveryLng: this.deliveryPlaceObject.lng,
        deliveryStairs: this.deliveryAddress.stairs,
        // Customer Info
        customerInfoName: this.customerInfo.name,
        customerInfoEmail: this.customerInfo.email,
        customerInfoPhone: this.customerInfo.phone,
        // Customer choice
        vanSize: this.job_metas.vanSize,
        helpersRequired: this.job_metas.helpersRequired,
        movingDate: this.moveDateTime,
        totalTime: 4.5,
        description: this.description,
        notification: this.notification,
        // Calculated values
        travelTime: 1.5,
        weekDay: 'weekday',
        estimatedDistance: 10,
        estimatedDrivingTime: 10
      })
    },
    async setCollectionPlace(collectionPlace) {
      this.collectionPlace = collectionPlace
      await this.$store.dispatch(
        'places/setCollectionPlace',
        this.collectionPlace
      )
    },
    async setDeliveryPlace(deliveryPlace) {
      this.deliveryPlace = deliveryPlace
      await this.$store.dispatch('places/setDeliveryPlace', this.deliveryPlace)
    },
    async onSearch() {
      await this.$store.dispatch(
        'places/setCollectionPlace',
        this.collectionPlace
      )
      await this.$store.dispatch('places/setDeliveryPlace', this.deliveryPlace)
      this.$router.push('/search-quotes')
    }
  }
}
</script>
