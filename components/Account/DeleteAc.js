import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import { TextField } from 'react-native-material-textfield'
import React,{useState} from 'react'
import { windowHeight,windowWidth } from '../export'
import HeaderButtons from '../HeaderButtons'
import firebase from '../../firebase'

export default function DeleteAc({navigation}) {
    const [Error,setError] = useState('');
    const [inputEmail,setInputEmail] = useState('')
    const user = firebase.auth().currentUser;

    const deleteUserAccount = () => {
        if(user.email == inputEmail){
        user.delete().then(() => {
            console.log('Account deleted')
        }).catch((error) => {
            console.log(error)
            setError(error)
        });
    }
}
    console.log(inputEmail)
  return (
    <View style={styles.DeleteAcContainer}>
        <HeaderButtons navigation={navigation} title='Delete Account'/>
        <View style={styles.DeleteAcContainer}>
        <OwnText label='Email' state={setInputEmail} inputType={'email-address'}/>
        <Text>{Error}</Text>
      <TouchableOpacity style={styles.updateBtn} activeOpacity={0.7} onPress={()=>deleteUserAccount}>
        <Text style={styles.BtnText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const OwnText = (props) =>(
    <View style={styles.ownTextContainer}>
    <TextField label={props.label} 
        containerStyle={styles.TextContainer}
        labelTextStyle={styles.labelText}
        affixTextStyle={styles.affixText}
        tintColor='#000'
        textColor='black'
        baseColor='black'
        lineType='solid' 
        lineWidth={0.6}
        labelFontSize={10}
        keyboardType={props.inputType}
        onChangeText={(text)=>props.state(text)}/>
    </View>
  );

const styles = StyleSheet.create({
    DeleteAcContainer:{
        flex:1,
        alignItems:'center',
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
})