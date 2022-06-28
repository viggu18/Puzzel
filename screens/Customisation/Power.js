import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import NextScreen from './components/NextScreen'
import RT from '../../assets/images/power/right.png'
import TR from '../../assets/images/power/topRight.png'
import TL from '../../assets/images/power/topLeft.png'
import LT from '../../assets/images/power/left.png'


const Power = ({navigation}) => {
    const [camera,setCamera] = useState({
        label: 'Camera Position',
        position: '',
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
        <NextScreen navigation={navigation} screen='Charging'/>
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
    }
})