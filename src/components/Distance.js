import React from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

export default class Distance extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // componentDidMount() {
  //
  // }

  render() {
    const getDistance = (props.userPosition, props.destinationPosition) => {
      axios.get(`https://maps.googleapis.com/maps/api/directions/json?
        origin=${userPosition.latitude},${userPosition.longitude}
        &destination=${destinationPosition.lat},${destinationPosition.lng}
        &key=AIzaSyCO5hdyDQWgv8H3LyqVsA1Od14hstUWJ-c`)
        .then(data => console.log('response form getDistance', data))
    }

    return (
      <View>
        <Text>{getDistance()}distance to destination</Text>
      </View>
    )
  }
}
