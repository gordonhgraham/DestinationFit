// import library to help create Component
import React, { Component } from 'react'
import { View } from 'react-native'
import WelcomeBar from './components/WelcomeBar'
import { Header } from './components/common'

class App extends Component {
  state = { name: 'James' }

  render() {
    return (
      <View>
        <Header headerText={'DestinationFit'} />
        <WelcomeBar name={this.state.name} />
      </View>
    )
  }
}

export default App
