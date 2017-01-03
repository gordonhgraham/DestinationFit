import React from 'react'
import { View, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from './common'

const LandingPage = () => {
  const {
    headerStyle,
    imageStyle,
    textStyle,
    containerStyle,
    buttonContainerStyle
  } = styles

  return (
    <View style={containerStyle}>
      {/* <Text style={headerStyle}>DestinationFit</Text> */}
      <Image
        style={imageStyle}
        source={{ uri: 'https://irp-cdn.multiscreensite.com/43ef94bc/dms3rep/multi/desktop/visit-us-icon-200x200.png' }}
      />
      <Text style={textStyle}>
        DestinationFit helps you reach your step goal by providing you with
        destinations near you and their step distance away.
        Just find a spot and go on a walk!
        </Text>
        <Text>*********To calculate distance we will need
        your stride length. Either login with FitBit or continue to measure
        your stride length.
      </Text>
      <View style={buttonContainerStyle}>
        <Button>Log In With FitBit</Button>
      </View>
      <Text style={textStyle}>Or</Text>
      <Text onPress={Actions.EstimateStride} style={textStyle}>
        Continue to estimate stride length
      </Text>
    </View>
  )
}

const styles = {
  headerStyle: {
    fontSize: 50,
    alignSelf: 'center'
  },
  imageStyle: {
    alignSelf: 'center',
    height: 130,
    width: 130,
    marginTop: 35,
    marginBottom: 30
  },
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  containerStyle: {
    marginTop: 65,
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 10
  },
  buttonContainerStyle: {
    paddingTop: 15,
    height: 50,
    width: 120,
    alignSelf: 'center',
    alignItems: 'center'
  },
}

export default LandingPage
