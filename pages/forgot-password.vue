<template>
  <div class="container section_mod-2">
    <h2 class="ui-title-block">Forgot Password</h2>
    <div class="border-color border-color_default"></div>
    <ForgotPasswordForm />
  </div>
</template>

<script>
import ForgotPasswordForm from '~/components/ForgotPasswordForm.vue'

export default {
  middleware: ['guest'],
  components: {
    ForgotPasswordForm
  },
  head() {
    return {
      title:
        'Login | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Forgot Password | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  }
}
</script>
