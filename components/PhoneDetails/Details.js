import { View, Text,StyleSheet, Modal,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomee5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from '@react-native-material/core';
import { windowHeight,windowWidth } from '../export';
import PincodeCheck from './PincodeCheck';


export default function Details(props){
  const [modalVisible, setModalVisible] = React.useState(false);
  // {console.log(props.data)}

  return (
    <>
    <Modal animationType="slide" visible={modalVisible} transparent={true} 
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity style={style.modalContainer} onPress={()=>setModalVisible(false)}>
          <TouchableWithoutFeedback>
            <View>
                <View style={style.modalSelectContainer}>
                    <Text style={{fontSize: 15, fontWeight: 'bold',marginBottom: 5}}>Select Choices:</Text>
                    <Divider/>
                    <View style={{justifyContent:'center',alignSelf: 'center',marginTop: 10}}>
                    <View style={{width:300,}}>
                      <Text style={style.text}>Memory</Text>
                        <SwitchSelector options={props.ram}
                                    initial={0}
                                    onPress={value => props.setStorageSelection({...props.storageSelection, Memory: value})}
                                    hasPadding
                                    textColor= 'black'
                                    selectedColor='white'
                                    buttonColor='black'
                                    borderColor='black'
                                    borderRadius={0}
                                    // buttonMargin={10}
                                    style={style.selector}/>
                        <Text style={style.text}>Storage</Text>
                          <SwitchSelector
                                    options={props.storage}
                                    initial={0}
                                    onPress={value => props.setStorageSelection({...props.storageSelection, Storage: value})}
                                    hasPadding
                                    textColor= 'black'
                                    selectedColor='white'
                                    buttonColor='black'
                                    borderColor='black'
                                    borderRadius={0}
                                    // buttonMargin={10}
                                    style={style.selector}/>
                    </View>
                        <TouchableOpacity activeOpacity={0.7} style={style.saveButton} onPress={()=>setModalVisible(!modalVisible)}>
                            <Text style={{color:'white', fontSize: 20}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
    </Modal>

    <View style={style.container}>
        <TouchableOpacity style={style.colorStorageSelection} onPress={() => setModalVisible(true)}>
              <Text style={{marginLeft:5,fontWeight: '700',top: 4}}>Selected Storage: {props.storageSelection.Memory},{props.storageSelection.Storage}</Text>
              <AntDesign name="right" style={{marginRight:10,top:4}} size={15} color="black"/>
        </TouchableOpacity>
        <Divider />
        <View style={style.detailsContainer}>
        <Text style={style.PhoneTitle}>{props.data.Name}</Text>
        <View style={style.ratingBox}>
          <Text style={{fontWeight:'bold',color:'white'}}>{props.data.Rating}
            <AntDesign name="star" size={13} color="white"/>
          </Text>
        </View>
        <Text style={{fontSize:20,fontWeight:'bold',margin:5}}>
          <FontAwesomee5 name="rupee-sign" size={17} color="black"/>
         {props.data.Price}</Text>
        </View>
          <Divider/>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>props.navigation.navigate('FullDetails',props.data)}>
          <View style={style.moreDetails}>
              <Text style={{marginLeft:5,fontWeight: '700'}}>More Details</Text>
              <AntDesign name="right" style={{marginRight:10}} size={15} color="black"/>
          </View>
          </TouchableOpacity>
          <Divider/>
          <PincodeCheck/>
    </View>
    </>
  )
}

const style =StyleSheet.create({
    text:{
      fontSize: 15, 
      fontWeight: 'bold'
    },
    container:{
      flex:1,
      backgroundColor:'white',
    },
    PhoneTitle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    ratingBox: {
      top: 5,
      justifyContent:'center',
      flexDirection: 'row',
      position: 'relative',
      width:50,
      height: 20,
      backgroundColor: 'green',
      borderRadius: 5,
    },
    moreDetails: {
      backgroundColor: 'white',
      width: windowWidth,
      height: windowHeight/25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: 'black',
      top: 4,
    },
    modalContainer: {
      justifyContent: 'flex-end',
      flex:1 ,
  },
  modalSelectContainer: {
    backgroundColor: 'white',
    height: 300,
    padding: 16,
    borderWidth: 1,
    borderTopColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
},
saveButton: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    width: 300,
    padding: 13,
    position: 'relative',
    borderRadius: 30,
},
selector: {
  width: 300,
  alignSelf: 'center',
  marginTop: 10,
},
detailsContainer: {
  width: windowWidth*0.95,
  alignSelf: 'center',
},
colorStorageSelection: {
  backgroundColor: 'white',
  width: windowWidth,
  height: windowHeight/25,
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderColor: 'black',
},
})