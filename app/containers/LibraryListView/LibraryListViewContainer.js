import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ListView } from 'react-native'
import { LibraryListItemContainer } from '~/containers'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '~/redux/modules/LibraryList'

class LibraryListViewContainer extends Component {
  static propTypes = {}
  state = {}

  componentWillMount() {
    // listView boilerPlate datasource defined with our data
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    // listView boilerPlate
    this.dataSource = ds.cloneWithRows(this.props.libraryList)
  }

  handleLibrarySelected = (id) => {
    console.log('Library Clicked: ', id, typeof id)
    this.props.librarySelected(id)
    console.log('selected Library in redux:', this.props.selectedLibraryId, typeof this.props.selectedLibraryId)
  }

    // listView boilerPlate renderRow function
  renderRow = library => (
    <LibraryListItemContainer
      library={library}
      handleLibrarySelected={(id) => { this.handleLibrarySelected(id) }}
      selectedLibraryId={this.props.selectedLibraryId} />
  )

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={library => this.renderRow(library)} />
    )
  }
}


function mapStateToProps({ LibraryList }, props) {
  return {
    libraryList: LibraryList.libraryList,
    selectedLibraryId: LibraryList.selectedLibraryId,
  }
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryListViewContainer)
