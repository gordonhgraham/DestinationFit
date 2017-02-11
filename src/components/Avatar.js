import React from 'react'
import { View, Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
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
        source={props.avatar_uri}
      />
      <View>
        <Text style={textStyle}>Your stride length is {Math.round(props.userStride)} inches.</Text>
        <View style={buttonContainerStyle}>
          <Button onPress={Actions.EstimateStride}>Recalculate</Button>
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
  },
  textStyle: {
    fontSize: 18,
    color: '#f6f6f6',
    fontFamily: 'Thonburi',
  },
  containerStyle: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainerStyle: {
    marginTop: 5,
    alignSelf: 'center',
    height: 35,
    width: 140
  }
}

export default Avatar
