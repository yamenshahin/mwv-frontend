<template>
  <div class="main-driver-banner">
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
                      v-html="homeHtmlObject.driverBannerTitle"
                      class="ui-subtitle-block"
                    ></div>
                    <span v-html="homeHtmlObject.driverBannerText"></span>
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

    <div v-if="!authenticated">
      <div class="section_banner">
        <b-container>
          <b-row>
            <b-col>
              <div class="mt-50"></div>
              <div class="banner">
                <div class="banner__inner">
                  <div
                    v-html="homeHtmlObject.driverBannerTitle"
                    class="ui-subtitle-block"
                  ></div>
                  <span v-html="homeHtmlObject.driverBannerText"></span>
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
  </div>
</template>
<script>
export default {
  methods: {
    async setRole(role) {
      await this.$axios
        .post('/set-role', {
          role
        })
        .then(function(response) {
          // handle success
          return response
        })
        .catch()
      await this.$store.dispatch('auth/setRole', role)
      this.$router.push('/driver/my-base')
    }
  }
}
</script>
