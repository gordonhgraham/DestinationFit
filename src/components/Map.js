import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text>Its Me again.</Text>
    </View>
  )
}

const styles = {
  map: {
    height: 300,
    width: 300
  }
}

export default Map
