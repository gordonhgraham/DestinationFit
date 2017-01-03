import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import axios from 'axios'
import Map from './Map'
// import Distance from './Distance'

class PlacePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destinationPosition: undefined,
    }
  }

  render() {
    const getLatLng = (placeId) => {
      axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyCO5hdyDQWgv8H3LyqVsA1Od14hstUWJ-c`)
        .then(data => {
          const destinationPosition = data.data.result.geometry.location
          getDistance(destinationPosition)
        })
    }

    const getDistance = (destinationPosition) => {
      axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.userPosition.latitude},${this.props.userPosition.longitude}&destination=${destinationPosition.lat},${destinationPosition.lng}&key=AIzaSyD8Y2CrGc4ZHnd6NdKlSEOruZQDw9e888c`)
        .then(data => console.log('response form getDistance', data))
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
              backgroundColor: 'rgba(0,0,0,0)'
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
