import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
import { windowWidth,windowHeight } from '../export';

export default function PayOption(props){
  return (
    <TouchableOpacity onPress={()=>props.selectedPaymentOption(props.label)} activeOpacity={0.9} style={style.PayOptionContainer}>
    <View style={{flexDirection: 'row',alignSelf: 'flex-start'}}>
        <RadioButton 
            value={props.label}
            status={props.paymentOption === props.label ? "checked" : 'unchecked'}
            onPress={()=>props.selectedPaymentOption(props.label)}
            color='black'/>
        <Text style={style.PayText}>{props.label}</Text>
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
        // justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        margin: 5,
      },
      PayText: {
        fontSize: 20,
        margin: 10
      },
})
