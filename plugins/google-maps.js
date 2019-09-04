import Vue from 'vue'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyDEewsdtNpFrlp5oIVzHQS_wciQm39J78o', libraries: 'places' }
})
