// Create places store
export const state = () => ({
  collectionPlace: {
    postcode: '',
    address: '',
    city: '',
    lat: 0.0,
    lng: 0.0
  },
  deliveryPlace: {
    postcode: '',
    address: '',
    city: '',
    lat: 0.0,
    lng: 0.0
  }
})

// Getters
export const getters = {
  collectionPlace(state) {
    return state.collectionPlace
  },
  deliveryPlace(state) {
    return state.deliveryPlace
  }
}

// Mutations
export const mutations = {
  SET_COLLECTION_PLACE(state, collectionPlace) {
    state.collectionPlace.address = collectionPlace.formatted_address
    state.collectionPlace.lat = collectionPlace.geometry.location.lat()
    state.collectionPlace.lng = collectionPlace.geometry.location.lng()
    for (let i = 0; i < collectionPlace.address_components.length; i++) {
      const addressType = collectionPlace.address_components[i].types[0]
      if (addressType === 'postal_code') {
        state.collectionPlace.postcode =
          collectionPlace.address_components[i].long_name
      } else if (addressType === 'postal_town') {
        state.collectionPlace.city =
          collectionPlace.address_components[i].long_name
      }
    }
  },
  SET_DELIVERY_PLACE(state, deliveryPlace) {
    state.deliveryPlace.address = deliveryPlace.formatted_address
    state.deliveryPlace.lat = deliveryPlace.geometry.location.lat()
    state.deliveryPlace.lng = deliveryPlace.geometry.location.lng()
    for (let i = 0; i < deliveryPlace.address_components.length; i++) {
      const addressType = deliveryPlace.address_components[i].types[0]
      if (addressType === 'postal_code') {
        state.deliveryPlace.postcode =
          deliveryPlace.address_components[i].long_name
      } else if (addressType === 'postal_town') {
        state.deliveryPlace.city = deliveryPlace.address_components[i].long_name
      }
    }
  }
}

// Actions
export const actions = {
  setCollectionPlace({ commit }, collectionPlace) {
    commit('SET_COLLECTION_PLACE', collectionPlace)
  },
  setDeliveryPlace({ commit }, deliveryPlace) {
    commit('SET_DELIVERY_PLACE', deliveryPlace)
  }
}
