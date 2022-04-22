import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector'

const options = [
  { label: "Amoled", value: "1" },
  { label: "Super Amoled", value: "2" },
  { label: "LED", value: "3" },
  { label: "LCD", value: "4" },
];

const Display = () => {
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

export default Display

const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    selector: {
      width: 300,
      alignSelf: 'center',
      marginTop: 20,
    }
  })