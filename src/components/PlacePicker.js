import React, { Component } from 'react'
import { View } from 'react-native'
import Map from './Map'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import axios from 'axios'

class PlacePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destinationPosition: undefined,
      userInitialPosition: props.userInitialPosition,
      userLastPosition: props.userLastPosition,
    }
  }

  render() {
    const getLatLng = (placeId) => {
      axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyCO5hdyDQWgv8H3LyqVsA1Od14hstUWJ-c`)
        .then(data => {
          this.setState({ destinationPosition: data.data.result.geometry.location })
          console.log('should be object with lat and lng', this.state.destinationPosition)
        })
    }

    const getDistance = (userPosition, destinationPosition) => {

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
