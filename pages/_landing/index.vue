<template>
  <div class="page-index mb-5">
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
    DriverSlider: () => import('~/components/landing/DriverSlider'),
    MainSlider: () => import('~/components/landing/MainSlider'),
    WorkSteps: () => import('~/components/landing/WorkSteps'),
    Statistics: () => import('~/components/landing/Statistics'),
    UnderStatistics: () => import('~/components/landing/UnderStatistics'),
    DriverBanner: () => import('~/components/landing/DriverBanner'),
    About: () => import('~/components/landing/About'),
    TrustBox: () => import('~/components/landing/TrustBox')
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
    return {
      slug: this.$route.params.landing,
      showLazyLoad: false,
      parentSlug: 'index'
    }
  },
  async asyncData({ $axios, route }) {
    const pageHTML = await $axios
      .post('/dynamic-pages', {
        slug: route.params.landing,
        parentSlug: 'index'
      })
      .then(function(response) {
        // handle success
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
    return {
      pageTitle: pageHTML.data.meta.pageTitle,
      pageDescription: pageHTML.data.meta.pageDescription
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
        .$post('/dynamic-pages', {
          slug: this.slug,
          parentSlug: this.parentSlug
        })
        .then(function(response) {
          // handle success
          return response.data
        })
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch('landing-html/setLandingHtml', pageHTML)
    }
  }
}
</script>
