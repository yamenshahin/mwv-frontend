<template>
  <div>
    <b-form v-if="!authenticated" @submit.prevent="onSubmit">
      <b-form-group id="input-group-1" label="Full Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter your full name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter your email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Password Confirmation:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.password_confirmation"
          type="password"
          required
          placeholder="Confirm password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    async onSubmit(evt) {
      await this.$axios.$post('register', this.form)
      await this.$auth.loginWith('local', {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      })

      this.$router.push('/')
    }
  }
}
</script>
