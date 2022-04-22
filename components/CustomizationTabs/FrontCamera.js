import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector'

const options = [
  { label: "Pop-Up ", value: "1" },
  { label: "Inside Notch", value: "2" },
  { label: "Rotatable", value: "3" },
];

const FrontCamera = () => {
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

export default FrontCamera

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