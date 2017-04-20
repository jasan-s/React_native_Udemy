import { firebaseAuth, facebookProvider, ref } from '~/config/constants'
import { AccessToken, LoginManager } from 'react-native-fbsdk'

export function getAccessToken() {
  return AccessToken.getCurrentAccessToken()
}

export function authWithToken(accesToken) {
  return firebaseAuth
    .signInWithCredential(facebookProvider.credential(accesToken))
}

export function logInWithEmailPassword(email, password) {
  return firebaseAuth.signInWithEmailAndPassword(email, password)
}

export function signUpWithEmailPassword(email, password) {
  return firebaseAuth.createUserWithEmailAndPassword(email, password)
}

export function updateUser(user) {
  return ref.child(`users/${user.uid}`).set(user)
}

export function logOut() {
  // logs user out of facebook sdk
  LoginManager.logOut()
    // logs user out of firebase
  firebaseAuth.signOut()
  // stop listiing to all firebase nodes
  ref.off()
}
