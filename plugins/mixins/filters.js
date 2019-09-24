import Vue from 'vue'

const Filters = {
  install(Vue, Options) {
    Vue.mixin({
      filters: {
        formateTimeToString(timeInSec) {
          const h = Math.floor(timeInSec / 3600)
          const m = Math.floor((timeInSec % 3600) / 60)

          const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : ''
          const mDisplay =
            m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes ') : ''
          const coma = hDisplay && mDisplay ? ', ' : ''
          return hDisplay + coma + mDisplay
        },
        formateMoney(amount) {
          return '£' + amount
        }
      }
    })
  }
}

Vue.use(Filters)
