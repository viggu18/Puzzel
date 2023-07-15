import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import { setDevice,getDevice } from './components/DataHandler'
import { windowWidth,windowHeight } from '../../components/export'
import RT from '../../assets/images/frontCamera/right.png'
import CT from '../../assets/images/frontCamera/center.png'
import LT from '../../assets/images/frontCamera/left.png'

const FrontCamera = ({navigation}) => {
    const [camera,setCamera] = useState({
        component: 'FrontCamera',
        label: '',
    })
    // console.log(camera)
    const [camPosition,setCamPosition] = useState(LT)

    const options=[
        {
            component: 'Front Camera',
            label: 'Left Top',
            position:LT
        },
        {
            component: 'Front Camera',
            label: 'Center Top',
            position: CT
        },
        {
            component: 'Front Camera',
            label: 'Right Top',
            position:RT
        },
    ]

    useEffect(() => {
        getDevice().then((data)=>{
            console.log(data);
        setCamera({...camera, label: data?.componentPosition?.FrontCamera?.label})
               options.map((item)=>
               camera.label == item.label ? setCamPosition(item.position): '')
               console.log(camera)
    })
      }, [])

  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Front Camera'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the front Camera: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        {/* <NextScreen navigation={navigation} screen='BackCamera'/> */}
        <TouchableOpacity style={styles.button} onPress={()=>{setDevice(camera,'componentPosition'),
                                    navigation.navigate('BackCamera')}}>
            <Text style={styles.text}>NextScreen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FrontCamera

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