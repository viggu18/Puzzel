import React, {useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet,TextInput, TouchableOpacity } from 'react-native'
import { windowHeight,windowWidth } from '../export'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SpeechToText from 'react-native-google-speech-to-text';

export default function SearchBar(props){

    const speechToTextHandler = async () => {
    let speechToTextData = null;
            try {
                speechToTextData = await SpeechToText.startSpeech('Try saying something', 'en_IN');
                console.log('speechToTextData: ', speechToTextData);
     
            } catch (error) {
                console.log('error: ', error);
            }
    }
    

    return(
        <View style={style.searchBarContainer}>
            <View style={style.searchBar}>
                <TextInput placeholder='Search' style={style.TextInput} onChangeText={(text)=>{props.setSearchKey(text),props.searchHandler()}}/>
                <TouchableOpacity style={style.mic} onPress={speechToTextHandler}>
                    <Ionicons name="mic" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={style.searchIcon}>
                    <Ionicons name="ios-search" size={20} color="black"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    searchBarContainer:{
        width: windowWidth,
        height: windowHeight*0.06,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    searchBar:{
        width: windowWidth - windowWidth*0.1,
        height: windowHeight*0.05,
        alignSelf: 'center',
        backgroundColor: '#d9dbde',
        borderRadius:30,
        // justifyContent:'center',
        flexDirection: 'row'
    },
    TextInput:{
        width: windowWidth*0.9,
        alignSelf: 'center',
        margin: 10,
    },
    mic: {
        position: 'absolute',
        alignSelf: 'center',
        right: windowWidth*0.08,
    },
    searchIcon:{
        alignSelf: 'center',
        right: windowWidth*0.02,
        position: 'absolute',
    },
})