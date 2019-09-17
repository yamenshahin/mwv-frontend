// ~/plugins/localStorage.js

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({})(store)
  })
}
