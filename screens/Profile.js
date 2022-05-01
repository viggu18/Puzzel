import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import React, { useState} from 'react'
import firebase from '../firebase'
import {AntDesign} from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';
import NullProfile from '../components/Profile/NullProfile';
import { useSelector,useDispatch } from 'react-redux';
import UserProfile from '../components/Profile/UserProfile';
import HeaderButtons from '../components/HeaderButtons';


// const userDetail = {
//         profile_photo: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
//         name: 'Vignesh',
//         email: 'nayakvignesh18@gmail.com',
//         mobile: 9481945297,
//     }

// const user = firebase.auth().currentUser
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     console.log(user)
//   } else {
//     // User is signed out
//     // ...
//   }
// });
// {console.log(user)}



export default function Profile({navigation}) {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('');


  const userS = useSelector(state => state.globalStore.USER)
  console.log("this is from profile")
  console.log(userS)
  console.log("This is profile")

const user = firebase.auth().currentUser;
console.log(user)


  const ImagePickHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then((result) => {
      !result.cancelled ? '' : console.log('cancelled');
      console.log(result);
    })
    .then(() => { 
      user  !== null ? console.log('user is null') : 
        user.updateProfile({
        displayName: 'Vignesh',
        photoURL: result.uri
        }).then(() => {
        console.log('Profile updated successfully')
        console.log(user)
        }).catch((error) => {
        console.log(error);
        });
  });
    console.log(result);
  };

  // { URLPicture={user.photoURL} : require('../assets/images/default.jpg')}

  return (
    <>
      <HeaderButtons navigation={navigation} editButton={true}/>
      {user == null ? (<NullProfile navigation={navigation}/>) : 
            (<UserProfile navigation={navigation} data={user} ImagePickHandler={ImagePickHandler}/>)}
    </>
  )
}

