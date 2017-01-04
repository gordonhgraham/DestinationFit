import React from 'react'
import { View, Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from './common'

const icon = require('../walking1.png')

const Avatar = (props) => {
  const {
    imageStyle,
    textStyle,
    containerStyle,
    buttonContainerStyle
  } = styles

  // const renderStepsOrStride = () => {
  //   if (!isNaN(props.stride)) {
  //     return (
  //       <View>
  //         <Text style={textStyle}>Your stride length is {Math.round(props.stride * 12)} inches.</Text>
  //         <View style={buttonContainerStyle}>
  //           <Button onPress={Actions.EstimateStride}>Recalculate</Button>
  //         </View>
  //       </View>
  //     )
  //   }
  //
  //   return (
  //     <View>
  //       <Text style={textStyle}>Only {props.steps} steps to surpass your goal!</Text>
  //       <View style={buttonContainerStyle}>
  //         <Button>Resync With Fitbit</Button>
  //       </View>
  //     </View>
  //   )
  // }

  // with fitbit integration call renderStepsOrStride function inside nested view below

  return (
    <View style={containerStyle}>
      <Image
        style={imageStyle}
        source={icon}
      />
      <View>
        <Text style={textStyle}>Your stride length is {Math.round(props.stride * 12)} inches.</Text>
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
    // flex: 1
  },
  textStyle: {
    fontSize: 14,
    color: '#f6f6f6',
    fontFamily: 'Thonburi',
    // flex: 3,
    // alignSelf: 'stretch'
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
