<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <img class="navbar-logo" src="~/assets/images/logo.png" />
    <nuxt-link to="/" class="navbar-brand" exact>MovingVan</nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link to="/" class="nav-link" role="menuitem" exact>
          Home
        </nuxt-link>
        <nuxt-link to="/my-move" class="nav-link" role="menuitem" exact>
          My Move
        </nuxt-link>

        <nuxt-link to="/my-quotes" class="nav-link" role="menuitem" exact>
          My Quotes
        </nuxt-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <nuxt-link
          v-if="!authenticated"
          to="/login"
          class="nav-link"
          role="menuitem"
        >
          Login
        </nuxt-link>
        <nuxt-link
          v-if="!authenticated"
          to="/register"
          class="nav-link"
          role="menuitem"
        >
          Register
        </nuxt-link>

        <b-nav-item-dropdown v-if="authenticated" right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <em>My Account</em>
          </template>
          <b-dropdown-item href="#">{{ user.name }}</b-dropdown-item>
          <nuxt-link to="/profile" class="dropdown-item" role="menuitem">
            Profile
          </nuxt-link>
          <b-dropdown-item @click.prevent="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
