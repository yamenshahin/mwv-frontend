// Create a global store
export const state = () => ({
  searchResult: {}
})

// Getters
export const getters = {
  searchResult(state) {
    return state.searchResult
  }
}

// Mutations
export const mutations = {
  SET_SEARCH_RESULT(state, searchResult) {
    state.searchResult = searchResult
  }
}

// Actions
export const actions = {
  setSearchResult({ commit }, searchResult) {
    commit('SET_SEARCH_RESULT', searchResult)
  }
}
