<template>
  <div class="faq-page">
    <h1 class="ui-title-page">Tutorial</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          <youtube
            class="video-container"
            :player-vars="{ autoplay: 0 }"
            :player-width="640"
            :player-height="360"
            :video-id="videoId"
            @ready="ready"
          />
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
      title:
        'Tutorial | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tutorial  | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  },
  components: {
    EmptySpace
  },
  data() {
    return {
      videoId: 'zL2AvIPWSxs'
    }
  },
  mounted() {},
  created() {},
  methods: {}
}
</script>
