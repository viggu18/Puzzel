import { View, Text, StyleSheet,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import SwitchSelector from "react-native-switch-selector";

const SelectVariant = () => {
  return (
        <TouchableWithoutFeedback>
            <View style={style.modalContainer}>
                <View style={style.modalSelectContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                        <TouchableOpacity activeOpacity={0.7} style={style.saveButton}>
                            <Text style={{color:'white', fontSize: 20}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        )
    };

export default SelectVariant


const style = StyleSheet.create({
    // modalContainer: {
    //     justifyContent: 'flex-end',
    //     flex:1 ,
    // },
    modalSelectContainer: {
        backgroundColor: 'white',
        height: 400,
        padding: 16,
        borderWidth: 1,
        borderTopColor: 'black',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        width: 300,
        padding: 13,
        position: 'relative',
        borderRadius: 30,
    }
})