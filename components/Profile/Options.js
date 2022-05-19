import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { windowWidth,windowHeight } from '../export'


export default function OptionButtons(props){
  return (
    <View style={style.OptionButtons}>
        <TouchableOpacity onPress={props.handler} activeOpacity={0.7}>
            <View style={style.contentHolder}>
            <Text style={[style.Text,{color:'black'}]}>{props.label}</Text>
            <MaterialIcons name="arrow-forward-ios" size={25} color="black" style={style.icon}/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    OptionButtons: {
        width: windowWidth,
        height : windowHeight*0.075,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    Text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        // left: 10,
        // top: 14,
    },
    contentHolder: {
        flexDirection: 'row',
        left: '5%',
        margin: 10,
        width: windowWidth
    },
    icon: {
        position:'absolute',
        right: '5%',
    }
})