import React, { Component } from 'react'
import { View } from 'react-native'
import WelcomeBar from './WelcomeBar'
import Avatar from './Avatar'
import PlacePicker from './PlacePicker'

const icon = require('../walking1.png')


export default class Home extends Component {
  state = {
    userPhoto: this.props.profile ? { uri: this.props.profile.picture } : icon,
    userStride: this.props.profile ? (this.props.profile.extraInfo.strideLengthWalking * 0.393701) : (this.props.stride * 12),
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
    return (
      <View style={{ paddingTop: 80, flex: 1, backgroundColor: '#405a93' }}>
        <Avatar
          avatar_uri={this.state.userPhoto}
          // steps={this.state.steps}
          stride={this.state.userStride}
        />
        <PlacePicker
          userPosition={this.state.userLastPosition}
          stride={this.props.stride}
        />
      </View>
    )
  }
}
