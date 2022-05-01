import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import HeaderButtons from '../components/HeaderButtons'
import EmptyCart from '../components/Cart/EmptyCart'
import { Button } from '@react-native-material/core'
import ViewCart from '../components/Cart/ViewCart'
import {windowWidth, windowHeight} from '../components/export'

export default function Cart({route,navigation}) {
  const buttonHandler = () => {
    navigation.navigate('PhoneList')
  }
  return (
    <>
    {!route.params ? (
    <View style={{flex:1,backgroundColor:'white'}}>
                <HeaderButtons title={"Cart"} navigation={navigation} backButton={true}/>   
                <EmptyCart navigation={navigation}/>
                <Button title='Continue Shopping'  titleStyle={{fontSize: 10}} onPress={buttonHandler} style={style.button}/>
                </View> )
    : (<>
      <HeaderButtons title={"Cart"} navigation={navigation}/>
      <ViewCart navigation={navigation} data={route.params}/> 
      </>)
  }
  </>
  )
}

const style = StyleSheet.create({
  button: {
    width: '30%',
    position: 'absolute',
    bottom: windowHeight * 0.05,
    right : windowWidth * 0.05,
  }
})

