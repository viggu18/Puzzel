import { View, Text, StyleSheet, ScrollView, TouchableOpacity,ToastAndroid } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import firebase,{db} from '../firebase';
import {Button} from '@react-native-material/core'
import ImageScroll from '../components/PhoneDetails/ImageScroll';
import Details from '../components/PhoneDetails/Details';
import HeaderButtons from '../components/HeaderButtons';
import {windowWidth, windowHeight} from '../components/export';

export default function PhoneDetails({route,navigation}){
  const user = firebase.auth().currentUser;
  const ram = [
    { label: "6 GB", value: "6GB" },
    { label: "8 GB", value: "8GB" },
    { label: "12 GB", value: "12GB" },
  ];
  
  const storage = [
    { label: "64 GB", value: "64GB" },
    { label: "128 GB", value: "128GB" },
    { label: "256 GB", value: "256GB" },
    { label: "512 GB", value: "512GB" },
  ];

  const [storageSelection, setStorageSelection] = React.useState({
    Memory: ram[0].value,
    Storage: storage[0].value,
  });

  let data = route.params;
  let image = [];
  {console.log(data)}
  {Object.values(route.params.Image).map((value) => (
    image.push(value)
  ))}

  const AddtoCart = () => {
    db.collection('users/'+user.email+'/cart').doc(data.Name).set({data,storageSelection})
    .then(() => {
      ToastAndroid.showWithGravityAndOffset('Added to Cart', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 100);
    }).catch((error) => {
      console.log(error);
    })
  }
  
  const SendToWishlist = () => {
    db.collection('users/'+user.email+'/wishlist').doc(data.Name).set({data,storageSelection})
    .then(() => {
      ToastAndroid.showWithGravityAndOffset('Added to wishlist', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 100);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <View style={style.container}>
    <HeaderButtons title={data.Name} navigation={navigation} cartVisibility={true}/>
    <ScrollView showsVerticalScrollIndicator={false}>
        <ImageScroll image={image}/>
        <Divider width={1.8}/>
        <Details 
              data={data} navigation={navigation} 
              storageSelection={storageSelection} 
              setStorageSelection={setStorageSelection}
              ram={ram}
              storage={storage}/>
      </ScrollView>
      <View style={style.bottomButtonContainer}>
          <TouchableOpacity 
            style={[style.bottomButtons]} 
            activeOpacity={0.7}
            onPress={AddtoCart}> 
              <Text style={{color:'black',fontWeight:'bold'}}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[style.bottomButtons,style.bottomButtonsBuyNow]} 
            activeOpacity={0.7}
            onPress={SendToWishlist}> 
              <Text style={{color:'white',fontWeight:'bold'}}>Add to Wishlist</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    alignSelf: 'flex-end'
  },
  bottomButtons: {
          width: windowWidth*0.5,
          height: windowHeight*0.06,
          backgroundColor: '#E7E6E5',
          justifyContent: 'center',
          alignItems: 'center',
  },
  bottomButtonsBuyNow: {
    backgroundColor: 'orange',
  },

})