import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import SwitchSelector from 'react-native-switch-selector'
import SelectBox from 'react-native-multi-selectbox'

const options = [
  { label: "Amoled", value: "1" },
  { label: "Super Amoled", value: "2" },
  { label: "LED", value: "3" },
  { label: "LCD", value: "4" },
];

const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
  {
    item: 'Barcelona',
    id: 'BR',
  },
]

const Display = () => {
  const [selectedValue, setSelectedValue] = useState(K_OPTIONS[0].item);

  return (
    <View style={styles.container}>
      <SelectBox
        label="Select Provider"
        containerStyle={styles.dropDown}
        labelStyle={{alignSelf: 'center'}}
        options={K_OPTIONS}
        value={selectedValue}
        onChange={(val)=>setSelectedValue(val)}
        hideInputFilter={true}
      />
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
       style={styles.selector}/>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    selector: {
      width: 300,
      alignSelf: 'center',
      marginTop: 20,
    },
    dropDown: {
      width: 300,
      alignSelf: 'center',

    }
  })