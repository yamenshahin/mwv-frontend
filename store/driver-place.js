// Create Driver place store
export const state = () => ({
  driverPlace: {
    postcode: '',
    address: '',
    city: '',
    lat: 51.505624,
    lng: -0.150406,
    distance: 50
  }
})

// Getters
export const getters = {
  driverPlace(state) {
    return state.driverPlace
  }
}

// Mutations
export const mutations = {
  SET_DRIVER_PLACE(state, driverPlace) {
    state.driverPlace.address = driverPlace.formatted_address
    state.driverPlace.lat = driverPlace.geometry.location.lat()
    state.driverPlace.lng = driverPlace.geometry.location.lng()
    for (let i = 0; i < driverPlace.address_components.length; i++) {
      const addressType = driverPlace.address_components[i].types[0]
      if (addressType === 'postal_code') {
        state.driverPlace.postcode = driverPlace.address_components[i].long_name
      } else if (addressType === 'postal_town' || addressType === 'locality') {
        state.driverPlace.city = driverPlace.address_components[i].long_name
      }
    }
  },
  SET_DISTANCE_PLACE(state, distance) {
    state.driverPlace.distance = distance
  }
}

// Actions
export const actions = {
  setDriverPlace({ commit }, driverPlace) {
    commit('SET_DRIVER_PLACE', driverPlace)
  },

  setDistancePlace({ commit }, distance) {
    commit('SET_DISTANCE_PLACE', distance)
  }
}
