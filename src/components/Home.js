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
    return (
      <View style={{ paddingTop: 80, flex: 1, backgroundColor: '#405a93' }}>
        <WelcomeBar name={this.state.name} />
        <Avatar
          avatar_uri={this.state.avatar_uri}
          steps={this.state.steps}
          stride={this.props.stride}
        />
        <PlacePicker
          userPosition={this.state.userLastPosition}
          stride={this.props.stride}
        />
      </View>
    )
  }
}
