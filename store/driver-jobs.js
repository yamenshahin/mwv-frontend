// Create a global store
export const state = () => ({
  driverJobs: {}
})

// Getters
export const getters = {
  driverJobs(state) {
    return state.driverJobs
  }
}

// Mutations
export const mutations = {
  SET_DRIVER_JOBS(state, driverJobs) {
    state.driverJobs = driverJobs
  }
}

// Actions
export const actions = {
  setDriverJobs({ commit }, driverJobs) {
    commit('SET_DRIVER_JOBS', driverJobs)
  }
}
