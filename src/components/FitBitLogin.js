import Auth0Lock from 'react-native-lock'
import { Actions } from 'react-native-router-flux'

const FitBitLogin = () => {
  const lock = new Auth0Lock({
    clientId: 'lcZnGA2ZkoXSgDJO9Kyqk2pqzNPR7ERh',
    domain: 'gordonhgraham.auth0.com'
  })

    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err)
        return
      }
      // Authentication worked!
      console.log('Logged in with Auth0!', token)
      Actions.Home({ profile, token })
    })
}

export default FitBitLogin
