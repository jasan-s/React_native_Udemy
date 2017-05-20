import { getAccessToken, authWithToken, updateUser, logOut, logInWithEmailPassword, signUpWithEmailPassword } from '~/api/auth'
import { Actions } from 'react-native-router-flux'

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'
const LOGIN_ERROR = 'LOGIN_ERROR'
const USER_EMAIL_INPUT = 'USER_EMAIL_INPUT'
const USER_PASSWORD_INPUT = 'USER_PASSWORD_INPUT'
export const LOGGING_OUT = 'LOGGING_OUT' // so listen to it in index.js to reset entire redux store to intial state all in one go instead of resseting it at each reducer

export function authenticating() {
  return {
    type: AUTHENTICATING,
  }
}

function notAuthed() {
  return {
    type: NOT_AUTHED,
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
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

export function userEmailInput(email) {
  return {
    type: USER_EMAIL_INPUT,
    email,
  }
}

export function userPasswordInput(password) {
  return {
    type: USER_PASSWORD_INPUT,
    password,
  }
}

export function handleAuthWithEmailPassword(email, password) {
  return async (dispatch) => {
    dispatch(authenticating())
    try {
      const user = await logInWithEmailPassword(email, password)
      // console.warn('Logged In User: ', user)
      // Actions.LibraryList()
      return user
    } catch (error) {
      console.warn('Error in Login handleAuthWithEmailPassword: ', error.message)
      try {
        const user = await signUpWithEmailPassword(email, password)
        // Actions.LibraryList()
        return user
        console.warn('Signed Up User: ', user)
      } catch (error2) {
        dispatch(notAuthed())
        dispatch(loginError(error.message))
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
        // console.warn('accessToken: ', accessToken)
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
      }).then(() => {
        dispatch(isAuthed(uid))
        // Route change using react-native-router-flux
        // Actions.main()
      })
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
  error: '',
  email: '',
  password: '',
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING :
      return {
        ...state,
        isAuthenticating: true,
      }
    case USER_EMAIL_INPUT :
      return {
        ...state,
        email: action.email,
      }
    case USER_PASSWORD_INPUT :
      return {
        ...state,
        password: action.password,
      }
    case NOT_AUTHED :
      return {
        ...state,
        isAuthenticating: false,
        isAuthed: false,
        authedId: '',
      }
    case IS_AUTHED :
      return {
        ...state,
        isAuthed: true,
        isAuthenticating: false,
        error: '',
        authedId: action.uid,
      }
    case LOGIN_ERROR :
      return {
        ...state,
        isAuthed: false,
        isAuthenticating: false,
        authedId: '',
        password: '',
        error: action.error,
      }
    default :
      return state
  }
}