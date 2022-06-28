import { StyleSheet, Text, View,Modal} from 'react-native'
import React from 'react'
import HeaderButtons from '../HeaderButtons'
import Options from '../Profile/Options'

export default function Settings({navigation}) {
  return (
    <View>
        <HeaderButtons navigation={navigation} title='Settings'/>
        <Options label='Delete Your Account' navigation={navigation}/>
    </View>
  )
}


const styles = StyleSheet.create({})