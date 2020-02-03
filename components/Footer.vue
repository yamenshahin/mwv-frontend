<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col>
          <div class="copyright text-center">
            <span>
              © Copyrights 2020
              <strong>HelloVans.com</strong>
            </span>
            <span>All Rights Reserved.</span>
          </div>
          <div class="legal-links text-center">
            <nuxt-link to="/terms-and-conditions" role="menuitem" exact>
              Terms and Conditions
            </nuxt-link>
            <nuxt-link
              to="/privacy-policy"
              role="menuitem"
              exact
              class="last-item"
            >
              Privacy policy
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
