import React, { Component } from 'react'
import { View } from 'react-native'
import WelcomeBar from './WelcomeBar'
import Avatar from './Avatar'
import Map from './Map'
import PlacePicker from './PlacePicker'
import { Card, CardSection } from './common'

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
        console.log('this.state.userInitialPosition', this.state.userInitialPosition)
      },
      error => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition(position => {
      const userLastPosition = position.coords
      this.setState({ userLastPosition })
      console.log('this.state.userLastPosition', this.state.userLastPosition)
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }


  render() {
    return (
      <View style={{ marginTop: 80 }}>
        <WelcomeBar name={this.state.name} />
        <Avatar
          avatar_uri={this.state.avatar_uri}
          steps={this.state.steps}
          stride={this.props.stride}
        />
        <PlacePicker
          userInitialPosition={this.state.userInitialPosition}
          userLastPosition={this.state.userLastPosition}
        />
      </View>
    )
  }
}
