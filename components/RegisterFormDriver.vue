<template>
  <div>
    <b-form v-if="!authenticated" @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name:</label>
        <input
          v-model="form.name"
          :class="{ 'is-invalid': form.errors.has('name') }"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter your full name"
        />
        <has-error :form="form" field="name"></has-error>
      </div>

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
        <label>Phone:</label>
        <input
          v-model="form.phone"
          :class="{ 'is-invalid': form.errors.has('phone') }"
          type="text"
          name="phone"
          class="form-control"
          placeholder="Enter your phone number"
        />
        <has-error :form="form" field="phone"></has-error>
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

      <input
        v-model="form.role"
        type="hidden"
        name="role"
        class="form-control"
      />
      <b-button type="submit" variant="primary">Register</b-button>
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
        password_confirmation: '',
        role: 'driver'
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
