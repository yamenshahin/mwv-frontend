// Create Driver place store
export const state = () => ({
  driverPlaceLocation: {
    postcode: 'WC2N 5DU',
    address: 'Trafalgar Square, Charing Cross, London WC2N 5DU, UK',
    city: 'London',
    lat: 51.5075467,
    lng: -0.1278833000000077,
    distance: 50
  },
  driverPlacePrice: {
    priceSmallVanWeekday: null,
    priceSmallVanWeekday1: null,
    priceSmallVanWeekday2: null,
    priceSmallVanWeekday3: null,
    priceSmallVanWeekend: null,
    priceSmallVanWeekend1: null,
    priceSmallVanWeekend2: null,
    priceSmallVanWeekend3: null,
    priceMidVanWeekday: null,
    priceMidVanWeekday1: null,
    priceMidVanWeekday2: null,
    priceMidVanWeekday3: null,
    priceMidVanWeekend: null,
    priceMidVanWeekend1: null,
    priceMidVanWeekend2: null,
    priceMidVanWeekend3: null,
    priceLargeVanWeekday: null,
    priceLargeVanWeekday1: null,
    priceLargeVanWeekday2: null,
    priceLargeVanWeekday3: null,
    priceLargeVanWeekend: null,
    priceLargeVanWeekend1: null,
    priceLargeVanWeekend2: null,
    priceLargeVanWeekend3: null,
    priceGiantVanWeekday: null,
    priceGiantVanWeekday1: null,
    priceGiantVanWeekday2: null,
    priceGiantVanWeekday3: null,
    priceGiantVanWeekend: null,
    priceGiantVanWeekend1: null,
    priceGiantVanWeekend2: null,
    priceGiantVanWeekend3: null,
    priceStop: null,
    priceMile: null,
    priceStairs: null
  },
  driverPlaceStatistic: {
    stars: 0,
    votes: 0,
    milesDriven: 0,
    jobsBooked: 0
  },
  driverPlaceLegal: {
    vehicleRegistration: '',
    nationalInsuranceNumber: '',
    drivingLicenceNumber: '',
    disc: ''
  },
  driverPlaceFiles: {
    baseUrl: 'https://hellovans-assets.s3.eu-west-2.amazonaws.com',
    placeImageURL: ''
  }
})

// Getters
export const getters = {
  driverPlaceLocation(state) {
    return state.driverPlaceLocation
  },
  driverPlacePrice(state) {
    return state.driverPlacePrice
  },
  driverPlaceLegal(state) {
    return state.driverPlaceLegal
  },
  driverPlaceFiles(state) {
    return state.driverPlaceFiles
  }
}

// Mutations
export const mutations = {
  SET_DRIVER_PLACE_LOCATION(state, driverPlaceLocation) {
    state.driverPlaceLocation.address = driverPlaceLocation.formatted_address
    state.driverPlaceLocation.lat = driverPlaceLocation.geometry.location.lat()
    state.driverPlaceLocation.lng = driverPlaceLocation.geometry.location.lng()
    for (let i = 0; i < driverPlaceLocation.address_components.length; i++) {
      const addressType = driverPlaceLocation.address_components[i].types[0]
      if (addressType === 'postal_code') {
        state.driverPlaceLocation.postcode =
          driverPlaceLocation.address_components[i].long_name
      } else if (addressType === 'postal_town' || addressType === 'locality') {
        state.driverPlaceLocation.city =
          driverPlaceLocation.address_components[i].long_name
      }
    }
  },
  SET_DRIVER_PLACE_LOCATION_FROM_DB(state, driverPlaceLocationDB) {
    state.driverPlaceLocation.address = driverPlaceLocationDB.address
    state.driverPlaceLocation.lat = driverPlaceLocationDB.lat
    state.driverPlaceLocation.lng = driverPlaceLocationDB.lng
    state.driverPlaceLocation.postcode = driverPlaceLocationDB.postcode
    state.driverPlaceLocation.city = driverPlaceLocationDB.city
    state.driverPlaceLocation.distance = driverPlaceLocationDB.distance
  },
  SET_DISTANCE_PLACE(state, distance) {
    state.driverPlaceLocation.distance = distance
  },
  SET_DRIVER_PLACE_PRICE(state, driverPlacePriceFormated) {
    state.driverPlacePrice[Object.keys(driverPlacePriceFormated)[0]] =
      driverPlacePriceFormated[Object.keys(driverPlacePriceFormated)[0]]
  },
  SET_DRIVER_PLACE_LEGAL(state, driverPlaceLegal) {
    state.driverPlaceLegal[Object.keys(driverPlaceLegal)[0]] =
      driverPlaceLegal[Object.keys(driverPlaceLegal)[0]]
  },
  SET_DRIVER_PLACE_FILES(state, url) {
    state.driverPlaceFiles.placeImageURL = url
  }
}

// Actions
export const actions = {
  setDriverPlaceLocation({ commit }, driverPlaceLocation) {
    commit('SET_DRIVER_PLACE_LOCATION', driverPlaceLocation)
  },

  setDriverPlaceLocationFromDb({ commit }, driverPlaceLocationDB) {
    commit('SET_DRIVER_PLACE_LOCATION_FROM_DB', driverPlaceLocationDB)
  },
  setDistancePlace({ commit }, distance) {
    commit('SET_DISTANCE_PLACE', distance)
  },

  setDriverPlacePrice({ commit }, driverPlacePriceFormated) {
    commit('SET_DRIVER_PLACE_PRICE', driverPlacePriceFormated)
  },
  setDriverPlaceLegal({ commit }, driverPlaceLegal) {
    commit('SET_DRIVER_PLACE_LEGAL', driverPlaceLegal)
  },
  setDriverPlaceFiles({ commit }, url) {
    commit('SET_DRIVER_PLACE_FILES', url)
  }
}
