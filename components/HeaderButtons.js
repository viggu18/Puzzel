import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const windowWidth = Dimensions.get('window').width;


const HeaderButtons = (props) => {
    const back = () =>{
        // props.navigation.pop();
        if(props.navigation.canGoBack()) {
            console.log("going back")
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
        {props.cartVisibility ? (<TouchableOpacity onPress={() => props.navigation.navigate('Cart')} style={{right:0,position: 'absolute'}}>
            <Ionicons name="cart-sharp" size={32} color="black" style={{margin:10}}/>
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
        height: 50,
        backgroundColor:'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderTitle: {
        fontSize: 20,
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
        top: 0,
        position: 'absolute',
    }
})