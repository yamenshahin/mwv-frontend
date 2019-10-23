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
                    <h2 class="ui-subtitle-block">
                      ARE YOU AN EXCELLENT DRIVER?
                    </h2>
                    <p>
                      Pellentesque habitant morbi tristique senectus sed neus
                      eft malesuada fames ac turpis egest as Aenean non tell
                    </p>
                  </div>
                  <a
                    href="#"
                    class="btn btn-secondary mb-1"
                    @click.prevent="setRole('driver')"
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

    <div v-if="!authenticated">
      <div class="section_banner">
        <b-container>
          <b-row>
            <b-col>
              <div class="mt-50"></div>
              <div class="banner">
                <div class="banner__inner">
                  <h2 class="ui-subtitle-block">
                    ARE YOU AN EXCELLENT DRIVER?
                  </h2>
                  <p>
                    Pellentesque habitant morbi tristique senectus sed neus eft
                    malesuada fames ac turpis egest as Aenean non tell
                  </p>
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
