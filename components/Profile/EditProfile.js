import { View, Text,TouchableOpacity,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React,{useState} from 'react';
import {windowHeight, windowWidth } from '../export';
import HeaderButtons from '../HeaderButtons';
import ProfilePicture from 'react-native-profile-picture';
import * as ImagePicker from 'expo-image-picker';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

export default function EditProfile({route,navigation}) {
  let imagePicker = route.params
  const [updated,setUpdated] = useState(false)

  return (
    <>
    <HeaderButtons navigation={navigation} title="Edit Profile"/>
    <TouchableWithoutFeedback>
    <>
    <View style={style.editProfileContainer}>
      <OwnText label='Name'/> 
      <OwnText label='Email'/>
      <OwnText label='Mobile Number'/>
      {updated ? (<Text>There are no chnages that needs update</Text>):(<></>)} 
      <TouchableOpacity style={style.updateBtn} activeOpacity={0.7} onPress={()=>setUpdated(!updated)}>
        <Text style={style.BtnText}>Update Changes</Text>
      </TouchableOpacity>
    </View>
    </>
    </TouchableWithoutFeedback>
    </>
  )
}

const OwnText = (props) =>(
  <View style={style.ownTextContainer}>
  <TextField label={props.label} 
      containerStyle={style.TextContainer}
      labelTextStyle={style.labelText}
      affixTextStyle={style.affixText}
      tintColor='#000'
      textColor='black'
      baseColor='black'
      lineType='solid' 
      lineWidth={0.6}
      labelFontSize={10}/>
  </View>
);

const style = StyleSheet.create({
  editProfileContainer:{
    flex:1,
    alignItems:'center',
    backgroundColor: 'white',
  },
  updateBtn: {
    width: windowWidth*0.5,
    height: windowHeight*0.06,
    backgroundColor: '#00a680',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    margin: 10,
  },
  BtnText:{
    fontSize:15,
    fontWeight:'700',
    color: 'black',
  },
  imageContainer: {
    marginTop: 20,
    marginRight: 20,
    alignSelf: 'center',
  },
  TextContainer: {
    width: windowWidth*0.8,
    borderRadius: 20,
  },
  labelText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
  },
  affixText: {
    color:'black',
  },
});