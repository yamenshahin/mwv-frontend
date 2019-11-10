<template>
  <div class="area-we-cover-page">
    <h1 class="ui-title-page">FAQ</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2">
      <b-row>
        <b-col>
          <span v-html="dynamicHTML.faqText"></span>
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
      title: 'FAQ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'FAQ description'
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
        page: 'faq',
        faqText: ''
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
