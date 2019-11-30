<template>
  <div>
    <b-form v-if="!authenticated" @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Email:</label>
        <input
          v-model="form.email"
          type="email"
          name="email"
          class="form-control"
          placeholder="Enter your email"
          :class="{ 'is-invalid': form.errors.has('email') }"
        />
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
        <has-error :form="form" field="email"></has-error>
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input
          v-model="form.password"
          type="password"
          name="password"
          class="form-control"
          placeholder="Enter password"
          :class="{ 'is-invalid': form.errors.has('password') }"
        />
        <has-error :form="form" field="password"></has-error>
      </div>

      <div class="form-group">
        <label>Password Confirmation:</label>
        <input
          v-model="form.password_confirmation"
          type="password"
          name="password_confirmation"
          class="form-control"
          placeholder="Confirm password"
          :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
        />
        <has-error :form="form" field="password_confirmation"></has-error>
      </div>

      <input v-model="form.token" type="hidden" name="token" />

      <b-button type="submit" variant="primary">Reset Password</b-button>
    </b-form>
    <span v-else></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$vform({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
      })
    }
  },
  methods: {
    async onSubmit() {
      await this.form
        .post('register')
        .then(() => {
          this.$auth.loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          })
          this.$router.push('/')
        })
        .catch(() => {})
    }
  }
}
</script>
