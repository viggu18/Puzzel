import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import  React ,{ useState,useEffect } from 'react';
import Loading from '../components/Home/Loading';

export default function Home({navigation}) {
  const [loading,setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => setloading(false), 3500)
                  }, [])

  return (
    <>
    {loading ? (
          <Loading />
      ):( 
        <View style={styles.parent}>
        <Image style={styles.image} source={require("../assets/images/puzzel.png")} />
        <View>
            <Text style={styles.appTitle}>P U Z Z E L</Text>
        </View>
        <View style={{marginBottom: 20}}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('Login')}>
                <Text style={{ fontSize:16}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('Signup')}>
                <Text style={{ fontSize:16}}>Signup</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.loginBtn3} onPress={() => navigation.navigate('SelectUser')}>
                <Text style={{ fontSize:16,}}>Enter as a guest</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  loginBtn: {
    borderRadius: 10,
    height: 40,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#A0A0A0",
    margin: 15
  },
  loginBtn3: {
      borderRadius: 10,
      height: 40,
      width: 150,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#A0A0A0",
      alignSelf:'center',
      margin: 15
    },
  parent: {
      //backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  image: {
      marginBottom: 40,
      height: 50,
      width: 50,
  },
  appTitle: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      fontFamily: 'sans-serif',
  }
});

