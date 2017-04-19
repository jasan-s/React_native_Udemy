import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { fontSizes, colors } from '~/styles'

export default function Button (props) {
  const { containerStyle, labelStyle} = styles
  const { handleClick } = props
  return (
    <TouchableOpacity onPress={handleClick} style={containerStyle}>
      <Text style={labelStyle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
}

Button.defaultProps = {
  title: 'Click Here',
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'palevioletred',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  labelStyle: {
    alignSelf: 'center',
    color: '#f8f8f8',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
})
