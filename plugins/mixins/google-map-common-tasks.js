import Vue from 'vue'

const GoogleMapCommonTasks = {
  install(Vue, Options) {
    Vue.mixin({
      methods: {
        async setCollectionPlace(collectionPlace) {
          this.collectionPlace = collectionPlace
          await this.$store.dispatch(
            'places/setCollectionPlace',
            this.collectionPlace
          )
          this.center = {
            lat: this.collectionPlaceObject.lat,
            lng: this.collectionPlaceObject.lng
          }
          if (this.deliveryPlaceObject.address) {
            this.getDirection()
          }
        },
        async setDeliveryPlace(deliveryPlace) {
          this.deliveryPlace = deliveryPlace
          await this.$store.dispatch(
            'places/setDeliveryPlace',
            this.deliveryPlace
          )
          this.destination = {
            lat: this.deliveryPlaceObject.lat,
            lng: this.deliveryPlaceObject.lng
          }
          if (this.collectionPlaceObject.address) {
            this.getDirection()
          }
        },
        getDirection() {
          const calculatedWayPoint = this.wayPoints
          let distanceMeters = 0
          let travelTimeInSec = 0
          this.$gmapApiPromiseLazy().then(() => {
            this.$options.directionsDisplay.set('directions', null)
            this.$options.directionsService.route(
              {
                origin: {
                  lat: this.collectionPlaceObject.lat,
                  lng: this.collectionPlaceObject.lng
                },
                destination: {
                  lat: this.deliveryPlaceObject.lat,
                  lng: this.deliveryPlaceObject.lng
                },
                waypoints: calculatedWayPoint,
                travelMode: 'DRIVING',
                region: 'uk'
              },
              (result, status) => {
                if (status === 'OK') {
                  result.routes[0].legs.forEach((leg) => {
                    distanceMeters = distanceMeters + leg.distance.value
                    travelTimeInSec = travelTimeInSec + leg.duration.value
                  })
                  // const meters = result.routes[0].legs[0].distance.value
                  const travelTimeObject = {
                    travelTime: travelTimeInSec
                  }
                  const milesDrivenObject = {
                    milesDriven: this.convertMeterToMile(distanceMeters)
                  }
                  this.$options.directionsDisplay.setDirections(result)

                  this.$store.dispatch(
                    'search/setSearchMetaValue',
                    travelTimeObject
                  )
                  this.$store.dispatch(
                    'search/setSearchMetaValue',
                    milesDrivenObject
                  )
                }
              }
            )
          })
        },
        async addEmptyWayPoint() {
          await this.$store.dispatch('places/setWayPointPlaces', 'empty')
        },
        async deleteWayPoint(index) {
          await this.$store.dispatch('places/deleteWayPointPlaces', index)
          if (
            this.collectionPlaceObject.address &&
            this.deliveryPlaceObject.address
          ) {
            this.getDirection()
          }
        },
        setCurrentWayPointIndex(index) {
          this.currentWayPointIndex = index
        },
        async setWayPointPlace(wayPointPlace) {
          wayPointPlace.id = this.currentWayPointIndex
          await this.$store.dispatch('places/setWayPointPlaces', wayPointPlace)
          if (
            this.collectionPlaceObject.address &&
            this.deliveryPlaceObject.address
          ) {
            this.getDirection()
          }
        }
      }
    })
  }
}

Vue.use(GoogleMapCommonTasks)
