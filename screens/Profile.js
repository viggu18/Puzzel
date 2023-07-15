import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback,ScrollView } from 'react-native'
import React, { useState} from 'react'
import firebase from '../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import { windowHeight,windowWidth } from '../components/export';
import {AntDesign} from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NullProfile from '../components/Profile/NullProfile';
import { useSelector,useDispatch } from 'react-redux';
import UserProfile from '../components/Profile/UserProfile';
import HeaderButtons from '../components/HeaderButtons';
import Options from '../components/Profile/Options';
import {Root, Popup} from 'react-native-popup-confirm-toast'

export default function Profile({navigation}) {
  const [LoginState,setLoginState] = useState(false);
  const [modalVisible,setModalVisible] = useState(false)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('');
  const [user,setUser] = useState('');
  
  const isLoggedIn = async () => {
    let user = await firebase.auth().currentUser;
    if(user == null){
      setLoginState(false);
    }else{
      setLoginState(true);
    }
    return user;
  }
  isLoggedIn().then((result)=>{
  setUser(result)
});



const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('user')
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}

  const LogOutHandler = () => {
    Popup.show({
      type: 'confirm',
      // title: 'Logout',
      textBody: 'Think about it one more time',
      buttonText: 'Logout',
      confirmText: 'Cancel',
      bounciness: 0,
      iconEnabled: false,
      modalContainerStyle: {
        width: windowWidth*0.5,
        windowHeight: windowHeight*0.5,
      },
      confirmButtonStyle:{
        backgroundColor: 'grey',
        width: windowWidth*0.4,
        alignItems: 'center',
      },
      okButtonStyle: {
        backgroundColor: '#e03636',
        width: windowWidth*0.4,
        alignItems: 'center',
      },
      cancelCallback: () => {
        Popup.hide();
    },
      callback: () => {
          firebase.auth().signOut().then(() => {
            console.log('Logout successfully')
            removeValue();
            Popup.hide();
            navigation.dispatch(StackActions.popToTop());
          }).catch((error) => {
            console.log(error)
          })
      },
  })
  }

  return (
    <>
      {LoginState == false? (
      <>
      <HeaderButtons navigation={navigation}/>
      <NullProfile navigation={navigation}/>
      </>) : (
      <Root>
        <HeaderButtons navigation={navigation} editButton={true}/>
          <ScrollView>
              <UserProfile navigation={navigation} data={user}/>
              <Options label='Account' navigation={navigation} screen='Account'/>
              <Options label='Settings' screen='Settings' navigation={navigation}/>
              <Options label='My Orders' navigation={navigation} screen='Orders'/>
              <Options label='Wishlist' navigation={navigation} screen='Wishlist'/>
              <View style={style.OptionButtons}>
                <TouchableOpacity onPress={LogOutHandler} activeOpacity={0.7}>
                  <View style={style.contentHolder}>
                    <Text style={[style.Text,{color:'red'}]}>Logout</Text>
                    <MaterialIcons name="exit-to-app" size={25} color="red"/>
                  </View>
                </TouchableOpacity>
              </View>
          </ScrollView>
      </Root>
      )}
    </>
  )
}

const style = StyleSheet.create({
  OptionButtons: {
      width: windowWidth,
      height : windowHeight*0.075,
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'flex-start',
  },
  Text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      // left: 10,
      // top: 14,
  },
  contentHolder: {
      flexDirection: 'row',
      left: '5%',
      margin: 10,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    flex:1 ,
  },
  saveButton: {
    margin: 20,
    alignItems: 'center',
    width: 150,
    padding: 13,
    position: 'relative',
    borderRadius: 30,
},
modalSelectContainer: {
  backgroundColor: 'white',
  height: 300,
  padding: 16,
  borderWidth: 1,
  borderTopColor: 'black',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
})