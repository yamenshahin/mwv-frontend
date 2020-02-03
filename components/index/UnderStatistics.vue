<template>
  <div
    class="main-under-statistics section-default triagl triagl-top triagl-top_mod-b"
  >
    <b-container>
      <b-row>
        <b-col md>
          <div class="mt-100 d-none d-md-block"></div>
          <div class="section_mod-2">
            <div
              v-html="homeHtmlObject.underStatisticsTitle"
              class="ui-title-block"
            ></div>
            <div class="border-color border-color_default"></div>
            <span v-html="homeHtmlObject.underStatisticsText"></span>
            <nuxt-link to="/my-move" class="btn btn-secondary mb-1" exact>
              <fa :icon="['fas', 'shipping-fast']" />
              Get Free Quotes
            </nuxt-link>
            <nuxt-link to="/area-we-cover" class="btn btn-primary mb-1" exact>
              <fa :icon="['fas', 'map-marked-alt']" />
              Area We Cover
            </nuxt-link>
          </div>
        </b-col>
        <b-col md>
          <div class="mt-100 d-none d-md-block"></div>
          <div class="section_mod-2">
            <div
              v-html="homeHtmlObject.underStatisticsVideoTitle"
              class="ui-title-block"
            ></div>
            <div class="border-color border-color_default"></div>

            <youtube
              :player-vars="{ autoplay: 0 }"
              :player-width="640"
              :player-height="360"
              :video-id="videoId"
              class="video-container"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <mq-layout mq="lg+">
      <div class="mb-85"></div>
    </mq-layout>
    <mq-layout :mq="['sm', 'md']">
      <div class="mb-15"></div>
    </mq-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'zL2AvIPWSxs'
    }
  }
}
</script>
