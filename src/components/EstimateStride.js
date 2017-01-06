import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button, Card, CardSection, InputField } from './common'

class EstimateStride extends Component {
  state = { steps: undefined, distance: undefined }
  render() {
    const calculateStride = () => {
      const userStride = this.state.distance / this.state.steps
      Actions.Home({ userStride })
    }

    return (
      <View style={{ paddingTop: 80, flex: 1, backgroundColor: '#405a93' }}>
        <Text style={styles.textStyle}>To estimate stide length you will need a{'\n'}tape measure
          or a known distance. Count your{'\n'}steps as you walk the across the
          distance.{'\n'}{'\n'}Make sure you take at least 20 steps.
        </Text>
        <Text style={styles.actionTextStyle}>Enter total steps and distance in feet.</Text>
          <Card>
            <CardSection>
              <InputField
                label="Distance (ft)"
                placeholder="50"
                keyboardType="numeric"
                value={this.state.distance}
                onChangeText={distance => this.setState({ distance })}
              />
            </CardSection>
            <CardSection>
              <InputField
                label="Steps"
                placeholder="20"
                keyboardType="numeric"
                value={this.state.steps}
                onChangeText={steps => this.setState({ steps })}
              />
            </CardSection>
            <CardSection>
              <Button onPress={calculateStride}>
                  Calculate Stride Length
                </Button>
            </CardSection>
          </Card>
      </View>
    )
  }
}

const styles={
  textStyle: {
    color: '#f6f6f6',
    padding: 3,
    textAlign: 'center',
    fontFamily: 'Thonburi',
  },
  actionTextStyle: {
    textAlign: 'center',
    color: '#d2d4d5',
    paddingTop: 18,
    fontFamily: 'Thonburi',
  },
}

export default EstimateStride
