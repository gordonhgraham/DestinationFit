import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GOOGLE_API_KEY } from 'react-native-dotenv'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import axios from 'axios'
import Map from './Map'

class PlacePicker extends Component {
  constructor() {
    super()
    this.state = {
      destinationPosition: undefined,
      destinationName: undefined,
      distance: undefined,
      time: undefined,
    }
  }

  render() {
    const getLatLng = (placeId) => {
      axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`)
        .then(data => {
          const destinationPosition = data.data.result.geometry.location
          const destinationName = data.data.result.name
          this.setState({ destinationName })
          this.setState({ destinationPosition })
          getDistance(destinationPosition)
        })
    }

    const getDistance = (destinationPosition) => {
      axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.userPosition.latitude},${this.props.userPosition.longitude}&destination=${destinationPosition.lat},${destinationPosition.lng}&mode=walking&key=${GOOGLE_API_KEY}`)
        .then(data => {
          const distance = data.data.routes[0].legs[0].distance.text
          this.setState({ distance })
        })
    }

    const convertDistance = () => {
      Math.round((63360 * parseFloat(this.state.distance)) / this.props.userStride)
    }

    const renderDistance = () => {
      if (this.state.distance !== undefined) {
        return (
          <Text
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              color: '#f6f6f6',
              fontSize: 20,
              textAlign: 'center'
            }}
          >Your destination is{'\n'}{convertDistance()} steps away.</Text>
        )
      }
    }

    const renderMap = () => {
      if (this.state.destinationPosition !== undefined) {
        return (
          <Map
            destinationLat={this.state.destinationPosition.lat}
            destinationLon={this.state.destinationPosition.lng}
            destinationName={this.state.destinationName}
            userLatLon={{
              latitude: this.props.userPosition.latitude,
              longitude: this.props.userPosition.longitude,
            }}
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
          listViewDisplayed='auto'
          fetchDetails
          onPress={(details) => {
            const placeId = details.place_id
            getLatLng(placeId)
            }
          }
          query={{
            key: GOOGLE_API_KEY,
            language: 'en'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: '#88a9cc',
            },
            listView: {
              marginTop: 45,
              flex: 1,
              position: 'absolute',
            }
          }}
          nearbyPlacesAPI={'GooglePlacesSearch'}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
        />
        <View>
          {renderMap()}
        </View>
      </View>
    )
  }
}

export default PlacePicker
