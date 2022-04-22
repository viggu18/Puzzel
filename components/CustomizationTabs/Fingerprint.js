import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector'

const options = [
  { label: "Indisplay", value: "1" },
  { label: "Power Button", value: "2" },
  { label: "Below Screen", value: "3" },
  { label: "Back Panel", value: "4" },
];

const Fingerprint = () => {
  return (
    <View style={style.container}>
      <SwitchSelector
      options={options}
      initial={0}
      onPress={value => console.log(`Call onPress with value: ${value}`)}
      hasPadding
      textColor= 'black'
      selectedColor='white'
      buttonColor='black'
      borderColor='black'
      borderRadius={0}
       style={style.selector}/>
    </View>
  )
}

export default Fingerprint

const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    selector: {
      width: 330,
      alignSelf: 'center',
      marginTop: 20,
    }
  })