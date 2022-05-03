import { SafeAreaView, View, Text,StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import AddressBox from '../AddressBox'
import { RadioButton } from 'react-native-paper'
import { Divider } from '@react-native-material/core'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function AdressList(props){
  return (
    <SafeAreaView style={style.radioContainer}>
        <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.7} onPress={props.formDirect}>
                <View style={style.NewAddressStyle}>
                    <AntDesign name="plussquare" size={20} color="black" style={{margin:10}}/>
                    <Text style={{fontSize: 18,fontWeight: 'bold',color: 'black'}}>Add New Address</Text>
                </View>
            </TouchableOpacity>
             {props.address.map((item,index) => (   
                <AddressBox key={index} 
                    address={item} 
                    selectedAddress={props.selectedAddress} 
                    setSelectedAddress={props.setSelectedAddress}/>
            ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    radioContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    NewAddressStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        alignSelf: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 10,
      },
})

