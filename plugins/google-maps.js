import Vue from 'vue'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key:
      process.env.NODE_ENV !== 'production'
        ? 'AIzaSyDEewsdtNpFrlp5oIVzHQS_wciQm39J78o'
        : 'AIzaSyDufUg0nk_EJRWhuC5Ve6PfGMjDOZkf7YU',
    libraries: 'places,directions'
  }
})
