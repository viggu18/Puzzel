import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import firebase from "../../firebase";
import HeaderButtons from "../HeaderButtons";
import { useSelector,useDispatch } from "react-redux"; 
import { ACTION_TYPE } from "../../src/actions/global";

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignIn = () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                console.log("signed in with ",email);
                const user = userCredential.user; 
                dispatch({type: ACTION_TYPE.SAVE_USER_DATA, payload: user});
                navigation.navigate('Profile');
                })
                .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage(error.message);
                });
            }).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    // var errorMessage = error.message;
                    console.log(errorCode,errorMessage);
                    setErrorMessage(error.message)
        });




        // firebase.auth().currentUser.sendEmailVerification()
        // .then(() => {
        // // Email verification sent!
        // // ...
        // });
        
        // auth.signInWithEmailAndPassword(email, password)
        // .then((userCredential) => {
        // console.log("signed in with ",email); 
        // const user = userCredential.user;
        // navigation.navigate("SelectUser");
        // // ...
        // })
        // .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // }).then((error)=>{console.log(error)});
        // console.log(email,password);
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
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <TouchableOpacity>
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
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        height: 50,
        width: 50,
    },

    inputView: {
        backgroundColor: "#A0A0A0",
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
        width: "20%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#A0A0A0",
        
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

