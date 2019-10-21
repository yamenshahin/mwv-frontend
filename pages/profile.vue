<template>
  <div class="container">
    <h1>Hello Profile</h1>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  head() {
    return {
      title: 'Checkout',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Profile description'
        }
      ]
    }
  }
}
</script>
