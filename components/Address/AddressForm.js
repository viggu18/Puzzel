import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import TextInput from 'react-native-material-textinput'
import HeaderButtons from '../HeaderButtons'


export default function AddressForm({navigation}){
    const saveAddress = () => {
        navigation.canGoBack() ? navigation.goBack() : ''
    }
    
  return (
    <>
    <HeaderButtons navigation={navigation}/>
    <View style={styles.container}>
        <CustomTextInput name='Name'/>
    </View>
    </>
  )
};

const CustomTextInput = (props) => {
    return (
    <View style={styles.fromContainer}>
        <TextInput labelActiveColor='black' 
            activeColor="black"
            label={props.name} 
            underlineActiveColor='black'
            errorColor='red'
            style={styles.material_input}/>
    </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    fromContainer: {
        width: "70%",
        alignSelf: 'center',
    },
    material_input: {
        padding: 10,
    },
})