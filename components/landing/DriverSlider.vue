<template>
  <div class="main-driver-banner">
    <no-ssr>
      <div v-if="authenticated">
        <div v-if="user.role === 'driver'">
          <div class="section_banner">
            <b-container>
              <b-row>
                <b-col>
                  <div class="mt-50"></div>
                  <div class="banner">
                    <div class="banner__inner">
                      <div
                        v-html="landingHtmlObject.meta.driverSliderTitle"
                        class="ui-subtitle-block"
                      ></div>
                      <span
                        v-html="landingHtmlObject.meta.driverSliderText"
                      ></span>
                    </div>
                    <nuxt-link
                      to="/driver/my-base"
                      class="btn btn-secondary mb-1"
                    >
                      Set Your Base Information
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
