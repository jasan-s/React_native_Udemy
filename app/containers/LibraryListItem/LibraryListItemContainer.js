import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native'
import { CardSection, LibraryListItem } from '~/components'
import { connect } from 'react-redux'

    // required to use layout animation on android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
}

class LibraryListItemContainer extends Component {
// animates any layout change can use spring easeIneaseOut or linear
  componentWillUpdate() {
    LayoutAnimation.linear()
  }

  render() {
    return (
      <View>
        <LibraryListItem
          handleLibrarySelected={this.props.handleLibrarySelected}
          library={this.props.library}
          expanded={this.props.expanded} />
      </View>
    )
  }
}

function mapStateToProps({ LibraryList }, props) {
  return {
    library: props.library,
    expanded: LibraryList.selectedLibraryId === props.library.id,
  }
}

export default connect(mapStateToProps)(LibraryListItemContainer)