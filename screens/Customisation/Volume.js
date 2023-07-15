import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import NextScreen from './components/NextScreen'
import { windowWidth,windowHeight } from '../../components/export'
import { getDevice,setDevice } from './components/DataHandler'
import RM from '../../assets/images/volume/RightMid.png'
import RT from '../../assets/images/volume/RightTop.png'
import LM from '../../assets/images/volume/LeftMid.png'
import LT from '../../assets/images/volume/LeftTop.png'


const Volume = ({navigation}) => {
    const [camera,setCamera] = useState({
        component: 'VolumeButton',
        label: '',
    })
    const [camPosition,setCamPosition] = useState(LT)

    const options=[
        {
            component: 'Volume Button',
            label: 'Left Top',
            position:LT
        },
        {
            component: 'Volume Buttom',
            label: 'Left Mid',
            position: LM
        },
        {
            component: 'Volume Button',
            label: 'Right Top',
            position: RT
        },
        {
            component: 'Volume Button',
            label: 'Right Mid',
            position: RM
        },
    ]

    useEffect(() => {
        getDevice().then((data)=>{
            console.log(data);
            setCamera({...camera, label: data?.componentPosition?.VolumeButton?.label})
               options.map((item)=>
               camera.label == item.label ? setCamPosition(item.position): '')
               console.log(camera)
        })
      }, [])

  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Volume'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the Volume Button: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        {/* <NextScreen navigation={navigation} screen='Power'/> */}
        <TouchableOpacity style={styles.button} 
            onPress={()=>{setDevice(camera,'componentPosition'),
                    navigation.navigate('Power')}}>
            <Text style={styles.text}>NextScreen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Volume

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