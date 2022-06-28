import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import NextScreen from './components/NextScreen'
import LT from '../../assets/images/backCamera/left.png'
import RT from '../../assets/images/backCamera/right.png'
import CT from '../../assets/images/backCamera/center.png'


const BackCamera = ({navigation}) => {
    const [camera,setCamera] = useState({
        label: 'Camera Position',
        position: '',
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

  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Back Cam'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the Back Camera: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        <NextScreen navigation={navigation} screen='Speaker'/>
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
    }
})