import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { LibraryFlatListContainer } from '~/containers'
import FacebookTabBar from './FacebookTabBar';


export default class TabBarScrollContainer extends Component {

  static propTypes = {}
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={2}
      renderTabBar={() => <ScrollableTabBar />}>
      <LibraryFlatListContainer tabLabel='FIRST'/>
      <LibraryFlatListContainer tabLabel='SECOND'/>
      <LibraryFlatListContainer tabLabel='THIRD'/>
    </ScrollableTabView>
    )
  }
}
