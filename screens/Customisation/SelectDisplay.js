import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useEffect, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { windowHeight, windowWidth } from '../../components/export'
import Button from '../../components/CustomizationTabs/Button'
import HeaderButtons from '../../components/HeaderButtons'
import {useDispatch,useSelector} from 'react-redux'
import { setDevice } from './components/DataHandler'

export default function SelectDisplay({navigation}){
    const [selected,setSelected] = useState({
        component: 'DisplaySize',
        DisplaySize: '',
        Price:''
    })
    console.log(selected)

    const getDevice = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('custom-device')
          console.log(jsonValue)
          return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch(e) {
            console.log(e)
        }
        console.log('Done.')
      }

      const saveDevice = () => {
        setDevice(selected,'componentPosition')
        navigation.navigate('FrontCamera')
      }



      useEffect(() => {
        getDevice().then((data)=>
         data != null ? setSelected({...selected, ['displaySize']: data.displaySize}): ''
        )
      }, [])
      
      

    const SizeOptions = (props) => (
        <View style={[styles.SizeOptions,selected['DisplaySize'] == props.sizeName ? styles.selectedSize: '']}>
            <TouchableOpacity activeOpacity={0.6} onPress={()=>setSelected({...selected, ['DisplaySize']:props.sizeName,['Price']:props.price})}>
                {props.type == 'small' ?(
                <Image source={require('../../assets/images/displaySize/small.png')} 
                style={styles.SizeImage} resizeMode='contain'/>):
                props.type == 'mid' ?(
                <Image source={require('../../assets/images/displaySize/mid.png')} 
                style={styles.SizeImage} resizeMode='contain'/>):
                props.type == 'large' ?(
                <Image source={require('../../assets/images/displaySize/large.png')} style={styles.SizeImage} resizeMode='contain'/>): (<></>)}
                <Text style={styles.SizeTitle}>{props.sizeName}</Text>
                <Text style={styles.priceText}>Price: {props.price}</Text>
            </TouchableOpacity>
        </View>
    )

  return (
    <View style={styles.HomeContainer}>
        <HeaderButtons navigation={navigation} title='Display Size'/>
        <View style={styles.messageHolder}>
            <Text style={styles.message}>How big do you want your display</Text>
        </View>
        <View style={styles.sizeScroller}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
            <SizeOptions sizeName='S 4.7inch' type='small' price={2000}/>
            <SizeOptions sizeName='M 5.5inch' type='mid' price={4000}/>
            <SizeOptions sizeName='L 6.5inch' type='large' price={6000}/>
        </ScrollView>
        </View>
        {/* <Button navigation={navigation} handler={setDevice} screen={'FrontCamera'} title='Lets Gooo'/> */}
        <TouchableOpacity 
            onPress={saveDevice} 
            style={styles.ButtonContainer}
            activeOpacity={0.7}>
            <View> 
                <Text style={styles.ButtonText}>Lets Gooo</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    SizeImage: {
        height: windowHeight * 0.5,
        width: windowWidth*0.7,
    },
    SizeTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
    },
    selectedSize: {
        elevation:10,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 30,
    },
    sizeScroller: {
        width: windowWidth,
        height: windowHeight * 0.6,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    SizeOptionsContainer: {},
    SizeOptions: {
        height: windowHeight * 0.6,
        width: windowWidth*0.6,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor: 'white',
        marginRight: 30,
    },
    messageHolder: {
        height: windowHeight * 0.1,
        justifyContent: 'center',
        width: windowWidth,
    },
    message: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '6%',
    },
    ButtonContainer: {
        width: windowWidth*0.25,
        height: '8%',
        borderRadius: 20,
        backgroundColor: '#A0A0A0',
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 15,
        fontWeight: '700',
    },
    priceText:{
        alignSelf: 'center',
        fontWeight:'bold'
    }
})