<template>
  <div class="container section_mod-2">
    <h2 class="ui-title-block">Login</h2>
    <div class="border-color border-color_default"></div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'

export default {
  middleware: ['guest'],
  components: {
    LoginForm
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
            'Login  | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  }
}
</script>
