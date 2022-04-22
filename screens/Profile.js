import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import React, { useState} from 'react'
import ProfilePicture from 'react-native-profile-picture'
import firebase from '../firebase'
import {AntDesign} from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';
import NullProfile from '../components/Profile/NullProfile';
import { useSelector,useDispatch } from 'react-redux';



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
  const [edit,setEdit] = useState(true);  //true means edit mode is on

  const user = useSelector(state => state.user.USER)
  console.log("this is from profile")
  console.log(user)
  console.log("This is profile")

// const user = firebase.auth().currentUser;
// console.log(user)
if(user !== null){
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const mail = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const mobile = user.phoneNumber;
  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getIdToken() instead.
  const uid = user.uid;
  {console.log(user.displayName)}
}
  else{
  // alert('User not logged in')
}


  const ImagePickHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then((result) => {
      !result.cancelled ? '' : console.log('cancelled');
      console.log(result);
    }).then(() => { 
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
      user == null ? (<NullProfile navigation={navigation}/>) : (
    <View style={style.container}>  
    <TouchableOpacity style={style.imageContainer} onPress={ImagePickHandler}>
      {user.photoURL == null ? (<ProfilePicture width={150} height={150} style={style.userImage} 
            isPicture={true} 
            shape='circle' 
            requirePicture={require('../assets/images/default.jpg')}
            />) 
            : (<ProfilePicture width={150} height={150} style={style.userImage} 
            isPicture={true} 
            shape='circle' 
            URLPicture={user.photoURL}
            />)}
    </TouchableOpacity>
      <View style={style.detailContainer}>
        <Text style={style.text}>Name:</Text>
          <View style={style.inputHolder}>
            <TextInput 
            style={style.details} 
            editable={edit} 
            placeholder="Enter your name" ></TextInput>
          </View>
        <Text style={style.text}>Email:</Text>
          <View style={style.inputHolder}>
            <TextInput 
            style={style.details} 
            editable={edit} 
            placeholder="Enter your email" ></TextInput>
          </View>
        <Text style={style.text}>Mobile:</Text>
          <View style={style.inputHolder}>
            <TextInput 
            style={style.details} 
            editable={edit} 
            placeholder="Enter your Mobile Number" ></TextInput>
            </View>
      </View>
    </View>
  )
  )
}

const style = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#BEBCBA',
        alignItems: 'center'
    },
    details: {
        alignContent: 'center',
        textAlign: 'center',
    },
    detailContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
  },
    inputHolder: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "60%",
        height: 30,
        marginBottom: 20,
        alignItems: "center",
    },
    text: {
      marginRight: 200,
    },
})
