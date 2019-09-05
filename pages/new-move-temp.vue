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
          <input
            id="collectionPostcode"
            v-model="collectionAddress.postcode"
            type="hidden"
          />

          <input
            id="collectionStreetAddress"
            v-model="collectionAddress.streetAddress"
            type="hidden"
          />

          <input
            id="collectionCity"
            v-model="collectionAddress.city"
            type="hidden"
          />
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
          <input
            id="deliveryPostcode"
            v-model="deliveryAddress.postcode"
            type="hidden"
          />

          <input
            id="deliveryStreetAddress"
            v-model="deliveryAddress.streetAddress"
            type="hidden"
          />

          <input
            id="deliveryCity"
            v-model="deliveryAddress.city"
            type="hidden"
          />

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
            >Save</b-button
          >
          <b-button type="submit" variant="primary" @click.prevent="onSearch"
            >Search</b-button
          >
          <b-button
            type="submit"
            variant="primary"
            @click.prevent="onFillAdress"
            >Fill Adress</b-button
          >
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0"
            >{{ job_metas }}{{ notification }}{{ collectionAddress
            }}{{ deliveryAddress }}{{ customerInfo }} {{ moveDateTime }}</pre
          >
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
            value: this.collectionAddress.postcode
          },
          {
            key: 'collectionStreetAddress',
            value: this.collectionAddress.streetAddress
          },
          {
            key: 'collectionCity',
            value: this.collectionAddress.city
          },
          {
            key: 'collectionStairs',
            value: this.collectionAddress.stairs
          },
          {
            key: 'deliveryPostcode',
            value: this.deliveryAddress.postcode
          },
          {
            key: 'deliveryStreetAddress',
            value: this.deliveryAddress.streetAddress
          },
          {
            key: 'deliveryCity',
            value: this.deliveryAddress.city
          },
          {
            key: 'deliveryStairs',
            value: this.deliveryAddress.stairs
          },
          /* {
            key: 'travelTime',
            value: this.travelTime
          },
          {
            key: 'totalTime',
            value: this.totalTime
          }, */
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
        collectionPostcode: this.collectionAddress.postcode,
        collectionStreetAddress: this.collectionAddress.streetAddress,
        collectionCity: this.collectionAddress.city,
        collectionLat: '-33.826201',
        collectionLng: '150.895271',
        collectionStairs: this.collectionAddress.stairs,
        // Delivery
        deliveryPostcode: this.deliveryAddress.postcode,
        deliveryStreetAddress: this.deliveryAddress.streetAddress,
        deliveryCity: this.deliveryAddress.city,
        deliveryLat: '-33.826201',
        deliveryLng: '150.895271',
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
    setCollectionPlace(collectionPlace) {
      this.collectionPlace = collectionPlace
    },
    setDeliveryPlace(deliveryPlace) {
      this.deliveryPlace = deliveryPlace
    },
    async onSearch() {
      await this.$store.dispatch(
        'places/setCollectionPlace',
        this.collectionPlace
      )
      await this.$store.dispatch('places/setDeliveryPlace', this.deliveryPlace)
      this.$router.push('/search-quotes')
    },
    onFillAdress() {}
  }
}
</script>
