// import library to help create Component
import React, { Component } from 'react'
import { View } from 'react-native'
import LandingPage from './components/LandingPage'
import WelcomeBar from './components/WelcomeBar'
import Avatar from './components/Avatar'
import DestinationsList from './components/DestinationsList'
import { Header } from './components/common'

class App extends Component {
  state = {
    name: 'James',
    avatar_uri: 'https://i.stack.imgur.com/WmvM0.png',
    steps: 8675
  }

  render() {
    return (
      <View>
        <Header headerText={'DestinationFit'} />
        <WelcomeBar name={this.state.name} />
        <Avatar avatar_uri={this.state.avatar_uri} steps={this.state.steps} />
        <DestinationsList />
        {/* <LandingPage /> */}
      </View>
    )
  }
}

export default App
