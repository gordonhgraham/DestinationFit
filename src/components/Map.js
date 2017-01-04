import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: [
        {
          latlng: {
            latitude: this.props.destinationLat,
            longitude: this.props.destinationLon
          },
          title: this.props.destinationName
        },
        {
          latlng: this.props.userLatLon,
          title: 'Current Location'
        }
      ],
      destinationLatLon: {
        latitude: this.props.destinationLat,
        longitude: this.props.destinationLon,
      }
    }
  }

  render() {
    return (
      <View>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: this.state.destinationLatLon.latitude,
            longitude: this.state.destinationLatLon.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* {this.state.markers.map(marker => (
              <MapView.Marker
                coordinate={marker.latlng}
                title={marker.title}
                key={marker.title}
              />
            ))} */}
          <MapView.Marker
            coordinate={this.props.userLatLon}
            title={'Current Location'}
            pinColor={'#529de8'}
          />
          <MapView.Marker
            coordinate={this.state.destinationLatLon}
            title={this.props.destinationName}
          />
        </MapView>
      </View>
    )
  }
}

const styles = {
  mapStyle: {
    marginTop: 100,
    height: 300,
    // width: 420
    flexGrow: 1
  },
}


export default Map
