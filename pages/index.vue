<template>
  <div class="page-index mb-5">
    <DriverSlider />
    <MainSlider />
    <WorkSteps />
    <TrustBox />
    <Statistics />
    <UnderStatistics />
    <DriverBanner />
    <About />
  </div>
</template>

<script>
import DriverSlider from '~/components/index/DriverSlider.vue'
import MainSlider from '~/components/index/MainSlider.vue'
import WorkSteps from '~/components/index/WorkSteps.vue'
import Statistics from '~/components/index/Statistics.vue'
import UnderStatistics from '~/components/index/UnderStatistics.vue'
import DriverBanner from '~/components/index/DriverBanner.vue'
import About from '~/components/index/About.vue'
import TrustBox from '~/components/index/TrustBox.vue'
export default {
  components: {
    DriverSlider,
    MainSlider,
    WorkSteps,
    Statistics,
    UnderStatistics,
    DriverBanner,
    About,
    TrustBox
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pageDescription
        }
      ]
    }
  },
  data() {
    return {}
  },
  async asyncData({ $axios, route }) {
    const pageHTML = await $axios
      .$post('/pages', { page: 'home' })
      .then(function(response) {
        // handle success
        return response
      })
      .catch()
    return {
      pageTitle: pageHTML.pageTitle,
      pageDescription: pageHTML.pageDescription
    }
  },
  created() {
    this.getPage()
  },
  methods: {
    async getPage() {
      const pageHTML = await this.$axios
        .$post('/pages', { page: this.homeHtmlObject.page })
        .then(function(response) {
          // handle success
          return response
        })
        .catch()
      await this.$store.dispatch('home-html/setHomeHtml', pageHTML)
    }
  }
}
</script>
