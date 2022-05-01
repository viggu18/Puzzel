import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from '@react-native-material/core'

export default function Items(props){
    return (
    <>  
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.items}>
            <Image style={styles.image} source={{uri:props.data.Image.img1}}/>
            <View style={styles.text}>
                <Text style={styles.name}>{props.data.Name}</Text>
                <Text style={styles.price}>{props.data.Price}</Text>
                <Text style={styles.delivery}>Will be Delivered by May 9 | <Text>Free</Text></Text>
            </View>
        </View>
        </TouchableOpacity>
        <View style={styles.stickyButton}>
            <Button title="Modify" color='black' variant='text' style={styles.button}/>
            <Button title="Remove" color='black' variant='text' style={styles.button}/>
        </View>
        </View>
    </>
    )
  }

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginBottom: 0,
        height: "29%",
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    items: {
        flexDirection: 'row',
      },
      image: {
        width: 90,
        height: 120,
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
          width: "40%",  
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