// Create a global store
export const state = () => ({
  payment: '0'
})

// Getters
export const getters = {
  payment(state) {
    return state.payment
  }
}

// Mutations
export const mutations = {
  SET_PAYMENT(state, payment) {
    state.payment = payment
  }
}

// Actions
export const actions = {
  setPayment({ commit }, payment) {
    commit('SET_PAYMENT', payment)
  }
}
