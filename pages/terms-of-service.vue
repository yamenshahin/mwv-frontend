<template>
  <div class="area-we-cover-page">
    <h1 class="ui-title-page">Terms of service</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          Terms of service
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
      title: 'Terms of service',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Terms of service description'
        }
      ]
    }
  },
  components: {
    EmptySpace
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
