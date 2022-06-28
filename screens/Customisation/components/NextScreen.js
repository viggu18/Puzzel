import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../../components/export'

const NextScreen = (props) => {
    const ScreenHandler = () =>{
        props.navigation.navigate(props.screen)
    }
  return (
    <TouchableOpacity style={styles.button} onPress={ScreenHandler}>
      <Text style={styles.text}>NextScreen</Text>
    </TouchableOpacity>
  )
}

export default NextScreen

const styles = StyleSheet.create({
    button: {
        width: windowWidth*0.25,
        height: windowHeight * 0.07,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute',
        right: 20, 
        bottom: 20,
    },
    text: {
        fontWeight: 'bold'
    }
})