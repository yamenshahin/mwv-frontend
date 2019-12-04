<template>
  <div class="terms-and-conditions-page">
    <h1 class="ui-title-page">Terms and Conditions</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          <span v-html="dynamicHTML.termsText"></span>
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
      title: 'Terms And Conditions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Terms And Conditions description'
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
        page: 'terms',
        termsText: ''
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
      this.dynamicHTML = pageHTML
    }
  }
}
</script>
