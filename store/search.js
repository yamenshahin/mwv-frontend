// Create places store
export const state = () => ({
  searchMeta: {
    vanSize: null,
    movingDate: null,
    helpersRequired: null,
    description: ' ',
    customerInfoName: null,
    customerInfoEmail: null,
    customerInfoPhone: null,
    notification: 'No',
    loadingUnloadingTime: 5400,
    travelTime: null,
    totalTime: null,
    milesDriven: null,
    stairsTime: 0,
    estimatedTotalTime: 5400,
    weekDay: 0
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
    if (keyName === 'travelTime') {
      state.searchMeta.estimatedTotalTime =
        state.searchMeta.loadingUnloadingTime + state.searchMeta.travelTime
    }
    if (keyName === 'stairsTime') {
      state.searchMeta.loadingUnloadingTime = state.searchMeta.stairsTime + 5400
      state.searchMeta.estimatedTotalTime =
        state.searchMeta.loadingUnloadingTime + state.searchMeta.travelTime
    }
  }
}

// Actions
export const actions = {
  setSearchMetaValue({ commit }, searchMetaValue) {
    commit('SET_SEARCH_META_VALUE', searchMetaValue)
  }
}
