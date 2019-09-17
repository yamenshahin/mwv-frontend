<template>
  <div class="container">
    <h1>Hello register</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '~/components/RegisterForm.vue'

export default {
  middleware: ['guest'],
  components: {
    RegisterForm
  }
}
</script>
