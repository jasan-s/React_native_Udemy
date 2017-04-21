import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Card, CardSection, Button, TextFieldInput, Loading } from '~/components'

export default function Auth(props) {
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
        <TextFieldInput title={'Email : '} placeholder={'user@gmail.com'} value={props.email} handleUserInput={props.handleUserInputEmail} />
      </CardSection>
      <CardSection>
        <TextFieldInput
          title={'Password : '}
          secureTextEntry={true}
          placeholder={'123456'} value={props.password}
          handleUserInput={props.handleUserInputPassword} />
      </CardSection>
      <CardSection />
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

})

