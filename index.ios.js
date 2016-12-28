// import library to help create Component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import WelcomeBar from './src/components/WelcomeBar'

const DestinationFit = () => (
  //add style={{ flex: 1 }} to root view below
  <View>
    <Header headerText={'DestinationFit'}/>
    <WelcomeBar />
  </View>
)

AppRegistry.registerComponent('DestinationFit', () => DestinationFit)
