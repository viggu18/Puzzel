import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderButtons from '../HeaderButtons'
import { windowWidth,windowHeight } from '../export'

const ChangeUserType = () => {
  return (
    <View style={styles.TypeSelectionContainer}>
      <HeaderButtons title='Change User Type'/>
      <View style={styles.CurrentType}>
        <Text style={styles.Text}>Expert User</Text>
      </View>
      <View>
          <Text style={{alignSelf: 'center',fontSize: 14}}>If you want to switch types then click the below button</Text>
      </View>
      <TouchableOpacity style={styles.TypeSwitcher} activeOpacity={0.7}>
          <Text>Switch from</Text>
      </TouchableOpacity>
      <View >
          <Text style={{alignSelf: 'center',fontSize: 14}}>Do not worry you can switch back anytime you want</Text>
      </View>
    </View>
  )
}

export default ChangeUserType

const styles = StyleSheet.create({
    TypeSelectionContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    CurrentType: {
        width: windowWidth,
        height: windowHeight*0.07,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    Text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    TypeSwitcher: {
        width: windowWidth,
        height: windowHeight*0.07,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
})