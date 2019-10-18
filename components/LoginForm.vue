<template>
  <div>
    <b-form v-if="!authenticated" @submit.prevent="onSubmit">
      <b-alert :show="showError" variant="danger">{{ errorText }}</b-alert>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errorText: '',
      showError: false
    }
  },
  methods: {
    async onSubmit() {
      await this.$auth
        .loginWith('local', {
          data: this.form
        })
        .then(() => {
          this.showError = false
          this.$router.push('/')
        })
        .catch(() => {
          this.errorText = 'Wrong details'
          this.showError = true
        })
    }
  }
}
</script>
