import { View, Text, TouchableOpacity,StyleSheet,ToastAndroid } from 'react-native'
import React from 'react'
import { windowHeight,windowWidth } from './export'

export default function BottomBar(props){
    const buttonHandler = () => {
        if(props.CallingPage  == 'cart'){
        props.navigation.navigate('AddressSelection')
    }else if(props.selectedAddress == ''){
        ToastAndroid.show('Please select an address',ToastAndroid.SHORT);
        }else{
        ToastAndroid.show("This will be selected as the default address", ToastAndroid.SHORT)
        props.navigation.navigate('ConfirmOrder',props.selectedAddress)
      }

    }
  return (
    <View style={style.BottomBar}>
    {props.message ?( 
    <View style={style.finalCartTextHolder}>
      <Text style={style.finalCartText}>Your Cart Total is: 7000 💵</Text>
    </View>): (<></>)
    }
      <TouchableOpacity style={style.confirmButton} onPress={buttonHandler}>
          <Text style={style.ButtonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    BottomBar: {
        height: windowHeight * 0.07,
        width: windowWidth,
        backgroundColor: 'white',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    finalCartText:{
        fontSize: 20,
        fontWeight:'700',
    },
    finalCartTextHolder: {
        justifyContent:'center',
        margin: 10,
    },
    confirmButton: {
        justifyContent: 'center',
        backgroundColor: 'orange',
        height: windowHeight*0.05,
        width: windowWidth* 0.3,
        alignItems: 'center',
        position:'absolute',
        right: windowWidth * 0.05,
        top: windowHeight * 0.01,
        borderRadius: 20,
    },
    ButtonText:{
        fontSize: 18,
        fontWeight: '700',
        color: "white",
    }
})
