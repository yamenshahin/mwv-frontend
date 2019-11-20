import Vue from 'vue'

const Filters = {
  install(Vue, Options) {
    Vue.mixin({
      filters: {
        timeInHoursMinutes(timeInSec) {
          const h = Math.floor(timeInSec / 3600)
          const m = Math.floor((timeInSec % 3600) / 60)

          const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : ''
          const mDisplay =
            m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes ') : ''
          const coma = hDisplay && mDisplay ? ', ' : ''
          return hDisplay + coma + mDisplay
        },
        currency(amount) {
          return '£' + amount
        },
        percentage(amount) {
          return amount + '%'
        },
        vanSize(vanSize) {
          if (vanSize === '1') {
            return 'Small Van'
          } else if (vanSize === '2') {
            return 'Medium Van'
          } else if (vanSize === '3') {
            return 'Large Van'
          } else {
            return 'Giant Van'
          }
        },
        isoDateToString(isoDate) {
          const dateString = new Date(isoDate)
          let hours = ''
          let minutes = ''
          if (dateString.getHours() < 10) {
            hours = '0' + dateString.getHours()
          } else {
            hours = dateString.getHours()
          }
          if (dateString.getMinutes() < 10) {
            minutes = '0' + dateString.getMinutes()
          } else {
            minutes = dateString.getMinutes()
          }
          return (
            dateString.getDate() +
            '/' +
            (dateString.getMonth() + 1) +
            '/' +
            dateString.getFullYear() +
            ' ' +
            hours +
            ':' +
            minutes
          )
        },
        intToFloatString(value) {
          return value.toFixed(1)
        }
      }
    })
  }
}

Vue.use(Filters)
