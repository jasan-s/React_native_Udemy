import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { CardSection } from '~/components'

export default function LibraryListItem(props) {
  const { titleStyle, descriptionStyle } = styles
  const { id, title, description } = props.library
  const { expanded, handleLibrarySelected } = props
  return (
    <View>
      <TouchableOpacity
        onPress={() => handleLibrarySelected(id)} >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
        {(expanded)
      ? <Text style={descriptionStyle} >{description}</Text>
      : null }
      </TouchableOpacity>
    </View>
  )
}

LibraryListItem.propTypes = {

}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },
})
