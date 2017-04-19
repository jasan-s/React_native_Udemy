import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text } from 'react-native'
import AlbumDetail from './AlbumDetail'

export default function AlbumList(props) {
  return (
    <AlbumDetail album={props.album} handleClick={() => props.handleClick(props.album.url)}/>
  )
}

AlbumList.propTypes = {

}

const styles = StyleSheet.create({

})
