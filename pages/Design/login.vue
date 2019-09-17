<template>
  <div class="container">
    <h1>Hello login</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'

export default {
  middleware: ['guest'],
  components: {
    LoginForm
  }
}
</script>
