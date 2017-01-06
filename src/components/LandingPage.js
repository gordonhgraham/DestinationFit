import React from 'react'
import { View, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from './common'
import FitBitLogin from './FitBitLogin'

const icon = require('../walking1.png')

const LandingPage = () => {
  const {
    headerStyle,
    imageStyle,
    textStyle,
    actionTextStyle,
    containerStyle,
    buttonContainerStyle
  } = styles


  return (
    <View style={containerStyle}>
      <Text style={headerStyle}>DestinationFit</Text>
      <Image
        source={icon}
        style={imageStyle}
      />
      <Text style={textStyle}>
        DestinationFit helps you reach your step{'\n'}
        goal by providing your step distance{'\n'}
        from destinations near you.
      </Text>
      <View style={buttonContainerStyle}>
        <Button onPress={Actions.EstimateStride}>Calculate Stride Length</Button>
      </View>
      <View style={buttonContainerStyle}>
        <Button onPress={FitBitLogin}>Login With Fitbit</Button>
      </View>
    </View>
  )
}

const styles = {
  headerStyle: {
    fontSize: 45,
    alignSelf: 'center',
    color: '#f6f6f6',
    fontFamily: 'Thonburi',
  },
  imageStyle: {
    alignSelf: 'center',
    height: 130,
    width: 130,
    marginTop: 35,
    marginBottom: 30,
  },
  textStyle: {
    textAlign: 'center',
    color: '#f6f6f6',
    // justifyContent: 'center'
    fontFamily: 'Thonburi',
  },
  actionTextStyle: {
    textAlign: 'center',
    color: '#d2d4d5',
    paddingTop: 18,
    fontFamily: 'Thonburi',
  },
  containerStyle: {
    backgroundColor: '#405a93',
    paddingTop: 80,
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1
  },
  buttonContainerStyle: {
    paddingTop: 15,
    height: 50,
    width: 220,
    alignSelf: 'center',
    alignItems: 'center'
  },
}

export default LandingPage
