import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,} from "react-native";
import firebase from "../../firebase";
import HeaderButtons from "../HeaderButtons";
import { useSelector,useDispatch } from "react-redux"; 
import { setUser } from "../../src/actions/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = firebase.firestore();

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
        // const user = firebase.auth().currentUser;
        // console.log(user);
        // user ? navigation.navigate("PhoneList") : '';
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('user', jsonValue)
        } catch (e) {
            console.log(e)
        }
    }
    const handleSignIn = () => {
        password == "" && email == ""  ? setErrorMessage("Please enter email and password") 
        : email == "" ? setErrorMessage("Please enter valid email address") 
        : password == "" ? setErrorMessage("Please enter a valid password") :
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                console.log("signed in with ",email);
                const user = userCredential.user; 
                console.log(user)
                dispatch(setUser(user));
                storeData(user)
                if(user.emailVerified)
                {   
                    storeData(user)
                    dispatch(setUser(user));
                    navigation.navigate("Home");
                }else{
                    setErrorMessage("Please verify your email address"),
                    firebase.auth().signOut()
                }
              })
                .catch((error) => {
                const errorCode = error.code;
                setErrorMessage(error.message);
                });
            }).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    // var errorMessage = error.message;
                    console.log(errorCode,errorMessage);
                    setErrorMessage(error.message)
        });
    };

    return (
        <>
        <HeaderButtons title='Login' backButton={false} cartVisibility={true} navigation={navigation}/>
        <View style={styles.container}>
           <Image style={styles.image} source={require("../../assets/images/puzzel.png")} />
           <View>
            <Text style={styles.appTitle}>L O G I N</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={(email) => {
                        setEmail(email)
                        setErrorMessage("")}}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(password) => {
                        setPassword(password)
                        setErrorMessage("")}}
                />
            </View>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleSignIn} style={styles.loginBtn} activeOpacity={0.7}>
                <Text style={styles.notuser} >Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>(navigation.navigate('Signup'))}>
                <Text style={styles.notuserBtn}>Not a user? Signup.</Text>
            </TouchableOpacity>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        height: 50,
        width: 50,
    },

    inputView: {
        elevation: 5,
        backgroundColor: "white",
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginTop: 10,
        marginBottom: 20,
    },

    loginBtn: {
        fontWeight: 'bold',
        width: "25%",
        borderRadius: 20,
        height: '8%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#48C9B0",
        
    },

    notuserBtn: {
        height: 30,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: "center",
    },
    appTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'sans-serif',
        marginBottom: 20,
    },
})

