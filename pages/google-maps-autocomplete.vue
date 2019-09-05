<template>
  <div class="container">
    <div>
      <h1>Google Maps Demo</h1>

      <h1>Autocomplete Example (#164)</h1>
      <label>
        AutoComplete
        <gmap-autocomplete
          placeholder="Collection"
          @place_changed="setCollectionPlace"
        >
        </gmap-autocomplete>
      </label>
      <br />
      <label>
        AutoComplete
        <gmap-autocomplete
          placeholder="Delivery"
          @place_changed="setDeliveryPlace"
        >
        </gmap-autocomplete>
      </label>
      <b-button type="submit" variant="primary" @click.prevent="onSearch"
        >Search</b-button
      >
      <br />
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ collectionPlace }}</pre>
      </b-card>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ deliveryPlace }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectionPlace: null,
      deliveryPlace: null
    }
  },
  methods: {
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
    }
  }
}
</script>
