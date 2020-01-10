<template>
  <div
    class="main-under-statistics section-default triagl triagl-top triagl-top_mod-b"
  >
    <b-container>
      <b-row>
        <b-col md>
          <div class="mt-100 d-none d-md-block"></div>
          <div class="section_mod-2">
            <h2 class="ui-title-block">
              {{ ukHtmlObject.meta.underStatisticsTitle }}
            </h2>
            <div class="border-color border-color_default"></div>
            <span v-html="ukHtmlObject.meta.underStatisticsText"></span>
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
            <div class="pt-5"></div>
            <no-ssr>
              <youtube
                class="video-container"
                :player-vars="{ autoplay: 0 }"
                :player-width="640"
                :player-height="360"
                :video-id="videoId"
                @ready="ready"
              />
            </no-ssr>
            <!-- <img
              src="~assets/images/service_3.jpg"
              alt="WORLD CLASS LOGISTIC SERVICES"
              class="img-fluid"
            /> -->
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
