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
import DriverSlider from '~/components/index/DriverSlider'
import MainSlider from '~/components/index/MainSlider'
import WorkSteps from '~/components/index/WorkSteps'
import Statistics from '~/components/index/Statistics'
import UnderStatistics from '~/components/index/UnderStatistics'
import DriverBanner from '~/components/index/DriverBanner'
import About from '~/components/index/About'
import TrustBox from '~/components/index/TrustBox'

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
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch('home-html/setHomeHtml', pageHTML)
      this.dynamicHTML = pageHTML
    }
  }
}
</script>
