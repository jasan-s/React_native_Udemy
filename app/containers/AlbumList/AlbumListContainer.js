import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, Linking } from 'react-native'
import { AlbumList } from '~/components'

export default class AlbumListContainer extends Component {
  static propTypes = {}
  state = { albums: [] }

  componentDidMount() {
    this.albumsDataCall()
  }

  albumsDataCall = async () => {
    try {
      const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums.json')
      const responseJson = await response.json()
      // console.log('responseJson: ', responseJson)
      this.setState({ albums: responseJson })
      return responseJson
    } catch (error) {
      console.error(error)
    }
  }

  renderAlbums = () => this.state.albums.map((album) => {
    console.log(album.title)
    return <Text key={album.title}> {album.title}</Text>
  })

  handleClick = (url) => {
    console.log('YOU CLICKED BUTTON: ', url)
    Linking.openURL(url)
  }

  render() {
    return (
      <ScrollView>
        {this.state.albums.map(album =>
          <AlbumList
            key={album.title} album={album}
            handleClick={url => this.handleClick(url)} />,
          )
        }
      </ScrollView>
    )
  }
}
