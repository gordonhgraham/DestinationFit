import React from 'react'
import { Text, View } from 'react-native'
import { Button } from './common'

const WelcomeBar = (props) => {
  const { textStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        Welcome, {props.name}!
      </Text>
      <Button onPress={() => console.log('Button Pressed!')}>
        Log Out
      </Button>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 25,
    flex: 3,
    textAlign: 'center'
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10
  }
}

export default WelcomeBar
