// Create places store
export const state = () => ({
  collectionPlace: {
    postcode: '',
    address: '',
    city: '',
    lat: 0.0,
    lng: 0.0,
    stairs: null
  },
  deliveryPlace: {
    postcode: '',
    address: '',
    city: '',
    lat: 0.0,
    lng: 0.0,
    stairs: null
  },
  wayPointPlaces: []
})

// Getters
export const getters = {
  collectionPlace(state) {
    return state.collectionPlace
  },
  deliveryPlace(state) {
    return state.deliveryPlace
  },
  wayPointPlaces(state) {
    return state.wayPointPlaces
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
      } else if (addressType === 'postal_town' || addressType === 'locality') {
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
      } else if (addressType === 'postal_town' || addressType === 'locality') {
        state.deliveryPlace.city = deliveryPlace.address_components[i].long_name
      }
    }
  },
  SET_WAY_POINT_PLACES(state, wayPointPlaces) {
    if (wayPointPlaces === 'empty') {
      state.wayPointPlaces.push({
        postcode: '',
        address: '',
        city: '',
        lat: 0,
        lng: 0,
        stairs: null
      })
    } else {
      const index = wayPointPlaces.id
      if (state.wayPointPlaces.length - 1 >= index) {
        state.wayPointPlaces[index].address = wayPointPlaces.formatted_address
        state.wayPointPlaces[index].lat = wayPointPlaces.geometry.location.lat()
        state.wayPointPlaces[index].lng = wayPointPlaces.geometry.location.lng()
        for (let i = 0; i < wayPointPlaces.address_components.length; i++) {
          const addressType = wayPointPlaces.address_components[i].types[0]
          if (addressType === 'postal_code') {
            state.wayPointPlaces[index].postcode =
              wayPointPlaces.address_components[i].long_name
          } else if (
            addressType === 'postal_town' ||
            addressType === 'locality'
          ) {
            state.wayPointPlaces[index].city =
              wayPointPlaces.address_components[i].long_name
          }
        }
      } else {
        for (let j = 0; j < index - state.wayPointPlaces.length; j++) {
          state.wayPointPlaces.push({
            postcode: '',
            address: '',
            city: '',
            lat: 0.0,
            lng: 0.0,
            stairs: 0
          })
        }
        const indexAddress = wayPointPlaces.formatted_address
        const indexLat = wayPointPlaces.geometry.location.lat()
        const indexLng = wayPointPlaces.geometry.location.lng()
        let indexPostcode, indexCity
        for (let i = 0; i < wayPointPlaces.address_components.length; i++) {
          const addressType = wayPointPlaces.address_components[i].types[0]
          if (addressType === 'postal_code') {
            indexPostcode = wayPointPlaces.address_components[i].long_name
          } else if (
            addressType === 'postal_town' ||
            addressType === 'locality'
          ) {
            indexCity = wayPointPlaces.address_components[i].long_name
          }
        }
        state.wayPointPlaces.push({
          postcode: indexPostcode,
          address: indexAddress,
          city: indexCity,
          lat: indexLat,
          lng: indexLng,
          stairs: 0
        })
      }
    }
  },
  DELETE_WAY_POINT_PLACES(state, index) {
    state.wayPointPlaces.splice(index, 1)
  },
  SET_STAIRS_PLACES(state, placeArray) {
    if (placeArray[1] === 'collection') {
      state.collectionPlace.stairs = placeArray[0]
    } else if (placeArray[1] === 'delivery') {
      state.deliveryPlace.stairs = placeArray[0]
    } else if (placeArray[1] === 'waypoint') {
      const index = placeArray[2]
      state.wayPointPlaces[index].stairs = parseInt(placeArray[0])
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
  },
  setWayPointPlaces({ commit }, wayPointPlaces) {
    commit('SET_WAY_POINT_PLACES', wayPointPlaces)
  },
  deleteWayPointPlaces({ commit }, index) {
    commit('DELETE_WAY_POINT_PLACES', index)
  },
  setStairsPlaces({ commit }, placeArray) {
    commit('SET_STAIRS_PLACES', placeArray)
  }
}
