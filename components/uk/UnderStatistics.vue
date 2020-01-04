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
            <div class="mt-2"></div>
            <img
              src="~assets/images/service_3.jpg"
              alt="WORLD CLASS LOGISTIC SERVICES"
              class="img-fluid"
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
