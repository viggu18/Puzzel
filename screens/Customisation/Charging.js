import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderButtons from '../../components/HeaderButtons'
import DynamicImage from './components/DynamicImage'
import Options from './components/Options'
import NextScreen from './components/NextScreen'
import BM from '../../assets/images/charging/BottomMid.png'
import BR from '../../assets/images/charging/BottomRight.png'
import BL from '../../assets/images/charging/BottomLeft.png'
import RM from '../../assets/images/charging/RightMid.png'
import LM from '../../assets/images/charging/LeftMid.png'

const Charging = ({navigation}) => {
    const [camera,setCamera] = useState({
        label: 'Camera Position',
        position: '',
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

  return (
    <View style={styles.Container}>
        <HeaderButtons navigation={navigation} title='Charging'/>
        <View>
            <DynamicImage image={camPosition}/>
            <Text style={styles.label}>Position of the Volume Button: </Text>
            <Options options={options} 
                state={camPosition} 
                setState={setCamPosition} 
                item={camera}
                setItem={setCamera}/>
        </View>
        <NextScreen navigation={navigation} screen='MiscOptions'/>
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
    }
})