// Create a global store
export const state = () => ({
  posts: 'hello'
})

// Getters
export const getters = {
  posts(state) {
    return state.posts
  }
}

// Mutations
export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

// Actions
export const actions = {
  setPosts({ commit }, posts) {
    commit('SET_POSTS', posts)
  }
}
