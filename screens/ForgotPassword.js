import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from '@react-native-material/core'
import { windowHeight,windowWidth } from '../components/export'
import firebase from '../firebase'

export default function ForgotPassword({navigation}){
    const [email,setEmail] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const [successMessage,setSuccessMessage] = useState(false);

    const errorHandler = (error) => {
        error == 'The email address is badly formatted.' ? setErrorMessage('Invalid Email Address') : setErrorMessage(error);
    }

    const resetPassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                console.log('EMAIL SENT');
                setSuccessMessage(true);
                firebase.auth().signOut().then(() => {
                    console.log('User has been logged out');
                  }).catch((error) => {
                    console.log(error)
                })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                errorHandler(errorMessage);
            });
    }

    return (
    <View style={style.container}>
        <Text style={style.text}>Reset Password</Text>
        <TextInput placeholder='Enter your email' onChangeText={(text)=>setEmail(text)} style={style.InputText}/>
        <Text style={{color:'red'}}>{errorMessage}</Text> 
        <TouchableOpacity onPress={resetPassword} style={style.resetButton} activeOpacity={0.7}>
            <Text>Reset Password</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 25,
    },
    text: {
        fontSize: 25,
        fontWeight: '700'
    },
    InputText: {
        width: windowWidth * 0.6,
        height: windowHeight * 0.08,
        margin: 10,
        padding: 5,
        fontSize: 15,
        fontWeight: '700',
        color: '#000',
        borderRadius: 30,
    },
    resetButton: {
        backgroundColor: '#00bcd4',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: windowWidth * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
})