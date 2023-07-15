import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import { windowWidth,windowHeight } from '../../components/export'
import { getDevice,setDevice } from './components/DataHandler'
import NextScreen from './components/NextScreen'
import BM from '../../assets/images/charging/BottomMid.png'
import BR from '../../assets/images/charging/BottomRight.png'
import BL from '../../assets/images/charging/BottomLeft.png'
import RM from '../../assets/images/charging/RightMid.png'
import LM from '../../assets/images/charging/LeftMid.png'

const Charging = ({navigation}) => {
    const [camera,setCamera] = useState({
        component: 'ChargingPort',
        label: '',
    })
    const [camPosition,setCamPosition] = useState(LM)

    const options=[
        {
            component: 'Charging Port',
            label: 'Left Mid',
            position:LM
        },
        {
            component: 'Charging Port',
            label: 'Bottom Left',
            position: BL
        },
        {
            component: 'Charging Port',
            label: 'Bottom Mid',
            position: BM
        },
        {
            component: 'Charging Port',
            label: 'Bottom Right',
            position: BR
        },
        {
            component: 'Charging Port',
            label: 'Right Mid',
            position: RM
        },
    ]

    useEffect(() => {
        getDevice().then((data)=>{
            console.log(data);
        setCamera({...camera, label: data?.componentPosition?.ChargingPort?.label})
               options.map((item)=>
               camera.label == item.label ? setCamPosition(item.position): '')
               console.log(camera)
    })
      }, [])

  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Charging'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the Chargin Port Button: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        {/* <NextScreen navigation={navigation} screen='MiscOptions'/> */}
        <TouchableOpacity style={styles.button} 
            onPress={()=>{setDevice(camera,'componentPosition'),
                    navigation.navigate('MiscOptions')}}>
            <Text style={styles.text}>NextScreen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Charging

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: 'white' 
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        margin: 10
    },
    button: {
        width: windowWidth*0.25,
        height: windowHeight * 0.07,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute',
        right: 20, 
        bottom: 20,
    },
    text: {
        fontWeight: 'bold'
    }
})