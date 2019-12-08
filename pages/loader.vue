<template>
  <div class="page-index mb-5">
    <Processing />

    <b-button @click.prevent="processThis()">
      process this..
    </b-button>
  </div>
</template>

<script>
export default {
  components: {
    Processing: () => import('~/components/Processing')
  },
  methods: {
    processThis() {
      this.$bvModal.show('processing')
    }
  }
}
</script>
