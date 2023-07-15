import { View,ScrollView, StyleSheet, Dimensions,Image } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = (Dimensions.get('window').height);
{console.log(windowHeight, windowWidth)}

export default function ImageScroll(props){
  console.log(props.image)
  return (
    <View style={style.imageContainer}>
      <ScrollView style={{backgroundColor:'#fff'}}
      scrollEnabled={true} 
      horizontal 
      pagingEnabled 
      snapToEnd={false} 
      onScrollAnimation>
        {props.image[0] != null ? props.image.map((img,index) => (
          <View key={index} style={{width:windowWidth}}>
            <Image style={style.image} source={{uri: img}} resizeMode='contain'/>
          </View>
        )) : (
          <View style={{width:windowWidth}}>
            <Image style={style.image} source={require('../../assets/images/displaySize/large.png')} resizeMode='contain'/>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
    imageContainer: {
      width:windowWidth,
      height:windowHeight/2,
    },
    image: {
      width : 360,
      height: (windowHeight/2)-10,
      alignContent:'center',
      left: (windowWidth/2)-160,
      margin: 25,
      marginTop: 0,
      marginLeft: -20
    },
  
  })