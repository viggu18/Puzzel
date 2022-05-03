import { View, Text,TouchableOpacity,StyleSheet,ToastAndroid} from 'react-native'
import React from 'react'
import HeaderButtons from '../components/HeaderButtons'
import AdressList from '../components/Address/AdressList'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Address=[
    {
        uid: 1,
        name: "Vignesh",
        house: "2-113E Vasudeva",
        line2: "Vivekananda Road",
        line3: "Patla Post via Parkala",
        city: "Udupi",
        state: "Karnataka",
        pincode: 576107, 
        mobile: 9481945297
    },
    {
        uid: 2,
        name: "Vignesh",
        house: "2-113E Vasudeva",
        line2: "Vivekananda Road",
        line3: "Patla Post via Parkala",
        city: "Udupi",
        state: "Karnataka",
        pincode: 576107, 
        mobile: 9481945297
    },    
    {
        uid: 3,
        name: "Vignesh",
        house: "2-113E Vasudeva",
        line2: "Vivekananda Road",
        line3: "Patla Post via Parkala",
        city: "Udupi",
        state: "Karnataka",
        pincode: 576107, 
        mobile: 9481945297
    },    
    {
        uid: 4,
        name: "Vignesh",
        house: "2-113E Vasudeva",
        line2: "Vivekananda Road",
        line3: "Patla Post via Parkala",
        city: "Udupi",
        state: "Karnataka",
        pincode: 576107,
        mobile: 9481945297 
    },    
    {
        uid: 5,
        name: "Vignesh",
        house: "2-113E Vasudeva",
        line2: "Vivekananda Road",
        line3: "Patla Post via Parkala",
        city: "Udupi",
        state: "Karnataka",
        pincode: 576107,
        mobile: 9481945297 
    },    
    {
        uid: 6,
        name: "Vignesh",
        house: "2-113E Vasudeva",
        line2: "Vivekananda Road",
        line3: "Patla Post via Parkala",
        city: "Udupi",
        state: "Karnataka",
        pincode: 576107,
        mobile: 9481945297 
    },
];

export default function AddressSelection({route,navigation}){
    const [selectedAddress,setSelectedAddress] = React.useState('');
    
    const formDirect = () => {
    navigation.navigate('AddressForm')
    }

    const buttonHandler = () => {
        ToastAndroid.show("This will be selected as the default address", ToastAndroid.SHORT)
        navigation.navigate('ConfirmOrder',selectedAddress)
      }

  return (
     <View style={style.container}> 
        <HeaderButtons title='Select Address' navigation={navigation}/>
        <AdressList navigation={navigation} 
            address={Address} 
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            formDirect={formDirect}/>
        <TouchableOpacity style={style.checkoutbtn} activeOpacity={0.7} onPress={buttonHandler}>
          <FontAwesome name="arrow-right" size={25} color="black" style={{top:16}}/>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    checkoutbtn: {
        elevation: 10,
        width: '25%',
        height: '10%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: '5%',
        right : '5%',
        borderRadius: 50,
        alignItems: 'center',
      },
})