import { View, Text, ScrollView, StyleSheet, Image,TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useState,useEffect } from 'react'
import HeaderButtons from '../HeaderButtons'
import { Divider } from '@react-native-material/core';
import { windowHeight,windowWidth } from '../export';
import firebase from '../../firebase';
const db = firebase.firestore()

export default function FullDetails({route,navigation}){
  const data = route.params;
  const image = data.Image.img1;
  // const [user,setUser] = useState('')
  console.log(data)


  const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('user')
        console.log(jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
    // error reading value
    }
}

const user = firebase.auth().currentUser
  const AddtoCart = () => {
    // user? setUser() : ''
    db.collection('users/'+user?.email+'/cart').doc(data.Name).set({data})
    .then(() => {
      ToastAndroid.showWithGravityAndOffset('Added to Cart', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 100);
    }).catch((error) => {
      console.log(error);
    })
  }

  // useEffect(() => {
  //   getData().then((data)=>setUser(data))
  // }, [])


  return (
    <>
        <HeaderButtons title={data.Name} navigation={navigation}/>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.TopSquare}>
                <Image source={{uri: image}} style={styles.Image} resizeMode={'contain'}/>
                <View style={styles.TopDetailsContainer}>
                  <MainComponenet data={data.Display}/>
                  <MainComponenet data={data.BackCamera}/>
                  <MainComponenet data={data.Chipset}/>
                  <MainComponenet data={data.Battery}/>
                </View>
              </View>
              <View style={styles.BottomComponentContainer}>
                <BottomComponenet title='Network' data={data.Network}/>
                <BottomComponenet title='Available' data={data.LaunchDate}/>
                <BottomComponenet title='Body' data={data.Weight}/>
                <BottomComponenet title='Display' data={data.Display}/>
                <BottomComponenet title='Platform' data={data.Os}/>
                <BottomComponenet title='Memory and Storage' data='Vairable Components'/>
                <BottomComponenet title='Main Camera' data={data.BackCamera}/>
                <BottomComponenet title='Selfie Camera' data={data.FrontCamera}/>
                <BottomComponenet title='Sound' data={data.Sound}/>
                <BottomComponenet title='Battery' data={data.Battery}/>
              </View>
              <View style={styles.bottomButtonContainer}>
                <TouchableOpacity 
                  style={[styles.bottomButtons]} 
                  activeOpacity={0.7}
                  onPress={AddtoCart}> 
                  <Text style={{color:'black',fontWeight:'bold'}}>Add to Cart</Text>
                </TouchableOpacity>
                </View>
          </ScrollView>
        </View>
    </>
  )
}

const MainComponenet = (props) => {
  return (
    <View style={styles.component}>
      <Text style={styles.text}>{props.data}</Text>
    </View> 
)}

const BottomComponenet = (props) => {
  return (
    <View style={styles.BottomComponenet}>
      <Text style={styles.titleText}>{props.title}</Text>
      <Divider style={styles.Divider}/>
      <Text style={styles.detailText}>{props.data}</Text>
    </View> 
)}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1
  },
  TopSquare: {
    backgroundColor: 'white',
    height: windowHeight * 0.35,
    width: windowWidth*0.9,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  Image: {
    height: windowHeight * 0.3,
    width: windowWidth*0.3,
    margin: 10,
  },
  TopDetailsContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: windowWidth*0.5,
  },
  Divider: {
    width: windowWidth*0.9,
    alignSelf: 'center',
  },
  titleText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '700',
    left: windowWidth*0.07
  },
  detailText:{
    fontSize: 15,
    left: windowWidth*0.07,
  },
  BottomComponentContainer: {
    backgroundColor: 'white',
    width: windowWidth*0.9,
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 10,
    marginBottom: 10,
  },
  BottomComponenet: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomButtons: {
    width: windowWidth,
    height: windowHeight*0.06,
    backgroundColor: '#E7E6E5',
    justifyContent: 'center',
    alignItems: 'center',
},
bottomButtonsBuyNow: {
backgroundColor: 'orange',
},
})