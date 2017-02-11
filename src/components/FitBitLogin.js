import Auth0Lock from 'react-native-lock'
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from 'react-native-dotenv'
import { Actions } from 'react-native-router-flux'

const FitBitLogin = () => {
  const lock = new Auth0Lock({
    clientId: AUTH0_CLIENT_ID,
    domain: AUTH0_DOMAIN
  })

    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err)
        return
      }
      // authentication success
      Actions.Home({ profile, token })
    })
}

export default FitBitLogin
