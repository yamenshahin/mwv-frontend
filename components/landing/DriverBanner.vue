<template>
  <div class="main-driver-banner">
    <no-ssr>
      <div v-if="authenticated">
        <div v-if="user.role !== 'driver'">
          <div class="section_banner">
            <b-container>
              <b-row>
                <b-col>
                  <div class="mt-50"></div>
                  <div class="banner">
                    <div class="banner__inner">
                      <div
                        v-html="landingHtmlObject.meta.driverBannerTitle"
                        class="ui-subtitle-block"
                      ></div>
                      <span
                        v-html="landingHtmlObject.meta.driverBannerText"
                      ></span>
                    </div>
                    <a
                      @click.prevent="setRole('driver')"
                      href="#"
                      class="btn btn-secondary mb-1"
                    >
                      Apply As A Driver Now
                    </a>
                  </div>
                  <div class="mt-50"></div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
      <span v-else></span>
    </no-ssr>
    <no-ssr>
      <div v-if="!authenticated">
        <div class="section_banner">
          <b-container>
            <b-row>
              <b-col>
                <div class="mt-50"></div>
                <div class="banner">
                  <div class="banner__inner">
                    <div
                        v-html="landingHtmlObject.meta.driverBannerTitle"
                        class="ui-subtitle-block"
                      ></div>
                      <span
                        v-html="landingHtmlObject.meta.driverBannerText"
                      ></span>
                  </div>
                  <nuxt-link
                    to="/driver/join"
                    class="btn btn-secondary mb-1"
                    exact
                  >
                    Apply As A Driver Now
                  </nuxt-link>
                </div>
                <div class="mt-50"></div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <span v-else></span>
    </no-ssr>
  </div>
</template>
<script>
export default {
  methods: {
    async setRole(role) {
      console.log(role)
      await this.$axios
        .post('/set-role', {
          role
        })
        .then(function(response) {
          // handle success
          return response
        })
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch('auth/setRole', role)
      this.$router.push('/driver/my-base')
    }
  }
}
</script>
