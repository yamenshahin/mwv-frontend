<template>
  <div class="container section_mod-2">
    <div class="ui-subtitle-block">ARE YOU A GREAT DRIVER?</div>
    <h2 class="ui-title-block">Join Us</h2>
    <div class="border-color border-color_default"></div>
    <RegisterFormDriver />
  </div>
</template>

<script>
import RegisterFormDriver from '~/components/RegisterFormDriver.vue'

export default {
  middleware: ['guest'],
  components: {
    RegisterFormDriver
  }
}
</script>
