import React from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection } from './common'

const LocationsList = () => {
  const { containerStyle, headerStyle } = styles
  return (
    <View style={containerStyle}>
      <Text style={headerStyle}>Destinations to help you reach your goal.</Text>
      <Card>
        <CardSection>
          <Text>Sarah's Sweet Shoppe</Text>
        </CardSection>
        <CardSection>
          <Text>Mick's Auto</Text>
        </CardSection>
        <CardSection>
          <Text>Kristina Reese Yoga</Text>
        </CardSection>
      </Card>
    </View>
  )
}

const styles = {
  containerStyle: {
    marginTop: 10
  },
  headerStyle: {
    alignSelf: 'center',
    fontSize: 18
  }
}

export default LocationsList
