import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from './common'

const LandingPage = () => {
  const {
    headerStyle,
    imageStyle,
    textStyle,
    buttonStyle,
    containerStyle,
    buttonContainerStyle
  } = styles

  return (
    <View style={containerStyle}>
      <Text style={headerStyle}>DestinationFit</Text>
      <Image
        style={imageStyle}
        source={{ uri: 'https://irp-cdn.multiscreensite.com/43ef94bc/dms3rep/multi/desktop/visit-us-icon-200x200.png' }}
      />
      <Text style={textStyle}>
        GetToFit helps you reach your step goal by providing you with points
        of interest near you and their step distance away.
        Just find a spot and go on a walk!
      </Text>
      <View style={buttonContainerStyle}>
        <Button>Log In With FitBit</Button>
      </View>
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
    width: 130
  },
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  containerStyle: {
    paddingTop: 15
  },
  buttonContainerStyle: {
    paddingTop: 15,
    height: 60,
    width: 120,
    alignSelf: 'center'
  }
}

export default LandingPage
