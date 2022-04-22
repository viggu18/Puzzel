import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector'

const options = [
  { label: "6GB", value: "1" },
  { label: "8GB", value: "2" },
  { label: "12GB", value: "3" },
  { label: "16GB", value: "4" },
];

const RAM = () => {
  return (
    <View style={style.container}>
      <SwitchSelector
      options={options}
      // initial={0}
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

export default RAM

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