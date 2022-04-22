import { View, Text,StyleSheet, Modal,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ICon from 'react-native-vector-icons/AntDesign';
import { Divider } from '@react-native-material/core';

const ram = [
  { label: "6 GB", value: "6GB" },
  { label: "8 GB", value: "8GB" },
  { label: "12 GB", value: "12GB" },
];

const storage = [
  { label: "64 GB", value: "64GB" },
  { label: "128 GB", value: "128GB" },
  { label: "256 GB", value: "256GB" },
  { label: "512 GB", value: "512GB" },
];

export default function Details(props){
  const [modalVisible, setModalVisible] = React.useState(false);
  const [storageSelection, setStorageSelection] = React.useState({
    Memory: ram[0].value,
    Storage: storage[0].value,
  });
  
  // {console.log(props.data)}
  const pressHandler = () => {
    props.navigation.navigate('FullDetails',props.data);
  }
  const variantHandler = () => {
      console.log(storageSelection);
      setModalVisible(!modalVisible);
  }

  
  return (
    <>
    <Modal animationType="slide" visible={modalVisible} transparent={true} 
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity style={style.modalContainer} onPress={()=>setModalVisible(false)}>
          <TouchableWithoutFeedback>
            <View>
                <View style={style.modalSelectContainer}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Select Choices:</Text>
                    <Divider/>
                    <View style={{justifyContent:'center',alignSelf: 'center'}}>
                    <View style={{width:300,}}>
                      <Text style={style.text}>Memory</Text>
                        <SwitchSelector options={ram}
                                    initial={0}
                                    onPress={value => setStorageSelection({...storageSelection, Memory: value})}
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
                                    options={storage}
                                    initial={0}
                                    onPress={value => setStorageSelection({...storageSelection, Storage: value})}
                                    hasPadding
                                    textColor= 'black'
                                    selectedColor='white'
                                    buttonColor='black'
                                    borderColor='black'
                                    borderRadius={0}
                                    // buttonMargin={10}
                                    style={style.selector}/>
                    </View>
                        <TouchableOpacity activeOpacity={0.7} style={style.saveButton} onPress={variantHandler}>
                            <Text style={{color:'white', fontSize: 20}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
    </Modal>

    <View style={style.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={style.PhoneTitle}>
          {props.data.Name}
          {storageSelection.Memory == "" ? (<></>)
          : (<Text style={style.PhoneTitle}>({storageSelection.Memory}, {storageSelection.Storage})</Text> )}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={style.modalTrigger}>
          <Icon name="dungeon" size={20} color="black"/>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
        <View style={style.ratingBox}>
          <Text style={{fontWeight:'bold',color:'white'}}>{props.data.Rating}
            <ICon name="star" size={13} color="white"/>
          </Text>
        </View>
        <View style={style.infoButton}>
        <TouchableOpacity activeOpacity={0.7} onPress={pressHandler}>
          <Text >
          <ICon name="exclamationcircleo" size={15} color="white"/>
          More Details</Text>
        </TouchableOpacity>
        </View>
        </View>
        <Text style={{fontSize:20,fontWeight:'bold',margin:5}}>
          <Icon name="rupee-sign" size={17} color="black"/>
         {props.data.Price}</Text>
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
      margin: 12,
    },
    PhoneTitle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    modalTrigger: {
      position: 'absolute',
      right: 10,
      top: 3,
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
    infoButton: {
      position: 'absolute',
      justifyContent:'center',
      right: 5,
      backgroundColor: '#ababab',
      borderRadius: 5,
      width: 110,
    },
    modalContainer: {
      justifyContent: 'flex-end',
      flex:1 ,
  },
  modalSelectContainer: {
    backgroundColor: 'white',
    height: 400,
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
})