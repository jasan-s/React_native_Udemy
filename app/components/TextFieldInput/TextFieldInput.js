import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TextInput } from 'react-native'

export default function TextFieldInput (props) {
  const { containerStyle, textInputStyle, textTitleStyle } = styles
  return (
    <View style={containerStyle}>
      <Text style={textTitleStyle} >{props.title}</Text>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        autoCorrect={false}
        secureTextEntry = {props.secureTextEntry || false}
        onChangeText={props.handleUserInput} style={textInputStyle}/>
    </View>
  )
}

TextFieldInput.propTypes = {

}

TextFieldInput.defaultProps = {
  title: 'User Input',
  placeholder: 'placeholder'
}

const styles = StyleSheet.create({
  containerStyle: {
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
