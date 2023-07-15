import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React,{useEffect, useState} from 'react'
import HeaderButtons from '../components/HeaderButtons'
import Items from '../components/Cart/Items'
import AddressBox from '../components/AddressBox'
import firebase from '../firebase'
import BufferScreen from '../components/BufferScreen'
import Bill from '../components/Cart/Bill'
import BottomBar from '../components/BottomBar'
import CustomItem from '../components/Cart/CustomItem'

const db = firebase.firestore();
export default function ConfirmOrder({route,navigation}){
  console.log(route.params)
  const [Phones,setPhones] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [cartTotal,setCartTotal] = useState(0);

  const user = firebase.auth().currentUser;

  const getCart = async () => {
    const docRef = db.collection("users/"+user.email+"/cart");
    await docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
            Phones.push(doc.data());
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
  setIsLoading(false);
}
  Phones[0] == null ? getCart(): ''

  const getCartTotal= async() => {
    var cartT = 0;
    Phones.map((item) => {
      item.Price ? 
      cartT += parseInt(item.Price) : cartT += item.data.Price
    })
    return cartT;
  }


    getCartTotal().then((result)=>{
      setCartTotal(result)
      console.log(result)
    })

  


  console.log(Phones)
  return (
    <View style={style.ConfirmOrder}>
        <HeaderButtons title='Confirm Order' navigation={navigation}/>
        {isLoading ? ( <BufferScreen /> ) : (<>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Phones.map((item,index)=>(
            // <Items key={index} data={item} display={true}/>
            !item.componentPosition?
            (<Items key={index} data={item} display/>):
            (<CustomItem key={index} data={item} display/>)
          ))}
            <AddressBox address={route.params} addressDisplay={true}/>
            <Bill cartValue={cartTotal}/>
        </ScrollView>
        <BottomBar title={'Pay ₹'+ cartTotal} navigation={navigation} CallingPage='ConfirmOrder' routeData={route.params}/>
        </>
        )}
    </View>
  )
}

const style = StyleSheet.create({
  ConfirmOrder: {
    flex: 1
  }
})