// Create a global store
export const state = () => ({
  checkout: {
    driver: {
      name: ''
    }
  }
})

// Getters
export const getters = {
  checkout(state) {
    return state.checkout
  }
}

// Mutations
export const mutations = {
  SET_CHECKOUT(state, checkout) {
    state.checkout = checkout
  }
}

// Actions
export const actions = {
  setCheckout({ commit }, checkout) {
    commit('SET_CHECKOUT', checkout)
  }
}
