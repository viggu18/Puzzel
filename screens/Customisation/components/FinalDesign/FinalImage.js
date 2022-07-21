import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../../../components/export'
import BT from '../../../../assets/images/bottom.png'
import TT from '../../../../assets/images/volume/RightMid.png'

const FinalImage = () => {
  return (
    <View style={styles.ImageContainer}>
        <Text style={styles.TitleText}>Your Design</Text> 
        <Image source={TT} style={styles.topImage} resizeMode='cover'/>
        <Image source={BT} style={styles.bottomImage} resizeMode='contain'/>
    </View>
  )
}

export default FinalImage

const styles = StyleSheet.create({
    ImageContainer: {
        width: windowWidth*0.9,
        height: windowHeight * 0.6,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
    },
    TitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    topImage: {
        width: '80%',
        height: '80%'
    },
    bottomImage: {
        width: '70%',
        height: '10%',
    }
})