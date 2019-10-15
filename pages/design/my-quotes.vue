<template>
  <div class="page-my-quotes">
    <h1 class="ui-title-page">Quotes Results</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container>
      <div class="search-results">
        <div class="card mt-3">
          <div class="card-body section_mod-2">
            <div class="desktop d-none d-md-block">
              <b-row>
                <b-col cols="2">
                  <img
                    src="http://127.0.0.1:8000/storage/user-files/2019/10/nafW5WbwHWsvUI3aBn4KgYVwVSlSpz9JqmGEGCGL.png"
                    alt="place-image"
                    class="img-fluid"
                  />
                </b-col>
                <b-col cols="10">
                  <b-row>
                    <b-col>
                      <h2 class="ui-title-block">
                        Sammy's North London Logistics
                        <b-badge variant="warning">Gold</b-badge>
                      </h2>
                      <div class="border-color border-color_default"></div>
                      <div class="driver-desc">
                        <p>
                          ** I DO NOT TRANSPORT PIANOS ** ** ONLY MOVES 50 MILES
                          AWAY FROM LONDON ** specialist moving company based in
                          London, offering fast home and office removals
                          services.
                        </p>
                      </div>
                      <b-row>
                        <b-col>
                          <b-button
                            variant="primary"
                            disabled
                            class="disabled-alt"
                          >
                            <fa :icon="['fas', 'star']" />
                            <fa :icon="['fas', 'star']" />
                            <fa :icon="['fas', 'star']" />
                            <fa :icon="['fas', 'star']" />
                            <fa :icon="['fas', 'star-half']" />
                          </b-button>
                          <b-button
                            variant="primary"
                            disabled
                            class="disabled-alt"
                          >
                            <fa :icon="['fas', 'thumbs-up']" />
                            109 Reviews
                          </b-button>
                          <b-button
                            variant="primary"
                            disabled
                            class="disabled-alt"
                          >
                            <fa :icon="['fas', 'shipping-fast']" />
                            170 Jobs
                          </b-button>
                          <b-button
                            variant="primary"
                            disabled
                            class="disabled-alt"
                          >
                            <fa :icon="['fas', 'gas-pump']" />
                            3k Miles driven
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col>
                      <b-row>
                        <b-col class="text-right">
                          <h3>Total £50.44</h3>
                          <p>Includes VAT &amp; booking fee</p>
                          <p>
                            For the first
                            <strong>1.5 hours</strong>
                            and then
                            <strong>
                              £7
                            </strong>
                            per half hour
                          </p>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <b-button variant="dark" block class="lg mb-1">
                            <fa :icon="['fas', 'calendar-check']" />
                            Book Now
                          </b-button>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col xl>
                          <b-button block class="mb-1">
                            <fa :icon="['fas', 'share']" />
                            Email Qoute
                          </b-button>
                        </b-col>
                        <b-col xl>
                          <b-button block class="mb-1">
                            <fa :icon="['fas', 'tags']" />
                            Price Breakdown
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>

            <div class="mobile d-block d-md-none d-lg-none d-xl-none">
              <b-row>
                <b-col cols="2">
                  <img
                    src="http://127.0.0.1:8000/storage/user-files/2019/10/nafW5WbwHWsvUI3aBn4KgYVwVSlSpz9JqmGEGCGL.png"
                    alt="place-image"
                    class="img-fluid"
                  />
                </b-col>
                <b-col cols="10">
                  <b-row>
                    <b-col>
                      <b-button variant="dark" block class="lg mb-1">
                        <fa :icon="['fas', 'calendar-check']" />
                        Book Now
                      </b-button>
                      <div class="text-right">
                        <h3>Total £50.44</h3>
                        <p>Includes VAT &amp; booking fee</p>
                        <p>
                          For the first
                          <strong>1.5 hours</strong>
                          and then
                          <strong>
                            £7
                          </strong>
                          per half hour
                        </p>
                      </div>
                      <h2 class="ui-title-block">
                        Sammy's North London Logistics
                        <b-badge variant="warning">Gold</b-badge>
                      </h2>
                      <div class="border-color border-color_default"></div>
                      <div class="driver-desc">
                        <p>
                          ** I DO NOT TRANSPORT PIANOS ** ** ONLY MOVES 50 MILES
                          AWAY FROM LONDON ** specialist moving company based in
                          London, offering fast home and office removals
                          services.
                        </p>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'star']" />
                          <fa :icon="['fas', 'star']" />
                          <fa :icon="['fas', 'star']" />
                          <fa :icon="['fas', 'star']" />
                          <fa :icon="['fas', 'star-half']" />
                        </b-button>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'thumbs-up']" />
                          109 Reviews
                        </b-button>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'shipping-fast']" />
                          170 Jobs
                        </b-button>
                        <b-button
                          variant="primary"
                          disabled
                          class="disabled-alt"
                        >
                          <fa :icon="['fas', 'gas-pump']" />
                          3k Miles driven
                        </b-button>
                        <b-button block class="mb-1">
                          <fa :icon="['fas', 'share']" />
                          Email Qoute
                        </b-button>
                        <b-button block class="mb-1">
                          <fa :icon="['fas', 'tags']" />
                          Price Breakdown
                        </b-button>
                      </div>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import EmptySpace from '~/components/EmptySpace.vue'
export default {
  components: {
    EmptySpace
  }
}
</script>
