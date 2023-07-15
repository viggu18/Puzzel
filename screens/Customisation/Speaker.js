import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import { getDevice,setDevice } from './components/DataHandler'
import { windowWidth,windowHeight } from '../../components/export'
import NextScreen from './components/NextScreen'
import LT from '../../assets/images/speaker/left.png'
import RT from '../../assets/images/speaker/right.png'
import CT from '../../assets/images/speaker/center.png'


const Speaker = ({navigation}) => {
    const [camera,setCamera] = useState({
        component: 'Speaker',
        label: '',
    })
    const [camPosition,setCamPosition] = useState(LT)

    const options=[
        {
            component: 'Speaker',
            label: 'Left Bottom',
            position:LT
        },
        {
            component: 'Speaker',
            label: 'Center Bottom',
            position: CT
        },
        {
            component: 'Speaker',
            label: 'Right Bottom',
            position: RT
        },
    ]

    useEffect(() => {
        getDevice().then((data)=>{
            console.log(data);
            setCamera({...camera, label: data?.componentPosition?.Speaker?.label})
               options.map((item)=>
               camera.label == item.label ? setCamPosition(item.position): '')
               console.log(camera)
        })
      }, [])


  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Speaker'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the Speaker: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        {/* <NextScreen navigation={navigation} screen='Volume'/> */}
        <TouchableOpacity style={styles.button} 
            onPress={()=>{setDevice(camera,'componentPosition'),
                    navigation.navigate('Volume')}}>
            <Text style={styles.text}>NextScreen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Speaker

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