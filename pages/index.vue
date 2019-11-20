<template>
  <div class="page-index mb-5">
    <button @click="show = true">Load Tooltip</button>
    <div v-if="show">
      <DriverSlider />
    </div>
    <div v-if="show">
      <MainSlider />
    </div>

    <WorkSteps />
    <TrustBox />
    <Statistics />
    <UnderStatistics />
    <DriverBanner />
    <About />
  </div>
</template>

<script>
import WorkSteps from '~/components/index/WorkSteps'
import Statistics from '~/components/index/Statistics'
import UnderStatistics from '~/components/index/UnderStatistics'
import DriverBanner from '~/components/index/DriverBanner'
import About from '~/components/index/About'
import TrustBox from '~/components/index/TrustBox'

export default {
  components: {
    DriverSlider: () => import('~/components/index/DriverSlider'),
    MainSlider: () => import('~/components/index/MainSlider'),

    WorkSteps,
    Statistics,
    UnderStatistics,
    DriverBanner,
    About,
    TrustBox
  },
  data() {
    return {
      show: false
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
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch('home-html/setHomeHtml', pageHTML)
      this.dynamicHTML = pageHTML
    }
  }
}
</script>
