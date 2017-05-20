import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { Button, Card, CardSection } from '~/components'
import { fontSizes } from '~/styles'
const { height, width } = Dimensions.get('window') // get the device width and height


export default function AlbumDetail(props) {
  const { containerstyle, subcontainerstyle, thumbnailImageStyle, albumImageStyle, headerTextStyle } = styles
  return (
    <Card >
      <CardSection>
        <View style={containerstyle}>
          <Image source={{ uri: props.album.thumbnail_image }} style={thumbnailImageStyle} />
          <View style={subcontainerstyle}>
            <Text style={headerTextStyle}>{props.album.title} </Text>
            <Text >{props.album.artist} </Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: props.album.image }} style={albumImageStyle} />
      </CardSection>
      <Button handleClick={props.handleClick} title={'Buy Now'} />
    </Card>
  )
}

AlbumDetail.propTypes = {

}

const styles = StyleSheet.create({
  containerstyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subcontainerstyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 60,
  },
  thumbnailImageStyle: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  albumImageStyle: {
    flex: 1,
    width: null,
    height: 300,
  },
  headerTextStyle: {
    fontSize: fontSizes.primary,
  },
})
