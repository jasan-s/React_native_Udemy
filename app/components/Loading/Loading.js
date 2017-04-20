import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'

export default function Loading (props) {
  const { containerStyle } = styles
  return (
    <View style={containerStyle} >
      <ActivityIndicator size={props.size} />
    </View>
  )
}

Loading.propTypes = {

}

Loading.defaultProps = {
  size: 'large'
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
