export const getters = {
  authenticated(state) {
    return state.loggedIn
  },

  user(state) {
    return state.user
  }
}

// Mutations
export const mutations = {
  SET_ROLE(state, role) {
    state.user.role = role
  },
  UPDATE_USER(state, role) {
    state.user = role
  }
}

// Actions
export const actions = {
  setRole({ commit }, role) {
    commit('SET_ROLE', role)
  },
  updateUser({ commit }, role) {
    commit('UPDATE_USER', role)
  }
}
