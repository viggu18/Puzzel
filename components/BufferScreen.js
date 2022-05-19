import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { windowHeight } from './export'

export default function BufferScreen(){
  return (
    <View style={styles.LoadingContainer}>
      <LottieView style={styles.LoadingAnimation} 
                source={require('../assets/animations/loading.json')} 
                    autoPlay speed={1}/>
    </View>
  )
}



const styles = StyleSheet.create({
    LoadingAnimation: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    LoadingContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
}) 