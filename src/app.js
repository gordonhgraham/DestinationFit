// import library to help create Component
import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

// import { View } from 'react-native'
import LandingPage from './components/LandingPage'
// import WelcomeBar from './components/WelcomeBar'
// import Avatar from './components/Avatar'
// import DestinationsList from './components/DestinationsList'
import EstimateStride from './components/EstimateStride'
// import { Header } from './components/common'
import Home from './components/Home'

class App extends Component {
  state = {
    name: 'James',
    avatar_uri: 'https://i.stack.imgur.com/WmvM0.png',
    steps: 8675
  }

  // logic for if user is logged in render home, if stride length is not null, show home.

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="LandingPage"
            component={LandingPage}
            title="DestinationFit"
            initial={true}
          />
          <Scene
            key="Home"
            component={Home}
            title="DestinationFit"
          />
          <Scene
            key="EstimateStride"
            component={EstimateStride}
            title="Estimate Stride"
          />
        </Scene>
      </Router>
    )
  }
}

export default App

{/* <Header headerText={'DestinationFit'} />
<WelcomeBar name={this.state.name} />
<Avatar avatar_uri={this.state.avatar_uri} steps={this.state.steps} />
<DestinationsList />
<LandingPage />
<EstimateStride /> */}
