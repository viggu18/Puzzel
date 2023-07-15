import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../../components/export'

const Options = (props) => {

    const handleSelection = (item) =>{
        props.setState(item.position)
        props.setItem({...props.item, label: item.label})
    }
    
    let length = props.options.length


  return (
    <View style={[styles.OptionsContainer,{width:length > 3 ? windowWidth*0.98 : windowWidth * 0.85}]}>
      {props.options.map((item,index)=>(
        <TouchableOpacity key={index} 
            style={[styles.Options,
              {backgroundColor: item.position == props.state ? 'black' : 'white',}]} 
            onPress={()=>handleSelection(item)}>
          <Text style={[styles.Text,{color: item.position == props.state ? 'white' : 'black'}]}>
            {item.label}</Text>   
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    OptionsContainer: {
        flexDirection: 'row',
        // width: windowWidth* 0.98,
        height: windowHeight*0.1,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    Options: {
        margin:10,
        borderRadius: 20,
        width: windowWidth*0.20,
        height: windowHeight * 0.05,
        justifyContent: 'center'
    },
    Text: {
        fontSize: 13,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})