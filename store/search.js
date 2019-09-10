// Create places store
export const state = () => ({
  searchMeta: {
    vanSize: '0'
  }
})

// Getters
export const getters = {
  searchMeta(state) {
    return state.searchMeta
  }
}

// Mutations
export const mutations = {
  SET_SEARCH_META_VALUE(state, searchMetaValue) {
    const keyName = Object.keys(searchMetaValue)[0]
    state.searchMeta[keyName] = searchMetaValue[keyName]
  }
}

// Actions
export const actions = {
  setSearchMetaValue({ commit }, searchMetaValue) {
    commit('SET_SEARCH_META_VALUE', searchMetaValue)
  }
}
