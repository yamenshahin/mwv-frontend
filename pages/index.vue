<template>
  <div class="page-index mb-5">
    <h1>Stage</h1>
    <DriverSlider />
    <MainSlider />
    <div v-observe-visibility="lazyload" class="any">
      <div v-if="showLazyLoad">
        <WorkSteps />
        <TrustBox />
        <Statistics />
        <UnderStatistics />
        <DriverBanner />
        <About />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    DriverSlider: () => import('~/components/index/DriverSlider'),
    MainSlider: () => import('~/components/index/MainSlider'),
    WorkSteps: () => import('~/components/index/WorkSteps'),
    Statistics: () => import('~/components/index/Statistics'),
    UnderStatistics: () => import('~/components/index/UnderStatistics'),
    DriverBanner: () => import('~/components/index/DriverBanner'),
    About: () => import('~/components/index/About'),
    TrustBox: () => import('~/components/index/TrustBox')
  },
  head() {
    return {
      title:
        'Hello Vans | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Hello Vans  | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  },
  data() {
    return {
      showLazyLoad: false
    }
  },
  created() {
    this.getPage()
  },
  methods: {
    lazyload(isVisible, entry) {
      this.showLazyLoad = isVisible
    },
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
    }
  }
}
</script>
