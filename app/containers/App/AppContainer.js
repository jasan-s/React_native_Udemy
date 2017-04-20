import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '~/redux/modules/authentication'
import { firebaseAuth } from '~/config/constants'
import { Header, Loading } from '~/components'
import { AlbumListContainer, AuthContainer } from '~/containers'

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    onAuthChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      console.warn('firebase user: ', user)
      this.props.onAuthChange(user)
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.isAuthenticating
          ? <Loading />
        : <View>
          <Header title={'Authentication'} />
          <AuthContainer />
        </View>}
      </View>
    )
  }
}

function mapStateToProps({ authentication }) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
  }
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
