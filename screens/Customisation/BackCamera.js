import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import { windowWidth,windowHeight } from '../../components/export'
import { getDevice,setDevice } from './components/DataHandler'
import NextScreen from './components/NextScreen'
import LT from '../../assets/images/backCamera/left.png'
import RT from '../../assets/images/backCamera/right.png'
import CT from '../../assets/images/backCamera/center.png'


const BackCamera = ({navigation}) => {
    const [camera,setCamera] = useState({
        component: 'BackCamera',
        label: '',
    })
    const [camPosition,setCamPosition] = useState(LT)


    const options=[
        {
            component: 'Back Camera',
            label: 'Left Top',
            position:LT
        },
        {
            component: 'Back Camera',
            label: 'Center Top',
            position: CT
        },
        {
            component: 'Back Camera',
            label: 'Right Top',
            position: RT
        },
    ]

    useEffect(() => {
        getDevice().then((data)=>{
            console.log(data);
        setCamera({...camera, label: data?.componentPosition?.BackCamera?.label})
               options.map((item)=>
               camera.label == item.label ? setCamPosition(item.position): '')
               console.log(camera)
    })
      }, [])

  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Back Camera'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the Back Camera: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        {/* <NextScreen navigation={navigation} screen='Speaker'/> */}
        <TouchableOpacity style={styles.button} 
            onPress={()=>{setDevice(camera,'componentPosition'),
                    navigation.navigate('Speaker')}}>
            <Text style={styles.text}>NextScreen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BackCamera

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