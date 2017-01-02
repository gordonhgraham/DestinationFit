import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Card, CardSection, InputField } from './common'

class EstimateStride extends Component {
  state = { steps: undefined, distance: undefined }
  render() {
    return (
      <View style={{ marginTop: 80 }}>
        <Text>To estimate stide length you will need a tape measure
          or a known distance. Count your steps as you walk the across the
          distance, making sure you take at least 20 steps. Enter
          total steps and distance in feet below.</Text>
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
              <Button>Calculate Stride Length</Button>
            </CardSection>
          </Card>
      </View>
    )
  }
}

// const styles = {
//
// }

export default EstimateStride
