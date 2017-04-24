import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, SectionList } from 'react-native'
import { LibraryListItemContainer } from '~/containers'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '~/redux/modules/LibraryList'

class LibrarySectionListContainer extends Component {

  static propTypes = {
    libraryList: PropTypes.array,
  }
  static defaultProps = {
    libraryList: [],
  }
  constructor(props) {
    super(props)
    this.state = {}
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
        console.log(this.props.libraryList)

    return (
      <SectionList
          sections={this.props.dataSource}
        renderItem={({item}) => <Text style={{paddingLeft:18}}>{item.name}</Text> }
        renderSectionHeader={({section}) => <Text style={{paddingLeft:12, fontSize:22}}> {section.key} </Text> }
        keyExtractor={item => item.name} />
    )
  }
}


function mapStateToProps({ LibraryList }, props) {
  return {
    libraryList: LibraryList.libraryList,
    selectedLibraryId: LibraryList.selectedLibraryId,
    dataSource: LibraryList.dataSource,
  }
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LibrarySectionListContainer)
