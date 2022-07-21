import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import HeaderButtons from '../components/HeaderButtons'
import firebase from '../firebase'
import Items from '../components/Cart/Items'


const db = firebase.firestore()

const Orders = ({navigation}) => {

    const [Phones,setPhones] = useState([])
    const [user,setUser] =useState('')


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            console.log(jsonValue)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
        // error reading value
        }
    }

    const getCart = async () => {
        const docRef = db.collection("puzzle/orders/pending");
        await docRef.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
                user.email == doc.data().user ?
                Phones.push(doc.data()) : ''
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
    }

    useEffect(() => {
        getData().then((data)=>setUser(data))
        getCart()
    }, [])
  return (
    <View style={styles.OrderContainer}>
      <HeaderButtons title='Orders' navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
          {Phones.map((item,index)=>(
            <Items key={index} data={item} display={true}/>
          ))} 
        </ScrollView>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
    OrderContainer: {
        backgroundColor: 'white',
        flex: 1
    }
})