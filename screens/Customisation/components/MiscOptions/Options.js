import { StyleSheet, Text, View, } from 'react-native'
import React,{useState} from 'react'
import { Divider } from '@react-native-material/core';
import { windowWidth,windowHeight } from '../../../../components/export'
import MenuBar from './MenuBar';
import SubOptions from './SubOptions';

const Options = (props) => {

  return (
        <View style={[styles.OptionContainer,{height: !props.menuData ? windowHeight * 0.18: windowHeight *0.26}]}> 
              <View style={styles.TitleHolder}>
                  <Text style={styles.titleText}>{props.title}</Text>
                  <View style={styles.priceHolder}>
                      <Text style={styles.priceText}>{props.state?.description?.price ? props.state?.description?.price : '0' }</Text>
                  </View>
              </View> 
          <Divider/> 
          {!props.menuData ? (<></>):   
          (<MenuBar data={props.menuData} state={props.state} setState={props.setState}/>)}
          {!props.data ? (<></>):(
          <SubOptions title={props.title} data={props.data} state={props.state} 
          setState={props.setState} currentTotal={props.currentTotal} setCurrentTotal={props.setCurrentTotal}/>)}
        </View>
  )
}

export default Options

const styles = StyleSheet.create({
    OptionContainer: {
        width: windowWidth * 0.9,
        height: 'auto',
        alignSelf: 'center',
        backgroundColor: '#F2F2F7',
        elevation: 10,
        borderRadius: 20,
        marginBottom: 40,
    },
    TitleHolder: {
        width: '100%',
        height: windowHeight * 0.08,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#F2F2F7',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    priceHolder: {
        height: '80%',
        width: '30%',
        elevation: 0,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: '#F2F2F7',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    priceText: {
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 16,
    },
})