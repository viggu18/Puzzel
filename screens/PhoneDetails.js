import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import {Button} from '@react-native-material/core'
import ImageScroll from '../components/PhoneDetails/ImageScroll';
import Details from '../components/PhoneDetails/Details';
import HeaderButtons from '../components/HeaderButtons';
import {windowWidth, windowHeight} from '../components/export';


export default function PhoneDetails({route,navigation}){
  let data = route.params;
  let image = [];
  {console.log(data)}
  {Object.values(route.params.Image).map((value) => (
    image.push(value)
  ))}
  return (
    <View style={{flex:1}}>
    <HeaderButtons title={data.Name} navigation={navigation} cartVisibility={true}/>
    <View style={style.container}>
      <ScrollView>
        <ImageScroll image={image}/>
        <Divider width={1.8}/>
        <Details data={data} navigation={navigation}/>
        <Button title="Customise" style={style.button} onPress={() => navigation.navigate('Tabs',data)}/>
      </ScrollView>
      <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={style.bottomButtonsAddtoCart} activeOpacity={0.7}> 
              <Text style={{color:'black',fontWeight:'bold'}}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.bottomButtonsBuyNow} activeOpacity={0.7}> 
              <Text style={{color:'white',fontWeight:'bold'}}>Buy Now</Text>
          </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomButtonsAddtoCart: {
          width: '50%',
          height: 50,
          backgroundColor: '#E7E6E5',
          justifyContent: 'center',
          alignItems: 'center',
          bottom:0,
          shadowColor: '#171717',
  },
  bottomButtonsBuyNow: {
    width: '50%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    bottom:0,
},
button: {
  width: '30%',
  height: 30,
  // position: 'absolute',
  bottom: windowHeight * 0.06,
  left : windowWidth * 0.68,
  textAlign: 'center',
  justifyContent: 'center',
},
})