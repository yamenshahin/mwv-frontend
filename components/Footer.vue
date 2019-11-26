<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col>
          <div class="copyright text-center">
            <span>
              © Copyrights 2019
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
        <b-col>
          <!--Start of Tawk.to Script-->
          <script type="text/javascript">
            var Tawk_API = Tawk_API || {},
              Tawk_LoadStart = new Date()
            ;(function() {
              var s1 = document.createElement('script'),
                s0 = document.getElementsByTagName('script')[0]
              s1.async = true
              s1.src = 'https://embed.tawk.to/5dc8ae2243be710e1d1ca625/default'
              s1.charset = 'UTF-8'
              s1.setAttribute('crossorigin', '*')
              s0.parentNode.insertBefore(s1, s0)
            })()
          </script>
          <!--End of Tawk.to Script-->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
