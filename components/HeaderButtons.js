import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons,FontAwesome5} from 'react-native-vector-icons'

import { windowHeight,windowWidth } from './export'

const HeaderButtons = (props) => {
    const back = () =>{
        if(props.navigation.canGoBack()) {
            props.navigation.goBack();
          }
    }
  return (
    <>
    <View style={style.HeaderContainer}>
        <View style={style.HeaderLeft}>
        {props.backButton == false ? <></> : (<TouchableOpacity onPress={back}>
        <Ionicons name="arrow-back-circle-sharp" size={32} color="black" style={{margin:10}}/>
        </TouchableOpacity>)}
        </View>

        <View style={style.HeaderTitleContainer}>
            <Text style={style.HeaderTitle}>{props.title}</Text>
        </View>

        <View style={style.cart}>
        {props.cartVisibility ? (
        <TouchableOpacity onPress={() => props.navigation.navigate('CartNav')}>
            <Ionicons name="cart-sharp" size={32} color="black" style={{margin:10}}/>
        </TouchableOpacity>): <></>}
        </View>

        <View style={style.cart}>
        {props.editButton ? (
        <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile')}>
            <FontAwesome5 name="user-edit" size={28} color="black" style={{margin:10}}/>
        </TouchableOpacity>): <></>}
        </View>
    </View>
    </>
  )
}

export default HeaderButtons

const style = StyleSheet.create({
    HeaderContainer: {
        width: windowWidth,
        height: windowHeight*0.07,
        backgroundColor:'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        // justifyContent: 'center',
    },
    HeaderTitleContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    // left:60,
    },
    HeaderLeft: {
        left:0,
        position: 'absolute',
    },
    cart: {
        right:0,
        position: 'absolute',
    }
})