import React from 'react'
import { View, Image, Text } from 'react-native'
import { Button } from './common'

const Avatar = (props) => {
  const {
    imageStyle,
    textStyle,
    containerStyle,
    buttonContainerStyle
  } = styles

  return (
    <View style={containerStyle}>
      <Image
        style={imageStyle}
        source={{ uri: props.avatar_uri }}
      />
      <View>
        <Text style={textStyle}>Only {props.steps} steps to surpass your goal!</Text>
        <View style={buttonContainerStyle}>
          <Button>Resync With Fitbit</Button>
        </View>
      </View>
    </View>
  )
}

const styles = {
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50
    // flex: 1
  },
  textStyle: {
    fontSize: 14,
    // flex: 3,
    // alignSelf: 'stretch'
  },
  containerStyle: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainerStyle: {
    marginTop: 5,
    alignSelf: 'center',
    height: 30,
    width: 140
  }
}
export default Avatar
