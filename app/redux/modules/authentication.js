import { getAccessToken, authWithToken, updateUser, logOut, logInWithEmailPassword, signUpWithEmailPassword } from '~/api/auth'

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'
export const LOGGING_OUT = 'LOGGING_OUT' // so listen to it in index.js to reset entire redux store to intial state all in one go instead of resseting it at each reducer

function authenticating() {
  return {
    type: AUTHENTICATING,
  }
}

function notAuthed() {
  return {
    type: NOT_AUTHED,
  }
}

function loggingOut() {
  return {
    type: LOGGING_OUT,
  }
}

function isAuthed(uid) {
  return {
    type: IS_AUTHED,
    uid,
  }
}

export function handleAuthWithEmailPassword(email, password) {
  return async (dispatch) => {
    dispatch(authenticating())
    try {
      const user = await logInWithEmailPassword(email, password)
      console.warn('Logged In User: ', user)
      return user
    } catch (error) {
      console.warn('Error in Login handleAuthWithEmailPassword: ', error.message)
      try {
        const user = await signUpWithEmailPassword(email, password)
        return user
        console.warn('Signed Up User: ', user)
      } catch (error2) {
        dispatch(notAuthed())
        console.warn('Error in Signing up handleAuthWithEmailPassword: ', error2.message)
      }
    }
  }
}

export function handleAuthWithFirebase() {
  return (dispatch, getState) => {
    dispatch(authenticating())
    return getAccessToken()
      .then(({ accessToken }) => {
        console.warn('accessToken: ', accessToken)
        authWithToken(accessToken)
      })
      .catch(error => console.warn('Error in handleAuthWithFirebase: ', error.message))
  }
}


export function onAuthChange(user) {
  return (dispatch) => {
    if (!user) {
      dispatch(notAuthed())
    } else {
      // update user in firebase database
      const { uid, displayName, photoURL } = user
      updateUser({
        uid,
        displayName,
        photoURL,
      }).then(() => dispatch(isAuthed(uid)))
    }
  }
}

export function handleUnAuth() {
  return (dispatch) => {
    logOut()
    dispatch(loggingOut())
  }
}

const initialState = {
  isAuthed: false,
  isAuthenticating: true,
  authedId: '',
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING :
      return {
        ...state,
        isAuthenticating: true,
      }
    case NOT_AUTHED :
      return {
        isAuthenticating: false,
        isAuthed: false,
        authedId: '',
      }
    case IS_AUTHED :
      return {
        isAuthed: true,
        isAuthenticating: false,
        authedId: action.uid,
      }
    default :
      return state
  }
}