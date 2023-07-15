import { View, Text,TouchableOpacity,StyleSheet,} from 'react-native'
import React,{useState} from 'react'
import HeaderButtons from '../components/HeaderButtons'
import AdressList from '../components/Address/AdressList'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import BottomBar from '../components/BottomBar'
import firebase,{db} from '../firebase'
import BufferScreen from '../components/BufferScreen'

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
    const [Address,setAddress] = useState([])
    const [selectedAddress,setSelectedAddress] = useState('');
    const [isLoading,setisLoading] = useState(true)

    const user = firebase.auth().currentUser
    const db = firebase.firestore()

    const docRef = db.collection("users/"+user.email+"/address");
    const getAddressList = async () => {
    console.log('Getting address list');
      await docRef.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
                Address.push(doc.data());
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
      setisLoading(false)
      console.log(Address)
    }

    isLoading ? getAddressList() : ''
   
  return (
     <View style={style.container}> 
        <HeaderButtons title='Select Address' navigation={navigation}/>
        {isLoading ? <BufferScreen/> : (<>
        <AdressList navigation={navigation} 
            address={Address} 
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}/>
        <BottomBar navigation={navigation} title='Payments' selectedAddress={selectedAddress}/>
        </>)}
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