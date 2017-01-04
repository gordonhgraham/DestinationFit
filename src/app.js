import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LandingPage from './components/LandingPage'
import EstimateStride from './components/EstimateStride'
import Home from './components/Home'

class App extends Component {

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
