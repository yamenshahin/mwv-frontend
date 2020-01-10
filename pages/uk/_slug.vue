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
    DriverSlider: () => import('~/components/uk/DriverSlider'),
    MainSlider: () => import('~/components/uk/MainSlider'),
    WorkSteps: () => import('~/components/uk/WorkSteps'),
    Statistics: () => import('~/components/uk/Statistics'),
    UnderStatistics: () => import('~/components/uk/UnderStatistics'),
    DriverBanner: () => import('~/components/uk/DriverBanner'),
    About: () => import('~/components/uk/About'),
    TrustBox: () => import('~/components/uk/TrustBox')
  },
  head() {
    // console.log('this.pageTitle', this.pageTitle)
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
      slug: this.$route.params.slug,
      showLazyLoad: false,
      category: 'uk'
    }
  },
  async asyncData({ $axios, route }) {
    const pageHTML = await $axios
      .post('/dynamic-pages', {
        slug: route.params.slug,
        category: 'uk'
      })
      .then(function(response) {
        // handle success
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
    console.log('pageHTML', pageHTML)

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
        .$post('/dynamic-pages', { slug: this.slug, category: this.category })
        .then(function(response) {
          // handle success
          return response.data
        })
        .catch(function(error) {
          console.log(error)
        })
      await this.$store.dispatch('uk-html/setUkHtml', pageHTML)
    }
  }
}
</script>
