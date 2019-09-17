// Create a global store
export const state = () => ({
  customerJobs: {}
})

// Getters
export const getters = {
  customerJobs(state) {
    return state.customerJobs
  }
}

// Mutations
export const mutations = {
  SET_CUSTOMER_JOBS(state, customerJobs) {
    state.customerJobs = customerJobs
  }
}

// Actions
export const actions = {
  setCustomerJobs({ commit }, customerJobs) {
    commit('SET_CUSTOMER_JOBS', customerJobs)
  }
}
