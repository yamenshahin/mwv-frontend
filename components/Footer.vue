<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col>
          <div class="copyright text-center">
            <span>
              © Copyrights 2019
              <strong>VanMan.io</strong>
            </span>
            <span>All Rights Reserved.</span>
          </div>
          <div class="legal-links text-center">
            <nuxt-link to="/terms-of-service" role="menuitem" exact>
              Terms of service
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
    </b-container>
  </div>
</template>
