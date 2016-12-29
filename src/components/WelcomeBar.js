import React from 'react'
import { Text, View } from 'react-native'
import { Button } from './common'

const WelcomeBar = (props) => {
  const { textStyle, containerStyle } = styles

  return (
  <View style={containerStyle}>
    <View>
      <Text>
        Welcome, James!
      </Text>
    </View>
    <View>
      <Button onPress={() => console.log('Button Pressed!')}>
        Log Out
      </Button>
    </View>
  </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 20,
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

export default WelcomeBar
