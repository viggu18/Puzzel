import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import NextScreen from './components/NextScreen'
import { windowWidth,windowHeight } from '../../components/export'
import { getDevice,setDevice } from './components/DataHandler'
import RT from '../../assets/images/power/right.png'
import TR from '../../assets/images/power/topRight.png'
import TL from '../../assets/images/power/topLeft.png'
import LT from '../../assets/images/power/left.png'


const Power = ({navigation}) => {
    const [camera,setCamera] = useState({
        component: 'PowerButton',
        label: '',
    })
    const [camPosition,setCamPosition] = useState(LT)

    const options=[
        {
            component: 'Power',
            label: 'Left',
            position:LT
        },
        {
            component: 'Power',
            label: 'Top Left',
            position: TL
        },
        {
            component:'Power',
            label: 'Top Right',
            position: TR
        },
        {
            component: 'Power',
            label: 'Right',
            position: RT
        },

    ]

    useEffect(() => {
        getDevice().then((data)=>{
            console.log(data);
        setCamera({...camera, label: data?.componentPosition?.PowerButton?.label})
               options.map((item)=>
               camera.label == item.label ? setCamPosition(item.position): '')
               console.log(camera)
    })
      }, [])

  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Power'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the Power Button: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        {/* <NextScreen navigation={navigation} screen='Charging'/> */}
        <TouchableOpacity style={styles.button} 
            onPress={()=>{setDevice(camera,'componentPosition'),
                    navigation.navigate('Charging')}}>
            <Text style={styles.text}>NextScreen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Power

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