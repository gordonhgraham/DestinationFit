import React from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from './common'
import FitBitLogin from './FitBitLogin'

const WelcomeBar = (props) => {
  const { textStyle, containerStyle } = styles

  const renderButton = () => {
    if (props.isGuest === 'true') {
      return (
        <Button onPress={FitBitLogin}>
          Login With Fitbit
        </Button>
      )
    }
      return (
        <Button onPress={Actions.LandingPage}>
          Log Out
        </Button>
      )
  }

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        Welcome, {props.name}!
      </Text>
      {renderButton()}
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 25,
    flex: 2,
    textAlign: 'center',
    color: '#f6f6f6'
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10
  }
}

export default WelcomeBar
