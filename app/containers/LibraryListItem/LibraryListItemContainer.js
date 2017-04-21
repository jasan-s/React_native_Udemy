import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity, LayoutAnimation } from 'react-native'
import { CardSection, LibraryListItem } from '~/components'
import { connect } from 'react-redux'

class LibraryListItemContainer extends Component {
  // animates any layout change
  componentWillUpdate() {
    LayoutAnimation.spring()
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