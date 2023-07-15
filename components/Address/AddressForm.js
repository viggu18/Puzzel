import { View, Text, StyleSheet,TouchableOpacity,ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import TextInput from 'react-native-material-textinput'
import { windowHeight, windowWidth } from '../export'
import HeaderButtons from '../HeaderButtons'
import { Checkbox } from 'react-native-paper'
import firebase,{db} from '../../firebase'

export default function AddressForm({navigation}){
    const user = firebase.auth().currentUser;

    const [Name,setName] = useState('');
    const [Phone,setPhone] = useState('')
    const [BuildingName,setBuildingName] = useState('');
    const [AdditionalInfo,seAdditionalInfo] = useState('')
    const [City,setCity] = useState('')
    const [State,setState] = useState('')
    const [Pincode,setPincode] = useState('')
    const [defaultAddress,setDefaultAddress] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')

    const saveAddress = async() => {
        Name == '' ? setErrorMessage('Please enter your name') : Phone == '' ? setErrorMessage('Phone number is required') :
        BuildingName == '' || AdditionalInfo == '' || City == '' || State == ''? 
        setErrorMessage('Please enter your complete address') : Pincode == '' ? setErrorMessage('Pincode required'): 
        await db.collection('users/'+user.email+'/address').add({
            Name: Name,
            Phone: Phone,
            HouseName:BuildingName,
            AdditionalInfo: AdditionalInfo,
            City: City,
            State: State,
            Pincode: Pincode,
            isDefault: defaultAddress,
        })
        .then(() => {
          ToastAndroid.showWithGravityAndOffset('Address Saved', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 100);
          navigation.canGoBack ? navigation.pop(): ''
        }).catch((error) => {
          console.log(error);
        })
      }

  return (
    <>
    <HeaderButtons navigation={navigation} title='Address'/>
    <View style={styles.container}>
        <CustomTextInput name='Name' state={setName}/>
        <CustomTextInput name='Phone Number' state={setPhone} numeric/>
        <CustomTextInput name='House Name' state={setBuildingName}/>
        <CustomTextInput name='Address Box' state={seAdditionalInfo}/>
        <CustomTextInput name='City' state={setCity}/>
        <CustomTextInput name='State'state={setState}/>
        <CustomTextInput name='PinCode' state={setPincode} numeric/>
        <View style={styles.Checkbox}>
            <Checkbox
                status={defaultAddress ? 'checked' : 'unchecked'}
                onPress={() => {setDefaultAddress(!defaultAddress)}}/>
            <Text>Set this as your default Address</Text>
        </View>
        <Text>{errorMessage}</Text>
        <TouchableOpacity style={styles.updateBtn} activeOpacity={0.7} onPress={saveAddress}>
            <Text style={styles.BtnText}>Save Address</Text>
        </TouchableOpacity>
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
            style={styles.material_input}
            keyboardType={props.numeric ? 'numeric' : 'default'}
            onChangeText={(text)=>props.state(text)}/>
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
      Checkbox: {
          flexDirection: 'row',
          alignItems: 'center',
          left: windowWidth * 0.15,
      }
})