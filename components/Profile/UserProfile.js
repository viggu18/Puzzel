import { View, Text,StyleSheet,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import ProfilePicture from 'react-native-profile-picture'
import { Divider } from '@react-native-material/core';
import firebase from '../../firebase';

export default function UserProfile(props) {
  const user = firebase.auth().currentUser;
    const [edit,setEdit] = React.useState(true);  //true means edit mode is on
  return (
    <>
    <View style={style.container}>
      <View style={style.profile}>
        <TouchableOpacity style={style.imageContainer} onPress={props.ImagePickHandler}>
          {props.data.photoURL ? (<ProfilePicture width={120} height={120} style={style.userImage} 
            isPicture={true} 
            shape='circle' 
            requirePicture={require('../../assets/images/default.jpg')}
            />) 
            : (<ProfilePicture width={80} height={80} style={style.userImage} 
            isPicture={true} 
            shape='circle' 
            URLPicture={props.data.photoURL}
            />)}
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
    imageContainer: {
        marginTop: 30,
        marginBottom: 50
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
