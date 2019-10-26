<template>
  <b-container>
    <no-ssr>
      <b-navbar toggleable="lg" type="light">
        <nuxt-link to="/" class="navbar-brand" exact>
          <img class="navbar-logo" src="~/assets/images/logo-moveman-YB.png" />
        </nuxt-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <nuxt-link to="/" class="nav-link" role="menuitem" exact>
              Home
            </nuxt-link>
            <nuxt-link to="/my-move" class="nav-link" role="menuitem" exact>
              Move
            </nuxt-link>
            <nuxt-link to="/my-quotes" class="nav-link" role="menuitem" exact>
              Quotes
            </nuxt-link>
            <nuxt-link
              v-if="authenticated"
              to="/checkout"
              class="nav-link"
              role="menuitem"
              exact
            >
              Checkout
            </nuxt-link>
            <nuxt-link
              v-if="authenticated"
              to="/my-jobs"
              class="nav-link"
              role="menuitem"
              exact
            >
              Jobs
            </nuxt-link>
            <nuxt-link
              to="/area-we-cover"
              class="nav-link"
              role="menuitem"
              exact
            >
              Area We Cover
            </nuxt-link>
            <!-- Driver nav items -->
            <span v-if="authenticated">
              <b-nav-item
                v-if="user.role !== 'driver'"
                href="#"
                @click.prevent="setRole('driver')"
              >
                Join Us
              </b-nav-item>
            </span>

            <nuxt-link
              v-if="!authenticated"
              to="/driver/join"
              class="nav-link"
              role="menuitem"
              exact
            >
              Join Us
            </nuxt-link>
            <span v-if="authenticated">
              <b-nav-item-dropdown v-if="user.role === 'driver'" right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content">
                  <em>Driver</em>
                </template>
                <nuxt-link
                  to="/driver/my-base"
                  class="nav-link"
                  role="menuitem"
                  exact
                >
                  My Base
                </nuxt-link>
                <nuxt-link
                  to="/driver/jobs"
                  class="nav-link"
                  role="menuitem"
                  exact
                >
                  Driver Jobs
                </nuxt-link>
              </b-nav-item-dropdown>
            </span>
            <span v-else></span>
            <nuxt-link
              v-if="!authenticated"
              to="/login"
              class="nav-link"
              role="menuitem"
            >
              Login
            </nuxt-link>
            <span v-else></span>
            <nuxt-link
              v-if="!authenticated"
              to="/register"
              class="nav-link"
              role="menuitem"
            >
              Register
            </nuxt-link>
            <span v-else></span>
            <b-nav-item-dropdown v-if="authenticated" right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>My Account</em>
              </template>
              <b-dropdown-item href="#">{{ user.name }}</b-dropdown-item>
              <b-dropdown-item @click.prevent="logout">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <span v-else></span>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </no-ssr>
  </b-container>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push('/')
    },
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
