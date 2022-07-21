import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import  React ,{ useState,useEffect } from 'react';
import Loading from '../components/Home/Loading';
import { windowHeight,windowWidth } from '../components/export';
import firebase from '../firebase';
import Home from '../components/Home/Home'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';



export default function EntryScreen({navigation}) {
  const [loading,setloading] = useState(false);
  const [loginState,setLoginState] = useState(null);

  
  console.log(loginState)

  const getData = async () => {
    try {
    const jsonValue = await AsyncStorage.getItem('user')
    jsonValue != null ? setLoginState(true) : setLoginState(false);
    } catch(e) {
    console.log(e)
    }
  }


  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
    {loading == true ? (
          <Loading />
      ): loginState == false ? ( 
        <View style={styles.parent}>
        <Image style={styles.image} source={require("../assets/images/puzzel.png")} resizeMode={'contain'}/>
        <View>
            <Text style={styles.appTitle}>P U Z Z E L</Text>
        </View>
        <View style={styles.BtnContainer}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
                <Text style={{ fontSize:16}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('Signup')} activeOpacity={0.7}>
                <Text style={{ fontSize:16}}>Signup</Text>
            </TouchableOpacity>
        </View>
        {/* <View>
            <TouchableOpacity style={styles.guestBtn} onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
                <Text style={{ fontSize:16,}}>Enter as a guest</Text>
            </TouchableOpacity>
        </View> */}
        </View>
    </View>
      ):(<Home navigation={navigation}/>)}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  BtnContainer: {
    position: 'absolute',
    bottom: windowHeight*0.03,
  },
  loginBtn: {
    height: windowHeight*0.1,
    width: windowWidth*0.4,
    margin: windowWidth*0.03,
    elevation: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#48C9B0',
  },
  guestBtn: {
      height: windowHeight*0.1,
      width: windowWidth,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#A0A0A0",
      alignSelf:'center',
    },
  parent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
  },
  image: {
      height: windowHeight*0.18,
      width: windowWidth*0.18,
  },
  appTitle: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      fontFamily: 'sans-serif',
  }
});

