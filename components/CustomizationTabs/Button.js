import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { windowWidth } from '../export'

export default function Button(props){
  return (
        <TouchableOpacity 
            onPress={()=>props.handler} 
            style={styles.ButtonContainer}
            activeOpacity={0.7}>
            <View > 
                <Text style={styles.ButtonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    ButtonContainer: {
        width: windowWidth*0.25,
        height: '8%',
        borderRadius: 20,
        backgroundColor: '#A0A0A0',
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 15,
        fontWeight: '700',
    },
})