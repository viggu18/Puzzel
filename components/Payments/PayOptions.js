import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
import { windowWidth,windowHeight } from '../export';

export default function PayOption(props){
  return (
    <TouchableOpacity onPress={()=>props.selectedPaymentOption(props.label)} activeOpacity={0.9} style={style.PayOptionContainer}>
    <View style={{flexDirection: 'row',alignSelf: 'flex-start'}}>
      <View style={style.RadioButtonContainer}>
        <RadioButton 
            value={props.label}
            status={props.paymentOption === props.label ? "checked" : 'unchecked'}
            onPress={()=>props.selectedPaymentOption(props.label)}
            color='black'/>
      </View>
      <View style={style.ContentContainer}>
        <Image source={props.img} style={style.image} resizeMode='contain'/>
        <Text style={style.PayText}>{props.label}</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    PayOptionContainer: {
        backgroundColor: 'white',
        width: windowWidth - windowWidth*0.05,
        height: windowHeight * 0.15,
        elevation: 10,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 10,
        alignSelf: 'center'
      },
      RadioButtonContainer: {
        justifyContent:'center',
        alignContent: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        marginLeft: 20,
        width: windowWidth * 0.10,
        height: windowHeight * 0.15,
      },
      ContentContainer: {
        alignSelf:'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
        width: windowWidth * 0.6,
        position: 'relative'
      },
      PayText: {
        fontSize: 10,
        justifyContent: 'center'

      },
      image: {
        width: '20%',
        height: '30%'
      }
})
