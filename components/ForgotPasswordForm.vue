<template>
  <div>
    <b-form v-if="!authenticated" @submit.prevent="onSubmit">
      <alert-success :form="form" class="mt-2">
        {{ message }}
      </alert-success>
      <alert-error :form="form" class="mt-2">
        There were some problems with your email address.
      </alert-error>
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

      <b-button type="submit" variant="primary">
        Send Me Link to Reset My Password
      </b-button>
    </b-form>
    <span v-else></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$vform({
        email: ''
      }),
      message: ''
    }
  },
  methods: {
    async onSubmit() {
      const that = this
      await this.form
        .post('/forget')
        .then(function(response) {
          that.message = response.data.message
        })
        .catch(() => {})
    }
  }
}
</script>
