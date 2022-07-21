import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowWidth } from '../../../../components/export'

const DeviceDetails = (props) => {
    console.log(props.data)
  return (
    <>
    <View style={styles.PositionsContainer}>
        <View style={{margin: 10}}>
            <Text style={styles.TitleText}>Device Components</Text>
            <Text>Processor: {props.data?.Processor?.description?.label}</Text> 
            <Text>Memory: {props.data?.Memory?.description?.label} </Text>
            <Text>Storage: {props.data?.Storage?.description?.label} </Text>
            <Text>Display: {props.data?.Display?.brand}</Text>
            <Text>Refresh Rate: {props.data?.Display?.description?.label}</Text>
            <Text>Operating System: {props.data?.Os?.description?.label}</Text>
            <Text>PreInstalled Apps: {props.data?.PreInstalledApps?.description.label}</Text>
            <Text>Back Camera: {"\n"}
            {"\t\t\t\t"}Wide Lens:  {props.data?.BackCamera?.Wide?.brand} {props.data?.BackCamera?.Wide?.description?.label}
              {"\n"}
              {"\t\t\t\t"}Main Lens :  {props.data?.BackCamera?.Main?.brand} {props.data?.BackCamera?.Main?.description?.label} 
              {"\n"}
              {"\t\t\t\t"}Tele Lens :  {props.data?.BackCamera?.Tele?.brand} {props.data?.BackCamera?.Tele?.description?.label} 
            </Text>
            <Text>Front Camera:  {props.data?.FrontCamera?.brand} {props.data?.FrontCamera?.description.label}</Text>

        </View>
    </View>
    <View style={styles.PositionsContainer}>
      <View style={{margin: 10}}>
        <Text style={{fontWeight: 'bold'}}>Final Price: {props.data?.Price}</Text> 
      </View>
    </View>
    </>
  )
}

export default DeviceDetails

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
    },
})