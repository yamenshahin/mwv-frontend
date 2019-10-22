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
      title: 'Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Login description'
        }
      ]
    }
  }
}
</script>
