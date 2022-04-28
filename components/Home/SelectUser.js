import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
} from "react-native";
import LottieView from 'lottie-react-native';
import firebase from '../../firebase'


export default function SelectUser({navigation}) {

    const user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          console.log(user)
        } else {
          // User is signed out
          // ...
        }
      });

    const handlePress = (props) => {
        props == 'expert' ? navigation.navigate('PhoneList') : props == 'noob' ? navigation.navigate('PhoneList') : <></> 
    }
    return(
        <View>
            <LottieView style={styles.gif} 
            source={require('../../assets/animations/road.json')} autoPlay/>
            <Text style={styles.pathTitle}>Select your path:</Text>
            <View style={styles.userContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.userType} onPress={() => {handlePress('noob')}}>
                    <View style={styles.gifUser}>
                    <LottieView  
                    source={require('../../assets/animations/expert-user.json')} autoPlay/>
                    </View>
                    <Text style={styles.userText}>Ameture User</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.userType} onPress={() => {handlePress('expert')}}>
                    <View style={styles.gifUser}>
                    <LottieView  
                    source={require('../../assets/animations/server-and-user.json')} autoPlay/>
                    </View>
                    <Text style={styles.userText}>Expert User</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gif: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    pathTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 25,
        marginBottom: 20,
    },
    userContainer: {
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    userType:{
        backgroundColor: '#C8C5C1',
        borderRadius:5,
        shadowColor: 'grey',
        elevation: 5,
        height: 250,
        width: 180,
        alignItems:'center',
    },
    gifUser: {
        height: 60,
        width:60,
        marginTop: 10,
        borderRadius: 20,
    },
    userText: {
        fontSize:18,
        marginTop: 5,
        fontWeight: 'bold',
    }
})