import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import React,{useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { windowHeight, windowWidth } from '../../components/export'
import Button from '../../components/CustomizationTabs/Button'
import HeaderButtons from '../../components/HeaderButtons'
import {useDispatch,useSelector} from 'react-redux'

export default function SelectDisplay({navigation}){
    const [selected,setSelected] = useState('')
    const dispatch = useDispatch()

    const SizeOptions = (props) => (
        <View style={[styles.SizeOptions,selected == props.sizeName ? styles.selectedSize: '']}>
            <TouchableOpacity activeOpacity={0.6} onPress={()=>setSelected(props.sizeName)}>
                {props.type == 'small' ?(
                <Image source={require('../../assets/images/displaySize/small.png')} 
                style={{height: windowHeight * 0.4,width: windowWidth*0.6,}} resizeMode='contain'/>):
                props.type == 'mid' ?(
                <Image source={require('../../assets/images/displaySize/mid.png')} 
                style={styles.SizeImage} resizeMode='contain'/>):
                props.type == 'large' ?(
                <Image source={require('../../assets/images/displaySize/large.png')} style={styles.SizeImage} resizeMode='contain'/>): (<></>)}
                <Text style={styles.SizeTitle}>{props.sizeName}</Text>
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
            <SizeOptions sizeName='S 4.7inch' type='mid'/>
            <SizeOptions sizeName='M 5.5inch' type='mid'/>
            <SizeOptions sizeName='L 6.5inch' type='large'/>
        </ScrollView>
        </View>
        <Button navigation={navigation} screen={'FrontCamera'} title='Lets Gooo'/>
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
    }
})