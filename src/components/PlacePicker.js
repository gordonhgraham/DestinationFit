import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import axios from 'axios'
import Map from './Map'

class PlacePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destinationPosition: undefined,
      distance: undefined,
      time: undefined
    }
  }

  render() {
    const getLatLng = (placeId) => {
      axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyCO5hdyDQWgv8H3LyqVsA1Od14hstUWJ-c`)
        .then(data => {
          const destinationPosition = data.data.result.geometry.location
          this.setState({ destinationPosition })
          getDistance(destinationPosition)
        })
    }

    const getDistance = (destinationPosition) => {
      axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.userPosition.latitude},${this.props.userPosition.longitude}&destination=${destinationPosition.lat},${destinationPosition.lng}&mode=walking&key=AIzaSyD8Y2CrGc4ZHnd6NdKlSEOruZQDw9e888c`)
        .then(data => {
          const distance = data.data.routes[0].legs[0].distance.text
          this.setState({ distance })
        })
    }

    const convertDistance = () => Math.round((5280 * parseFloat(this.state.distance)) / this.props.stride)

    const renderDistance = () => {
      if (this.state.distance !== undefined) {
        return (
          <Text style={{ paddingTop: 10, color: "#f6f6f6" }}>Your destination is {convertDistance()} steps away.</Text>
        )
      }
    }

    const renderMap = () => {
      if (this.state.destinationPosition !== undefined) {
        return (
          <Map
            destinationLat={this.state.destinationPosition.lat}
            destinationLon={this.state.destinationPosition.lng}
          />
        )
      }
    }

    return (
      <View>
        {renderDistance()}
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2}
          autoFocus={false}
          fetchDetails
          onPress={(details) => {
            const placeId = details.place_id
            getLatLng(placeId)
            }
          }
          query={{
            key: 'AIzaSyCO5hdyDQWgv8H3LyqVsA1Od14hstUWJ-c',
            language: 'en'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: '#88a9cc'
            },
            listView: {
              marginTop: 45,
              height: 300,
              width: 300,
              position: 'absolute',
            }
          }}
          nearbyPlacesAPI={'GooglePlacesSearch'}
          GoogleReverseGeocodingQuery={{
          }}
          GooglePlacesSearchQuery={{
          }}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
        />

        {renderMap()}
      </View>
    )
  }
}

export default PlacePicker
