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
                      <h2 class="ui-subtitle-block">
                        To Get More Jobs By Setting Your Base Information Now
                      </h2>
                      <p>
                        By setting you base information you will receive
                        confirmed bookings direct to your phone and email and
                        will appear in search for quotes results.
                      </p>
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
