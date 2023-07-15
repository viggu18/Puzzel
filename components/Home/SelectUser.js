import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,} from "react-native";
import LottieView from 'lottie-react-native';
import firebase from '../../firebase'
import HeaderButtons from '../HeaderButtons';
import {windowHeight,windowWidth} from '../export';


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
        props == 'expert' ? navigation.navigate('GenerateDesign') : props == 'noob' ? navigation.navigate('PhoneList') : <></> 
    }
    return(
        <>
        <HeaderButtons title="Select Type" navigation={navigation}/>
        <View style={style.container}>
            <View style={style.gif}>
            <LottieView  
            source={require('../../assets/animations/road.json')} autoPlay/>
            </View>
            <Text style={style.pathTitle}>Select your path:</Text>
            <View style={style.userContainer}>
                <TouchableOpacity activeOpacity={0.7} style={style.userType} onPress={() => {handlePress('noob')}}>
                    <View style={style.gifUser}>
                    <LottieView  
                    source={require('../../assets/animations/expert-user.json')} autoPlay/>
                    </View>
                    <Text style={style.userText}>Ameture User</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={style.userType} onPress={() => {handlePress('expert')}}>
                    <View style={style.gifUser}>
                    <LottieView  
                    source={require('../../assets/animations/server-and-user.json')} autoPlay/>
                    </View>
                    <Text style={style.userText}>Expert User</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    gif: {
        width: windowWidth,
        height: windowHeight*0.3,
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
        width: windowWidth,
        height: windowHeight*0.5,
        flexDirection: 'row',
    },
    userType:{
        backgroundColor: '#C8C5C1',
        borderRadius:5,
        shadowColor: 'grey',
        elevation: 5,
        height: windowHeight*0.3,
        width: windowWidth*0.4,
        alignItems:'center',
        margin: windowWidth*0.05,
    },
    gifUser: {
        height: 60,
        width:60,
        marginTop: 10,
        borderRadius: 20,
        position: 'relative',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userText: {
        fontSize:18,
        marginTop: 5,
        fontWeight: 'bold',
    }
})