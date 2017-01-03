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
    steps: 8675
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
        <PlacePicker />
      </View>
    )
  }
}
