import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { windowHeight, windowWidth } from '../../../../components/export'
import firebase from '../../../../firebase'
const db = firebase.firestore();


const BottomBar = (props) => {
    const [user,setUser] = useState('');
    const [saved,setSaved] = useState(false)
    const [CartAdded,setCartAdded] = useState(false)
    console.log(user)

    const getUser = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem('user')
        console.log(jsonValue)
        setUser(JSON.parse(jsonValue))
        // return jsonValue != null ? JSON.parse(jsonValue) : null
        return 
        } catch(e) {
            console.log(e)
        }
        console.log('New Done.')
    }

    useEffect(() => {
        getUser()
    },[])

    const goHome = () =>{
        props.navigation.pop(9)
        props.navigation.goBack() 
    }

    const goCart = () => {
      props.navigation.pop(9)
      props.navigation.goBack() 
      props.navigation.navigate('CartNav')
    }

    const AddToCart = () => {
        db.collection('users/'+user?.email+'/'+'cart').doc(props.data.Name).set(props.data)
        .then(() => {
          ToastAndroid.showWithGravityAndOffset('Added to Cart', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 100);
        }).catch((error) => {
          console.log(error);
        })
        setCartAdded(true)
      }

      const SaveDevice = () => {
        db.collection('users/'+user?.email+'/'+'savedDevices').doc(props.data.Name).set(props.data)
        .then(() => {
          ToastAndroid.showWithGravityAndOffset('Device Saved', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 100);
        }).catch((error) => {
          console.log(error);
        })
        setSaved(true)
      }


  return (
    <View style={styles.BottomBarContainer}>
        <View style={styles.ButtonHolder}>
            <TouchableOpacity onPress={!saved ? SaveDevice : goHome} style={[styles.Button,{backgroundColor: 'beige'}]} activeOpacity={0.6}>
                    <Text style={styles.Text}>{!saved ? 'Save Device': 'Go Home'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={!CartAdded ? AddToCart : goCart} style={[styles.Button,{backgroundColor: 'orange'}]} activeOpacity={0.6}>
                    <Text>{!CartAdded ? 'Add to Cart':'Go To Cart'}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
    BottomBarContainer: {
        width: windowWidth,
        height: 'auto',
        elevation: 10
    },
    ButtonHolder: {
        width: windowWidth,
        height: windowHeight * 0.07,
        flexDirection: 'row'
    },
    Button: {
        width: windowWidth*0.5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})