import Vue from 'vue'

const MathCommonTasks = {
  install(Vue, Options) {
    Vue.mixin({
      methods: {
        convertMeterToMile(meters) {
          return meters / 1609.344
        },
        isoStringToDate(s) {
          const b = s.split(/\D/)
          return new Date(
            Date.UTC(
              b[0],
              --b[1],
              b[2],
              b[3] || 0,
              b[4] || 0,
              b[5] || 0,
              b[6] || 0
            )
          )
        }
      }
    })
  }
}

Vue.use(MathCommonTasks)
