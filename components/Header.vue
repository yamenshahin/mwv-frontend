<template>
  <mq-layout mq="xl">
    <div class="header">
      <b-container>
        <b-row>
          <b-col md>
            <div class="slogan">UK’S MAN WITH A VAN QUOTE COMPARISON</div>
          </b-col>
          <b-col md>
            <div class="header__social text-center">
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
            </div>
          </b-col>
          <b-col md>
            <div class="header-contacts text-right">
              <a href="tel:02036338267">
                <fa :icon="['fas', 'phone-square-alt']" />
                020 3633 8267
              </a>
              <a href="mail:info@HelloVans.com">
                <fa :icon="['fas', 'envelope-square']" />
                info@HelloVans.com
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </mq-layout>
</template>
