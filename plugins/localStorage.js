// ~/plugins/localStorage.js

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      reducer: (persistedState) => {
        const stateFilter = Object.assign({}, persistedState)
        const blackList = ['auth']

        blackList.forEach((item) => {
          delete stateFilter[item]
        })

        return stateFilter
      }
    })(store)
  })
}
