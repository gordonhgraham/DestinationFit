// import React, { Component } from 'react'
// import { View, Text } from 'react-native'
//
// export default class Map extends Component {
//   render() {
//     return (
//       <View>
//         <Text>This is a fucking map. Or...it will be...</Text>
//       </View>
//     )
//   }
// }


import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'

const Map = (props) => {

  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: props.initialLat,
          longitude: props.initialLon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text>Initial latitude: {props.initialLat}</Text>
      <Text>Initial longitude: {props.initialLon}</Text>
    </View>
  )
}

const styles = {
  mapStyle: {
    marginTop: 100,
    height: 300,
    width: 300
  }
}

export default Map
