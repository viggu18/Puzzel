import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import NextScreen from './components/NextScreen'
import RT from '../../assets/images/frontCamera/right.png'
import CT from '../../assets/images/frontCamera/center.png'
import LT from '../../assets/images/frontCamera/left.png'

const FrontCamera = ({navigation}) => {
    const [camera,setCamera] = useState({
        label: 'Camera Position',
        position: '',
    })
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

  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Front Cam'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the front Camera: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        <NextScreen navigation={navigation} screen='BackCamera'/>
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
    }
})