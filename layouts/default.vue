<template>
  <div>
    <Header />
    <Navbar />
    <nuxt />
    <EmptySpace />
    <FooterContact />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import FooterContact from '~/components/FooterContact.vue'
import EmptySpace from '~/components/EmptySpace.vue'

export default {
  components: {
    Navbar,
    Header,
    Footer,
    FooterContact,
    EmptySpace
  }
}
</script>
