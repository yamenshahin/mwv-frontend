<template>
  <div class="section_block-contacts triagl triagl_mod-c triagl-top">
    <b-container>
      <b-row>
        <b-col md>
          <div class="block-contacts__item">
            <div class="block-contacts__title">
              <fa :icon="['fas', 'clock']" />
              OPEN 7 DAYS A WEEK
            </div>

            <div class="block-contacts__text">
              Hello Vans, Richmond road Studios
              <br />
              Richmond road, Uk, KT2 5Bx
            </div>
            <!-- <div class="block-contacts__text">9:00 AM to 7:00 PM</div> -->
          </div>
          <div class="block-contacts__item">
            <div class="block-contacts__title">CHAT</div>
            <div class="block-contacts__text">24/7</div>
          </div>
        </b-col>
        <b-col md class="text-center">
          <ul class="social-links  list-inline">
            <li class="social-links__item list-inline-item">
              <a class="social-links__link">
                <fa :icon="['fab', 'twitter']" />
              </a>
            </li>
            <li class="social-links__item list-inline-item">
              <a class="social-links__link">
                <fa :icon="['fab', 'facebook-f']" />
              </a>
            </li>
            <li class="social-links__item list-inline-item">
              <a class="social-links__link">
                <fa :icon="['fab', 'google-plus-g']" />
              </a>
            </li>
            <li class="social-links__item list-inline-item">
              <a class="social-links__link">
                <fa :icon="['fab', 'linkedin-in']" />
              </a>
            </li>
            <li class="social-links__item list-inline-item">
              <a class="social-links__link">
                <fa :icon="['fab', 'pinterest-p']" />
              </a>
            </li>
          </ul>
        </b-col>
        <b-col md class="text-right">
          <a href="tel:02036338267">
            <div class="block-contacts__phone">
              020 3633 8267
              <fa :icon="['fas', 'phone-square-alt']" />
            </div>
          </a>
          <div class="block-contacts__text">
            Ask Questions or Need a Free Estimate?
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
