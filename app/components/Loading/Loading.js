import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'

export default function Loading(props) {
  const { containerstyle } = styles
  return (
    <View style={containerstyle} >
      <ActivityIndicator size={props.size} />
    </View>
  )
}

Loading.propTypes = {

}

Loading.defaultProps = {
  size: 'large',
}
const styles = StyleSheet.create({
  containerstyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
