import { View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'
import LottieView from 'lottie-react-native'

export default function AddressBox(props){
    const handler = () => {
        props.setSelectedAddress(props.address)
    }
  return (
    <View style={style.container}>
        {!props.addressDisplay ? (
        <TouchableOpacity activeOpacity={1} style={{flexDirection:'row'}} onPress={handler}>
            <View style={{top:30}}>
            <RadioButton 
                value={props.address.uid}
                status={props.selectedAddress.uid === props.address.uid ? "checked" : 'unchecked'}
                onPress={handler}
                color='black'/>
            </View>
            <View style={style.box}>
                <Text style={[style.text,{fontWeight:'bold',marginTop:10}]}>{props.address.name}</Text>
                <Text style={style.text}>{props.address.house},{props.address.road}</Text>
                <Text style={style.text}>{props.address.line3},{props.address.city},{props.address.state}-{props.address.pincode}</Text>
                <Text style={style.text}>{props.address.mobile}</Text>
            </View>
        </TouchableOpacity>) : (
            <View style={{flexDirection:'row'}}>
            <View style={style.animation}>
                <LottieView source={require('../assets/animations/address.json')} autoPlay loop/>
            </View>
            <View style={[style.box,{left:10}]}>
            <Text style={[style.text,{fontWeight:'bold',marginTop:10}]}>{props.address.name}</Text>
            <Text style={style.text}>{props.address.house},{props.address.road}</Text>
            <Text style={style.text}>{props.address.line3},{props.address.city},{props.address.state}-{props.address.pincode}</Text>
            <Text style={style.text}>{props.address.mobile}</Text>
            </View>
            </View>
        )} 
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
        elevation: 10,
    },
    box: {
        height: 100,
        width: '100%',
    },
    animation: {
        height: 80,
        width: 70,
        backgroundColor: 'white'
    }
})

