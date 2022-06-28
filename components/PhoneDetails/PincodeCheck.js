import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { windowHeight,windowWidth } from '../export'
import { TextInput } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'

const PincodeCheck = () => {
  const [Pincode, setPincode] = React.useState('')
  const [isValid, setIsValid] = React.useState('')

  const pincodeChecker = async() => {
      console.log('Function Called')
      await fetch('https://api.postalpincode.in/pincode/'+Pincode).then((response) => response.json())
      .then((json) => {
        console.log(json[0])
        setIsValid(json[0]);  
        }).catch((error) => {
          console.error(error);
        });
  }
  return (
    <View>  
    <View style={styles.PincodeContainer}>
      <TextInput style={styles.PincodeInput} 
            placeholder="Enter Pincode" 
            placeholderTextColor="#000" 
            keyboardType="numeric" 
            maxLength={6}
            onChangeText={(text)=>{setPincode(text),setIsValid('')}}/>
      <TouchableOpacity style={styles.PincodeButton} activeOpacity={0.7} onPress={pincodeChecker}>
        <Text style={styles.PincodeButtonText}>Check</Text>
      </TouchableOpacity> 
      </View>
      {isValid.Status == 'Error' ? (
        <View style={styles.confirmDelivery}>
        {/* <Entypo name="circle-with-cross" size={15} color="red" style={{left: 10}}/> */}
      <Text style={[styles.confirmDeliveryText,{color:'red'}]}>Pincode Not Found</Text>
      </View> ): isValid.Status == 'Success' ? (
      <View style={styles.confirmDelivery}>
          {/* <FontAwesome5 name="check-circle" size={15} color="green" style={{left: 10}}/> */}
          <Text style={styles.confirmDeliveryText}>We deliver on this pincode</Text>
      </View>): (<></>)}
    </View>
  )
}

export default PincodeCheck

const styles = StyleSheet.create({
    PincodeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: windowWidth,
        height: windowHeight * 0.05,
        flexDirection: 'row',
    },
    PincodeInput: {
        height: windowHeight * 0.045,
        width: windowWidth * 0.8,
    },
    PincodeButton: {
        height: windowHeight * 0.045,
        width: windowWidth * 0.15,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        left: 5,
        borderRadius: 5,
    },
    confirmDelivery:{
        flexDirection: 'row',
        width: windowWidth,
    },
    confirmDeliveryText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
        color: 'green',
        position: 'relative', 
    }
})