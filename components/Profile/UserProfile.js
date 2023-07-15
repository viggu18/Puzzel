import { View, Text,StyleSheet,TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import ProfilePicture from 'react-native-profile-picture'
import { Divider } from '@react-native-material/core';
import firebase from '../../firebase';

export default function UserProfile(props) {
  const user = firebase.auth().currentUser;
  console.log(props.data)
    const [edit,setEdit] = useState(true);  //true means edit mode is on
    const [profilePicture,setProfilePicture] = useState('')

    const getProfilePicture = async () => {
      const storage = firebase.storage();
      const storageRef = storage.ref();
      const profileRef = storageRef.child('ProfilePictures');
      const url = await profileRef.child(user.email+'.jpg').getDownloadURL();
      setProfilePicture(url);
    }
    getProfilePicture();

  return (
    <>
    <View style={style.container}>
      <View style={style.profile}>
        <TouchableOpacity style={style.imageContainer} onPress={props.ImagePickHandler}>
        <ProfilePicture
          isPicture={false} width={110} height={110} style={style.userImage} 
          user="User"
          shape='circle'
          backgroundColor='grey'
          />
        </TouchableOpacity>
        <View style={style.detailContainer}>
        <Text style={style.displayName}>{props.data.displayName}</Text>
        <Text style={style.text}>{props.data.email}</Text>
        {/* <Text style={style.text}>Mobile:</Text> */}
      </View>
    </View>
    <Divider width={80}/>
    </View>
    </>
  )
}

const style = StyleSheet.create({
    imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        marginRight: 20
        
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    displayName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    text: {
        fontSize: 10,
        color: 'grey',
    },
    detailContainer: {
        margin : 30,
        top: 2
    },
    profile: {
      flexDirection: 'row',
      width: "90%",
      backgroundColor: 'white',
      alignSelf: 'center',
      height: 180,
      backgroundColor: 'white',
    } 
})
