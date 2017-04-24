import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { Card, CardSection, Button, TextFieldInput, Loading } from '~/components'

export default function Auth(props) {
  const { errorStyle } = styles
  return (
    <View>
      {props.isAuthed
      ? <Card>
        <CardSection>
          {props.isAuthenticating
            ? <Loading />
            : <Button title={'Sign Out'} handleClick={props.handleSignOutButtonPress} />
          }
        </CardSection>
      </Card>
    : <Card>
      <CardSection>
        <TextFieldInput
          title={'Email : '}
          placeholder={'user@gmail.com'}
          value={props.email}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          autoFocus={true}
          handleUserInput={props.handleUserInputEmail} />
      </CardSection>
      <CardSection>
        <TextFieldInput
          title={'Password : '}
          secureTextEntry={true}
          placeholder={'123456'} value={props.password}
          handleUserInput={props.handleUserInputPassword} />
      </CardSection>
      <CardSection>
        <Text style={errorStyle}>{props.error}</Text>
      </CardSection>
      <CardSection>
        {props.isAuthenticating
          ? <Loading />
          : <Button title={'Sign In'} handleClick={props.handleSignInButtonPress} />
        }
      </CardSection>
    </Card>}
    </View>
  )
}

Auth.propTypes = {

}

const styles = StyleSheet.create({
  errorStyle: {
    color: 'tomato',
    textAlign: 'center',
  },
})

