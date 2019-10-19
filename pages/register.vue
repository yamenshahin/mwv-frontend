<template>
  <div class="container section_mod-2">
    <h2 class="ui-title-block">Register</h2>
    <div class="border-color border-color_default"></div>
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
