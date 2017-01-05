import React, { Component } from 'react'
import { View } from 'react-native'
import WelcomeBar from './WelcomeBar'
import Avatar from './Avatar'
import PlacePicker from './PlacePicker'

export default class Home extends Component {
  state = {
    name: 'James',
    avatar_uri: 'https://i.stack.imgur.com/WmvM0.png',
    steps: 8675,
    userInitialPosition: 'unknown',
    userLastPosition: 'unknown',
  }

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
        const userInitialPosition = position.coords
        this.setState({ userInitialPosition })
      },
      error => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition(position => {
      const userLastPosition = position.coords
      this.setState({ userLastPosition })
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }


  render() {
    console.log(this.props.profile.picture)
    console.log(this.props.profile.extraInfo.strideLengthWalking)
    return (
      <View style={{ paddingTop: 80, flex: 1, backgroundColor: '#405a93' }}>
        <Avatar
          avatar_uri={{ uri: this.props.profile.picture }}
          // steps={this.state.steps}
          stride={this.props.profile.extraInfo.strideLengthWalking}
        />
        <PlacePicker
          userPosition={this.state.userLastPosition}
          stride={this.props.stride}
        />
      </View>
    )
  }
}
