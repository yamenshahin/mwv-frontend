<template>
  <div class="privacy-policy-page">
    <h1 class="ui-title-page">Privacy policy</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          <b-tabs content-class="mt-3">
            <b-tab title="Privacy policy" active>
              <span v-html="dynamicHTML.privacyText"></span>
            </b-tab>
            <b-tab title="Cancelation Policy">
              <span v-html="dynamicHTML.cancelationText"></span>
            </b-tab>
          </b-tabs>
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
      title: 'Privacy policy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Privacy policy description'
        }
      ]
    }
  },
  components: {
    EmptySpace
  },
  data() {
    return {
      dynamicHTML: {
        page: 'privacy',
        privacyText: '',
        cancelationText: ''
      }
    }
  },
  mounted() {},
  created() {
    this.getPage()
  },
  methods: {
    async getPage() {
      const pageHTML = await this.$axios
        .$post('/pages', { page: this.dynamicHTML.page })
        .then(function(response) {
          // handle success
          return response
        })
        .catch(function(error) {
          console.log(error)
        })
      console.log(pageHTML)
      this.dynamicHTML = pageHTML
    }
  }
}
</script>
