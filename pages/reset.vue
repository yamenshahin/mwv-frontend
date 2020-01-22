<template>
  <div class="container section_mod-2">
    <h2 class="ui-title-block">Reset Password</h2>
    <div class="border-color border-color_default"></div>
    <b-form @submit.prevent="onSubmit">
      <alert-success :form="form" class="mt-2">
        {{ message }}
        <nuxt-link to="/login">
          Login Now
        </nuxt-link>
      </alert-success>
      <alert-error :form="form" class="mt-2">
        There were some problems with your input.
      </alert-error>
      <div class="form-group">
        <label>Email:</label>
        <input
          v-model="form.email"
          :class="{ 'is-invalid': form.errors.has('email') }"
          type="email"
          name="email"
          class="form-control"
          placeholder="Enter your email"
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
          :class="{ 'is-invalid': form.errors.has('password') }"
          type="password"
          name="password"
          class="form-control"
          placeholder="Enter password"
        />
        <has-error :form="form" field="password"></has-error>
      </div>

      <div class="form-group">
        <label>Password Confirmation:</label>
        <input
          v-model="form.password_confirmation"
          :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
          type="password"
          name="password_confirmation"
          class="form-control"
          placeholder="Confirm password"
        />
        <has-error :form="form" field="password_confirmation"></has-error>
      </div>

      <input v-model="form.token" type="hidden" name="token" />

      <b-button type="submit" variant="primary">Reset Password</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        'Reset Password | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Reset Password | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  },
  data() {
    return {
      form: this.$vform({
        email: '',
        password: '',
        password_confirmation: '',
        token: ''
      }),
      message: ''
    }
  },
  created() {
    this.form.token = this.$route.query.token
    this.form.email = this.$route.query.email
  },
  methods: {
    async onSubmit() {
      const that = this
      await this.form
        .post('/reset')
        .then(function(response) {
          that.message = response.data.message
        })
        .catch(() => {})
    }
  }
}
</script>
