import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import { OutlinedTextField } from 'react-native-material-textfield'
import { windowHeight,windowWidth } from '../../components/export'
import { setPhone } from '../../src/actions/actions'
import { useDispatch,useSelector } from 'react-redux'

const GetName = ({navigation}) => {
    const [deviceName,setDeviceName] = useState({key: 'Name',value: ''});
    const dispatch = useDispatch()
    const name = useSelector(state=>state.phone)
    console.log(name)
    const handlerSubmit = () => {
        // if(deviceName.length>3){
            // dispatch(setPhone(deviceName));
            navigation.navigate('SelectDisplay');
        // }
      }
      const data = useSelector(state=>state.phone)
      console.log(data)
    
  return (
    <>
    <View style={styles.getNameContainer}>
      <HeaderButtons navigation={navigation} title='Get a name'/>
      <View style={styles.titleHolder}>  
        <Text style={styles.title}>Let's give a name to your phone: </Text>
      </View>
      <View style={styles.GetName}>
        <Text style={styles.subtitle}>PUZZEL   </Text>
        <OutlinedTextField
            label='Desired name'
            keyboardType='default'
            containerStyle={styles.TextField}
            onChangeText={(text)=>setDeviceName({...deviceName,['value']:text})}/>
      </View>
      <Text style={{fontSize:10,marginLeft:windowWidth*0.05}}>The length of the name should be more than 4 characters</Text>
  </View>
      {deviceName['value'].length>=4?(
          <TouchableOpacity activeOpacity={0.9} onPress={handlerSubmit}>
            <View style={styles.buttonHolder}>
              <Text style={styles.nextNavigator}>Well Done!</Text>
            </View>
          </TouchableOpacity>
          ):(<></>)}
          </>
  )
}

export default GetName

const styles = StyleSheet.create({
    getNameContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    titleHolder: {
        marginLeft: windowWidth * 0.05,
        marginTop: windowHeight * 0.1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    GetName: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: windowWidth * 0.05,
        marginTop: windowHeight * 0.1,
        height: windowHeight * 0.1,
        windowWidth: windowWidth,
        backgroundColor: 'white'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    TextField: {
        width: windowWidth * 0.5,
        height: windowHeight * 0.1,
        alignSelf: 'center',
    },
    buttonHolder: {
        position: 'absolute',
        width: windowWidth * 0.2,
        height: windowHeight * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 20,
        bottom: windowHeight * 0.1,
        right: windowWidth * 0.1,
        elevation: 10,
    },
})