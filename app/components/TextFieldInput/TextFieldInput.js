import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TextInput } from 'react-native'

export default function TextFieldInput(props) {
  const { containerstyle, textInputStyle, textTitleStyle } = styles
  return (
    <View style={containerstyle}>
      <Text style={textTitleStyle} >{props.title}</Text>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry || false}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        autoFocus={props.autoFocus || false}
        onChangeText={props.handleUserInput} style={textInputStyle} />
    </View>
  )
}

TextFieldInput.propTypes = {

}

TextFieldInput.defaultProps = {
  title: 'User Input',
  placeholder: 'placeholder',
  keyboardType: 'default',
  returnKeyType: 'next',
}

const styles = StyleSheet.create({
  containerstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    flex: 1,
  },
  textInputStyle: {
    flex: 2,
    lineHeight: 24,
    fontSize: 18,
    // borderWidth: 1,
    // borderColor: 'rgba(0,0,0,0.25)',
    marginLeft: 4,
    paddingLeft: 4,
  },
  textTitleStyle: {
    lineHeight: 24,
    fontSize: 18,
    paddingLeft: 5,
  },
})
