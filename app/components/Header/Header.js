import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { colors, fontSizes } from '~/styles'

const { height, width } = Dimensions.get('window') // get the device width and height

export default function Header(props) {
  const { container } = styles
  return (
    <StyledView style={container}>
      <StyledText >
        {props.header}
      </StyledText>
    </StyledView>
  )
}

Header.propTypes = {
  header: PropTypes.string.isRequired,
}

Header.defaultProps = {
  header: 'Album Title',
}

const StyledView = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: 15;
    width: ${width};
    background-color: ${colors.offWhite};
    height: 60;
    elevation: 2;
    position: relative;
  `


const StyledText = styled.Text`
  color: ${colors.primary};
  font-size: ${fontSizes.primary}
  `

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: `${colors.primary}`,
    shadowOpacity: 0.6,
  },
})
