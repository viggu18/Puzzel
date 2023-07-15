import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react';
import ProfilePicture from 'react-native-profile-picture'



export default function ProfileUserLogin({ navigation }) {
  const ButtonHandler = (props) => {
  if(props == 1){
      navigation.navigate('Login')
    }
   else{
      navigation.navigate('Signup')
    }
  }
  return (
    <View style={style.container}>  
    <TouchableOpacity style={style.imageContainer} activeOpacity={1}>
      <ProfilePicture width={150} height={150} style={style.userImage} 
            isPicture={true} 
            shape='circle' 
            requirePicture={require('../../assets/images/default.jpg')}/>
    </TouchableOpacity>
    <Text style={style.detail}>Profile and User Details will be visible after login</Text>
      <View style={style.detailContainer}>
          <TouchableOpacity style={[style.button,{left: 60}]} onPress={()=>ButtonHandler(1)}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button,{right:60}]} onPress={()=>ButtonHandler(2)}>
            <Text>Signup</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  imageContainer: {
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 50
  },
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center'
  },
  detail: {
      alignContent: 'center',
      textAlign: 'center',
      color: 'red',
  },
  detailContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
},
  text: {
    marginRight: 200,
  },
  button: {
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
    position: 'absolute',
    bottom: 300,
  },
})
