import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { windowHeight,windowWidth } from '../../../components/export'

const DynamicImage = (props) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={props.image} style={styles.image} resizeMode='contain'/>
    </View>
  )
}

export default DynamicImage

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor:'white',
        height: windowHeight*0.6,
        width: windowWidth
    },
    image: {
        height: '100%',
        width: windowWidth,
    },
})