import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import CardSection from './Card'
// import styled from 'styled-components/native'

export default function Card(props) {
  const { containerstyle } = styles
  return (
    <View style={containerstyle} >
      {props.children}
    </View>
  )
}

Card.propTypes = {

}

const styles = StyleSheet.create({
  containerstyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
})

// const StyledView = styled.View`
//   border-width: 1;
//   border-radius: 2;
//   border-color: #ddd;
//   border-bottom-width: 0;
//   shadow-color: #000;
//   shadow-offset: {width: 0, height: 2};
//   shadow-opacity: 0.8;
//   shadow-radius: 2;
//   elevation: 1;
//   margin-left: 5;
//   margin-right: 5;
//   margin-top: 10;
//   height: 65;
//   `