import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'
import { Auth } from '~/components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '~/redux/modules/authentication'

class AuthContainer extends Component {
  static propTypes = {}

  handleUserInputEmail = (email) => {
    this.props.userEmailInput(email)
  }

  handleUserInputPassword = (password) => {
    this.props.userPasswordInput(password)
  }

  handleSignInButtonPress = () => {
    console.log('Sign in Button CLicked')
    const { email, password } = this.props
    this.props.handleAuthWithEmailPassword(email, password).then((user) => {
      if (user) {
        // user exists in firebase do something now
      }
    })
  }

  handleSignOutButtonPress = () => {
    console.log('Sign Out Button CLicked')
    this.props.handleUnAuth()
  }


  render() {
    // console.log(this.props.email)
    return (
      <View>
        <Auth
          handleUserInputEmail={email => this.handleUserInputEmail(email)}
          email={this.props.email}
          handleUserInputPassword={password => this.handleUserInputPassword(password)}
          password={this.props.password}
          handleSignInButtonPress={() => this.handleSignInButtonPress()}
          handleSignOutButtonPress={() => this.handleSignOutButtonPress()}
          isAuthenticating={this.props.isAuthenticating}
          isAuthed={this.props.isAuthed}
          error={this.props.error} />
      </View>
    )
  }
}

function mapStateToProps({ authentication }, props) {
  const { isAuthenticating, isAuthed, email, password, error } = authentication
  return {
    isAuthenticating,
    isAuthed,
    email,
    password,
    error,
  }
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
