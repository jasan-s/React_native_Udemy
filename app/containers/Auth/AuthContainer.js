import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'
import { Auth } from '~/components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '~/redux/modules/authentication'

class AuthContainer extends Component {
  static propTypes = {}
  state = { email: '', password: '' }

  handleUserInputEmail = (email) => {
    this.setState({ email })
  }

  handleUserInputPassword = (password) => {
    this.setState({ password })
  }

  handleSignInButtonPress = () => {
    console.log('Sign in Button CLicked')
    const { email, password } = this.state
    this.props.handleAuthWithEmailPassword(email, password).then((user) => {
      if (user) {
        this.setState({ email: '', password: '' })
      }
    })
  }

  handleSignOutButtonPress = () => {
    console.log('Sign Out Button CLicked')
    this.props.handleUnAuth()
  }


  render() {
    console.log(this.state.email)
    return (
      <View>
        <Auth
          handleUserInputEmail={email => this.handleUserInputEmail(email)}
          email={this.state.email}
          handleUserInputPassword={password => this.handleUserInputPassword(password)}
          password={this.state.password}
          handleSignInButtonPress={() => this.handleSignInButtonPress()}
          handleSignOutButtonPress={() => this.handleSignOutButtonPress()}
          isAuthenticating={this.props.isAuthenticating}
          isAuthed={this.props.isAuthed} />
      </View>
    )
  }
}

function mapStateToProps({ authentication, isAuthed }, props) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
  }
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
