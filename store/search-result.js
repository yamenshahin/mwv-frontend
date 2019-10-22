// Create a global store
export const state = () => ({
  searchResult: {
    data: []
  }
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
  },
  SORT_SEARCH_RESULT(state, sortOrder) {
    if (sortOrder === '0') {
      const searchResultData = state.searchResult.data
      searchResultData.sort((a, b) => (a.total > b.total ? 1 : -1))
      state.searchResult.data = searchResultData
    } else if (sortOrder === '1') {
      const searchResultData = state.searchResult.data
      searchResultData.sort((a, b) => (a.total < b.total ? 1 : -1))
      state.searchResult.data = searchResultData
    } else if (sortOrder === '2') {
      const searchResultData = state.searchResult.data
      searchResultData.sort((a, b) => (a.score < b.score ? 1 : -1))
      state.searchResult.data = searchResultData
    } else if (sortOrder === '3') {
      const searchResultData = state.searchResult.data
      searchResultData.sort((a, b) => (a.milesDriven < b.milesDriven ? 1 : -1))
      state.searchResult.data = searchResultData
    } else if (sortOrder === '4') {
      const searchResultData = state.searchResult.data
      searchResultData.sort((a, b) => (a.jobsBooked < b.jobsBooked ? 1 : -1))
      state.searchResult.data = searchResultData
    } else if (sortOrder === '5') {
      const searchResultData = state.searchResult.data
      searchResultData.sort((a, b) => (a.votes < b.votes ? 1 : -1))
      state.searchResult.data = searchResultData
    }
  }
}

// Actions
export const actions = {
  setSearchResult({ commit }, searchResult) {
    commit('SET_SEARCH_RESULT', searchResult)
  },
  sortSearchResult({ commit }, sortOrder) {
    commit('SORT_SEARCH_RESULT', sortOrder)
  }
}
