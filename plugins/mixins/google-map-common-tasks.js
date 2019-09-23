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
                  const meters = result.routes[0].legs[0].distance.value
                  const travelTimeObject = {
                    travelTime: result.routes[0].legs[0].duration.value
                  }
                  const milesDrivenObject = {
                    milesDriven: this.convertMeterToMile(meters)
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
        setCurrnetWayPointIndex(index) {
          this.currnetWayPointIndex = index
        },
        async setWayPointPlace(wayPointPlace) {
          wayPointPlace.id = this.currnetWayPointIndex
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
