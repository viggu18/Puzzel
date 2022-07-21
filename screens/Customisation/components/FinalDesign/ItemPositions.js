import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowWidth } from '../../../../components/export'

const ItemPositions = (props) => {
    console.log(props.data)
  return (
    <View style={styles.PositionsContainer}>
        <View style={{margin: 10}}>
            <Text style={styles.TitleText}>Item Positions</Text>
            <Text>Device Name: {props.Name}</Text> 
            <Text>Front Camera: {props.data?.FrontCamera?.label}</Text>
            <Text>Back Camera: {props.data?.BackCamera?.label}</Text>
            <Text>Speakers: {props.data?.Speaker?.label}</Text>
            <Text>Volume Button: {props.data?.VolumeButton?.label}</Text>
            <Text>Power Button: {props.data?.PowerButton?.label}</Text>
            <Text>Charging Port: {props.data?.ChargingPort?.label}</Text> 
        </View>
    </View>
  )
}

export default ItemPositions

const styles = StyleSheet.create({
    PositionsContainer: {
        width: windowWidth*0.9,
        height: 'auto',
        elevation: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 5,
        alignSelf: 'center'
    },
    TitleText: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})