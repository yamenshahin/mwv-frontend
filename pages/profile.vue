<template>
  <div class="profile-page">
    <h1 class="ui-title-page">Profile</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          <b-form v-if="authenticated" @submit.prevent="onSubmit">
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
                placeholder="Enter new password"
              />
              <has-error :form="form" field="password"></has-error>
            </div>

            <div class="form-group">
              <label>Password Confirmation:</label>
              <input
                v-model="form.password_confirmation"
                :class="{
                  'is-invalid': form.errors.has('password_confirmation')
                }"
                type="password"
                name="password_confirmation"
                class="form-control"
                placeholder="Confirm password"
              />
              <has-error :form="form" field="password_confirmation"></has-error>
            </div>

            <b-button type="submit" variant="primary">Submit</b-button>
            <alert-success :form="form" class="mt-2">Saved</alert-success>
          </b-form>
          <span v-else></span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EmptySpace from '~/components/EmptySpace.vue'
export default {
  head() {
    return {
      title:
        'Profile | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Profile  | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  },
  components: {
    EmptySpace
  },
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
  mounted() {
    this.form.name = this.user.name
    this.form.email = this.user.email
    this.form.phone = this.user.phone
  },
  methods: {
    async onSubmit() {
      const newUser = await this.form
        .post('user/update')
        .then(function(response) {
          // handle success
          return response.data.data
        })
        .catch(() => {})
      // this.$store.dispatch('auth/updateUser', newUser)
      if (typeof newUser !== 'undefined') {
        this.$store.dispatch('auth/updateUser', newUser)
      }
    }
  }
}
</script>
