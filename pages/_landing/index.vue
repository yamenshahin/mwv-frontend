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
import DriverSlider from '~/components/landing/DriverSlider.vue'
import MainSlider from '~/components/landing/MainSlider.vue'
import WorkSteps from '~/components/landing/WorkSteps.vue'
import Statistics from '~/components/landing/Statistics.vue'
import UnderStatistics from '~/components/landing/UnderStatistics.vue'
import DriverBanner from '~/components/landing/DriverBanner.vue'
import About from '~/components/landing/About.vue'
import TrustBox from '~/components/landing/TrustBox.vue'
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
      ],
      link: [
        {
          rel: 'canonical',
          href: this.canonical
        }
      ]
    }
  },
  data() {
    return {
      slug: this.$route.params.landing,
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
      .catch()
    return {
      pageTitle: pageHTML.data.meta.pageTitle,
      pageDescription: pageHTML.data.meta.pageDescription,
      canonical: pageHTML.data.meta.canonical
    }
  },
  created() {
    this.getPage()
  },
  methods: {
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
        .catch()
      await this.$store.dispatch('landing-html/setLandingHtml', pageHTML)
    }
  }
}
</script>
