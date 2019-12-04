<template>
  <div class="container section_mod-2">
    <div class="ui-subtitle-block">ARE YOU A GREAT DRIVER?</div>
    <h2 class="ui-title-block">Join Us</h2>
    <div class="border-color border-color_default"></div>
    <b-alert show variant="primary" class="mt-3">
      <h4 class="alert-heading mt-2">
        Are you a Great Moving provider?
      </h4>
      <p>
        Do you provide Man with a van? Join us and receive confirmed booked jobs
        to your mobile and email.
      </p>
      <p>
        We only accept experienced, reliable, Insured Man with a van provider,
        If you meet the criteria then please fill in the form and login to your
        account to complete your profile.
      </p>
      <p>
        We will then contact you for further details, once your account is
        approved then you can start receiving booked jobs.
      </p>
    </b-alert>
    <RegisterFormDriver />
  </div>
</template>

<script>
import RegisterFormDriver from '~/components/RegisterFormDriver.vue'

export default {
  middleware: ['guest'],
  components: {
    RegisterFormDriver
  },
  head() {
    return {
      title:
        'Join | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Join | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  }
}
</script>
