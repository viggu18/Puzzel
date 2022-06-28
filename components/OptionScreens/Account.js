import { StyleSheet, Text, View,Modal} from 'react-native'
import React from 'react'
import HeaderButtons from '../HeaderButtons'
import Options from '../Profile/Options'

export default function Account({navigation}) {
  return (
    <View>
        <HeaderButtons navigation={navigation} title='Account'/>
        <Options label='Change User Type' screen='SelectUser' navigation={navigation}/>
        <Options label='Delete Your Account' screen='DeleteAc' navigation={navigation}/>
    </View>
  )
}


const styles = StyleSheet.create({})