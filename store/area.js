// Create a global store
export const state = () => ({
  areas: [
    {
      id: 0,
      center: {
        lat: 54.3780518,
        lng: -3.4359729
      }
    }
  ]
})

// Getters
export const getters = {
  areas(state) {
    return state.areas
  }
}

// Mutations
export const mutations = {
  SET_AREAS(state, areas) {
    state.areas = areas
  }
}

// Actions
export const actions = {
  setAreas({ commit }, areas) {
    commit('SET_AREAS', areas)
  }
}
