// import library to help create Component
import React, { Component } from 'react'
import { View } from 'react-native'
import WelcomeBar from './components/WelcomeBar'
import { Header } from './components/common'

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'DestinationFit'} />
        <WelcomeBar />
      </View>
    )
  }
}

export default App
