import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import NextScreen from './components/NextScreen'
import RM from '../../assets/images/volume/RightMid.png'
import RT from '../../assets/images/volume/RightTop.png'
import LM from '../../assets/images/volume/LeftMid.png'
import LT from '../../assets/images/volume/LeftTop.png'


const Volume = ({navigation}) => {
    const [camera,setCamera] = useState({
        label: 'Camera Position',
        position: '',
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
        <NextScreen navigation={navigation} screen='Power'/>
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
    }
})