<template>
  <div class="container">
    <h1>Hello New Move</h1>
    <template>
      <div>
        <b-form @submit.prevent="onSubmit" @search.prevent="onSearch">
          <b-form-group label="Van Size">
            <b-form-radio-group
              id="vanSize"
              v-model="job_metas.vanSize"
              :options="vanSizeOptions"
              name="van-size"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group label="Van Size">
            <b-form-radio-group
              id="helpersRequired"
              v-model="job_metas.helpersRequired"
              :options="helpersRequiredOptions"
              name="helpers_required"
            ></b-form-radio-group>
          </b-form-group>

          <h2>Collection Address</h2>

          <b-form-group label="Postcode" label-for="collectionPostcode">
            <b-form-input
              id="collectionPostcode"
              v-model="collectionAddress.postcode"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Street Address"
            label-for="collectionStreetAddress"
          >
            <b-form-input
              id="collectionStreetAddress"
              v-model="collectionAddress.streetAddress"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="City" label-for="collectionCity">
            <b-form-input
              id="collectionCity"
              v-model="collectionAddress.city"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="At my collection address there">
            <b-form-select
              id="collectionStairs"
              v-model="collectionAddress.stairs"
              :options="stairsOptions"
              name="collection_stairs"
            ></b-form-select>
          </b-form-group>

          <h2>Delivery Address</h2>

          <b-form-group label="Postcode" label-for="deliveryPostcode">
            <b-form-input
              id="deliveryPostcode"
              v-model="deliveryAddress.postcode"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Street Address"
            label-for="deliveryStreetAddress"
          >
            <b-form-input
              id="deliveryStreetAddress"
              v-model="deliveryAddress.streetAddress"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="City" label-for="deliveryCity">
            <b-form-input
              id="deliveryCity"
              v-model="deliveryAddress.city"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="At my delivery address there">
            <b-form-select
              id="deliveryStairs"
              v-model="deliveryAddress.stairs"
              :options="stairsOptions"
              name="delivery_stairs"
            ></b-form-select>
          </b-form-group>

          <h2>When you're moving</h2>

          <datetime
            v-model="moveDateTime"
            type="datetime"
            use12-hour
          ></datetime>

          <h2>Note</h2>

          <b-form-group
            label="Please enter a brief description of the items you will be moving and any additional contact numbers. Please also let us know if you need any items assembled or re-assembled."
            label-for="description"
          >
            <b-form-input id="description" v-model="description"></b-form-input>
          </b-form-group>

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

          <b-button type="search" variant="danger">Get My Free Quotes</b-button>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0"
            >{{ job_metas }}{{ notification }}{{ collectionAddress
            }}{{ deliveryAddress }}{{ customerInfo }} {{ moveDateTime }}</pre
          >
        </b-card>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveDateTime: '',
      job_metas: {},
      collectionAddress: {},
      deliveryAddress: {},
      description: '',
      customerInfo: {},
      notification: '',
      vanSizeOptions: [
        { text: 'Small Van', value: 'vanSizeSmall' },
        { text: 'Medium Van', value: 'vanSizeMedium' },
        { text: 'Large van', value: 'vanSizeLarg' },
        { text: 'Giant van', value: 'vanSizeGiant' }
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
        { text: 'is a lift', value: 'lift' }
      ],
      notificationOptions: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' }
      ]
    }
  },
  methods: {
    async onSubmit() {
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
    }
  }
}
</script>
