import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Items from './Items'

export default function ViewCart(props) {
  return (
    <View style={styles.container}>  
      <Items data={props.data}/>
        <TouchableOpacity style={styles.checkoutbtn} activeOpacity={0.7}>
          <FontAwesome name="arrow-right" size={25} color="black" style={{top:16}}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  checkoutbtn: {
    elevation: 10,
    width: '15%',
    height: '10%',
    backgroundColor: 'grey',
    position: 'absolute',
    bottom: '5%',
    right : '5%',
    borderRadius: 50,
    alignItems: 'center',
  },
})