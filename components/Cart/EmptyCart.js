import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { windowHeight,navigationReset} from '../export'


const EmptyCart = (props) => {
    const pressActions = () => {
        navigationReset(props.navigation, 'PhoneList')
    }
  return (
      <>
    <View style={style.container}>
        {/* <View style={style.imageContainer}> */}
            <LottieView style={{flex:1}} width={400} height={250}
                    source={require('../../assets/animations/empty-list.json')} autoPlay/>
                    <Text style={style.text}>Your cart is empty</Text>
                    <Text onPress={pressActions} style={style.text}>Let us take you Shopping.</Text>
        {/* </View> */}
    </View>
    <View style={{flex:2}}></View>
    </>
  )
}

export default EmptyCart

const style = StyleSheet.create({
    container: {
        top: windowHeight/5,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        top: windowHeight/4,
    },
})