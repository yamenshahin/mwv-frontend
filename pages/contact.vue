<template>
  <div class="contact-page">
    <h1 class="ui-title-page">Contact</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          <b-form v-if="authenticated" @submit.prevent="onSubmit">
            <input v-model="form.name" type="hidden" name="name" />
            <input v-model="form.email" type="hidden" name="email" />
            <input v-model="form.phone" type="hidden" name="phone" />
            <input v-model="form.role" type="hidden" name="role" />

            <div class="form-group">
              <label>Subject:</label>
              <input
                v-model="form.subject"
                :class="{ 'is-invalid': form.errors.has('subject') }"
                type="text"
                name="subject"
                class="form-control"
                placeholder="Enter message subject"
              />
              <has-error :form="form" field="subject"></has-error>
            </div>

            <div class="form-group">
              <label>Message:</label>
              <textarea
                v-model="form.message"
                :class="{ 'is-invalid': form.errors.has('message') }"
                name="message"
                class="form-control"
                rows="3"
              ></textarea>
              <has-error :form="form" field="message"></has-error>
            </div>

            <b-button type="submit" variant="primary">Send</b-button>

            <alert-success :form="form" class="mt-2">
              Thank you! Your message has been sent successfully.
            </alert-success>
          </b-form>

          <b-form v-else @submit.prevent="onSubmit">
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
              <label>Subject:</label>
              <input
                v-model="form.subject"
                :class="{ 'is-invalid': form.errors.has('subject') }"
                type="text"
                name="subject"
                class="form-control"
                placeholder="Enter message subject"
              />
              <has-error :form="form" field="subject"></has-error>
            </div>

            <div class="form-group">
              <label>Message:</label>
              <textarea
                v-model="form.message"
                :class="{ 'is-invalid': form.errors.has('message') }"
                name="message"
                class="form-control"
                rows="3"
              ></textarea>
              <has-error :form="form" field="message"></has-error>
            </div>

            <b-button type="submit" variant="primary">Send</b-button>

            <alert-success :form="form" class="mt-2">
              Thank you! Your message has been sent successfully.
            </alert-success>
          </b-form>
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
        subject: '',
        message: ''
      })
    }
  },
  mounted() {
    if (this.authenticated) {
      this.form.name = this.user.name
      this.form.email = this.user.email
      this.form.phone = this.user.phone
      this.form.role = this.user.role
    }
  },
  methods: {
    async onSubmit() {
      await this.form
        .post('user/email/send')
        .then(function(response) {
          // handle success
          // console.log(response)
        })
        .catch(() => {})
    }
  }
}
</script>
