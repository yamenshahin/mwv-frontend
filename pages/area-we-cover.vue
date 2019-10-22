<template>
  <div class="area-we-cover-page">
    <h1 class="ui-title-page">Area We Cover</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          <GmapMap
            v-show="showMap"
            ref="mapDir"
            class="mt-2"
            :center="mapCenter"
            :zoom="6"
            style="width: 100%; height: 700px"
          >
            <div v-for="area in areasObject" :key="area.index">
              <GmapCircle
                :center="area.center"
                :radius="area.distance * 1609.344"
                :visible="true"
                :options="{
                  strokeWeight: '1',
                  strokeColor: '#ffd526',
                  fillColor: '#26c9ff',
                  fillOpacity: 0.5
                }"
              ></GmapCircle>
            </div>
          </GmapMap>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EmptySpace from '~/components/EmptySpace.vue'
export default {
  head() {
    return {
      title: 'Area We Cover',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Area We Cover description'
        }
      ]
    }
  },
  components: {
    EmptySpace
  },
  data() {
    return {
      showMap: true,
      mapCenter: {
        lat: 54.3780518,
        lng: -3.4359729
      },
      shoppingItems: [
        { name: 'apple', price: '10' },
        { name: 'orange', price: '12' }
      ]
    }
  },
  async beforeMount() {
    const areas = await this.$axios
      .get('/places/all')
      .then(function(response) {
        // handle success
        return response.data.data
      })
      .catch(function(error) {
        console.log(error)
      })
    this.$store.dispatch('area/setAreas', areas)
  }
}
</script>
