import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destinationLatLon: {
        latitude: this.props.destinationLat,
        longitude: this.props.destinationLon
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
          <MapView.Marker
            coordinate={this.state.destinationLatLon}
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
