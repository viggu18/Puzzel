import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import React,{useState,useEffect} from 'react'
import { windowHeight,windowWidth } from '../components/export'
import HeaderButtons from '../components/HeaderButtons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import firebase from '../firebase'
const db = firebase.firestore();

export default function GenerateDesign({navigation}) {
  const [Budget,setBudget] = useState(0)
  const [Phones,setPhones] = useState([])
  const [selected,setSelected] = useState([])
  const [errorMessage,setErrorMessage] = useState('')
  const [user,setUser] = useState('')
  console.log(errorMessage)
  console.log(selected)

  const selectionHandler = (item) =>{
    !selected.includes(item) ? selected.push(item) : selected.splice(selected.indexOf(item),1)
  } 

  const BudgetHandler = (price) => {
    price <= 15000 ? setBudget(15000) :
    price > 15000 && price < 30000 ? setBudget(30000) : price > 30000 && price < 50000 ? setBudget(50000) : setBudget(50000)
  }

  const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('user')
        console.log(jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
    // error reading value
    }
}
  const phoneFilter = () => {
    let def = Phones[0];
    Phones.map((item)=>{
      if (Math.abs(Budget - def.Price) > Math.abs(Budget - item.Price))
        {
            def = item;
        }
    })
    def ? navigation.navigate('FullDetails',def) : ''
  }

  const getPhones = async () => {
    const docRef = db.collection("puzzle/stockDesigns/"+Budget);
    await docRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
              Phones.push(doc.data())
              console.log('done')
          }
        );
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    phoneFilter();
  }

  const items = [
    {title: 'Camera',},
    {title: 'Display',},
    {title: 'Processor',},
    {title: 'Battery',}
  ]

  useEffect(() => {
    getData().then((data)=>setUser(data))
}, [])

  
  return (
    <>
    <HeaderButtons navigation={navigation} title='Generate Design'/>
    <View style={styles.SelectableContainer}>
      {items.map((item, index) => (
      <Selectables title={item.title} key={index} handler={selectionHandler}/>
      ))}
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <View style={styles.bottomContainer}>
      <TextInput style={styles.budgetInput} 
            placeholder="Enter Budget" 
            placeholderTextColor="#000" 
            keyboardType="numeric" 
            maxLength={6}
            onChangeText={(text)=>BudgetHandler(text)}/>
      <TouchableOpacity style={styles.GenerateButton} onPress={getPhones}>
          <Text style={styles.SelectableText}>Generate</Text>
      </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

const Selectables = (props) =>{
  const [logoVisible,setLogoVisible] = useState(false)
  return(
  <TouchableOpacity activeOpacity={0.6} 
    onPress={()=>{props.handler(props.title),setLogoVisible(!logoVisible)}} style={styles.Selectables}> 
    <View style={[styles.Selectables,{backgroundColor: logoVisible ? 'green' : 'white',}]}> 
     <Text style={styles.SelectableText}>{props.title}</Text>
     {logoVisible ? (
     <AntDesign name='check' size={20} color='black' style={styles.checkedIcon}/>): 
     (<></>)}
    </View>
  </TouchableOpacity>
);
}
const styles = StyleSheet.create({
  SelectableContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    // flexDirection: 'row',
  },
  Selectables: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    height: windowHeight*0.08,
    width: windowWidth*0.9,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    elevation: 5,
  },
  SelectableText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  budgetInput: {
    height: windowHeight * 0.055,
    width: windowWidth * 0.8,
    bottom: 0,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    height: windowHeight * 0.06,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  GenerateButton: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.2,
    backgroundColor: 'purple',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  checkedIcon: {
    right: 15,
    top: (windowHeight*0.08)*0.3,
    position: 'absolute',

  }
})