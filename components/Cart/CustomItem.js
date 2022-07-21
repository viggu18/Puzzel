import { StyleSheet, Text, View,Image,TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { windowWidth,windowHeight } from '../export'
import { Button } from '@react-native-material/core'
import DT from '../../assets/images/displaySize/mid.png'

export default function CustomItem(props){
    const [visible,setVisible] = useState(true)
    console.log(props.data?.Price)

    return (
    visible == true ?
    (<>  
    <View style={[styles.container,{height: props.display ? windowHeight*0.25 :windowHeight*0.30,}]}>
        <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.items}>
            <Image style={styles.image} source={DT} resizeMode='contain'/>
            <View style={styles.text}>
                <Text style={styles.name}>{props.data?.Name}({props.data?.deviceComponents?.Memory?.description?.value},{props.data?.deviceComponents?.Storage?.description?.value})</Text>
                <Text style={styles.price}>{props.data?.Price}</Text>
                <Text style={styles.delivery}>Will be Delivered by July 26</Text>
            </View>
        </View>
        </TouchableOpacity>
        {!props.display ? (
        <View style={styles.stickyButton}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => {props.DeleteItem(props.data),setVisible(false)}}>
                    <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>    
        </View>
         ) : null}
        </View>
    </>): (<></>)
    )
  }

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginBottom: 0,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    items: {
        flexDirection: 'row',
      },
      image: {
        width: 100,
        height: 130,
        borderRadius: 10,
        margin: 15,
        left:5,
        marginBottom:8,
      },
      stickyButton: {
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        bottom: 0,
        justifyContent: 'space-around',
      },
      button: {
          backgroundColor: 'white',
          width: windowWidth*0.45, 
          height: windowHeight*0.05,          
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius:10,
          elevation: 3,
      },
        text: {
        width: "65%",
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 15, 
        marginLeft: 0,
        },
        name: {
            fontSize: 18,
            fontWeight: 'bold', 
        },
        price: {
            fontSize: 15,
        },
        delivery: {
            bottom: 0,
            position: 'absolute',
            left: 15,
            fontSize: 12,
            fontWeight: 'bold',
        },
})