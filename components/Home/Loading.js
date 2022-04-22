import { View, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const Loading = () => {
  return (
        <View style={style.container}>
            <LottieView style={{height:200,}} 
                    source={require('../../assets/animations/cube-loading.json.json')} 
                    autoPlay speed={1}/>
        </View>
  );
}

export default Loading

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',  
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
})