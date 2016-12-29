import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

// lecture 50 has info about linking used in AlbumDetail

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom: 6
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}
export { Button }