<template>
  <div class="faq-page">
    <h1 class="ui-title-page">Tutorial</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          <b-alert show variant="primary">
            <h4 class="alert-heading mt-2">
              Learn how you can get quotes and book the best van for your next
              move.
            </h4>
          </b-alert>
          <no-ssr>
            <youtube
              :player-vars="{ autoplay: 0 }"
              :player-width="640"
              :player-height="360"
              :video-id="videoId"
              class="video-container"
            />
          </no-ssr>
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
