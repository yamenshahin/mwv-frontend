<template>
  <div class="area-we-cover-page">
    <h1 class="ui-title-page">Privacy policy</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          Privacy policy
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
      title: 'Privacy policy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Privacy policy description'
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
