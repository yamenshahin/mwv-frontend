<template>
  <div
    class="main-under-statistics section-default triagl triagl-top triagl-top_mod-b"
  >
    <b-container>
      <b-row>
        <b-col md>
          <div class="mt-100 d-none d-md-block"></div>
          <div class="section_mod-2">
            <div class="ui-subtitle-block">HOW WE CAN HELP YOU</div>
            <h2 class="ui-title-block">BEST MOVING COMPANY</h2>
            <div class="border-color border-color_default"></div>
            <p>
              Pellentesque habitant morbi tristique senectus sed neus eft
              malesuada fames ac turpis egest as Aenean non tell donec pede quam
              placerat ristique faucibus poserw aulet elobor justo. Quis que
              orci neque pellentesque.
            </p>
            <ul class="list-mark list-mark_small">
              <li class="list-mark__item">
                <a href="#" class="list-mark__link">
                  <i class="icon"></i>
                  About VanMan.io
                </a>
              </li>
              <li class="list-mark__item">
                <a href="#" class="list-mark__link">
                  <i class="icon"></i>
                  Residential Relocation
                </a>
              </li>
              <li class="list-mark__item">
                <a href="#" class="list-mark__link">
                  <i class="icon"></i>
                  Commercial Relocation
                </a>
              </li>
              <li class="list-mark__item">
                <a href="#" class="list-mark__link">
                  <i class="icon"></i>
                  Short-Term Storage
                </a>
              </li>
              <li class="list-mark__item">
                <a href="#" class="list-mark__link">
                  <i class="icon"></i>
                  Long-Term Storage
                </a>
              </li>
              <li class="list-mark__item">
                <a href="#" class="list-mark__link">
                  <i class="icon"></i>
                  Special Services
                </a>
              </li>
              <li class="list-mark__item">
                <a href="#" class="list-mark__link">
                  <i class="icon"></i>
                  Commercial Moving
                </a>
              </li>
              <li class="list-mark__item">
                <a href="#" class="list-mark__link">
                  <i class="icon"></i>
                  Big &amp; Large Move Experts
                </a>
              </li>
            </ul>
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
            <div class="ui-subtitle-block">We Provide</div>
            <h2 class="ui-title-block">WORLD CLASS LOGISTIC SERVICES</h2>
            <div class="border-color border-color_default"></div>
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
