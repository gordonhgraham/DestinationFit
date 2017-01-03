import React, { Component } from 'react'
import { View } from 'react-native'
import Map from './Map'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import axios from 'axios'

class PlacePicker extends Component {
  constructor() {
    super()
    this.state = { destinationLat: undefined, destinationLng: undefined }
  }

  render() {
    const getLatLng = (placeId) => {
      axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyCO5hdyDQWgv8H3LyqVsA1Od14hstUWJ-c`)
        .then(data => {
          this.setState({
            destinationLat: data.data.result.geometry.location.lat,
            destinationLng: data.data.result.geometry.location.lng,
          })
          console.log(this.state.destinationLat, this.state.destinationLng)
        })
    }

    const renderMap = () => {
      if (this.state.destinationLat !== undefined) {
        return (
          <Map
            initialLat={this.state.destinationLat}
            initialLon={this.state.destinationLng}
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
