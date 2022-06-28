import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React,{ useState,useEffect, memo } from 'react';
import { windowHeight,windowWidth } from '../../components/export';
import HeaderButtons from '../../components/HeaderButtons';
import { Divider } from '@react-native-material/core';
import AntDesign from 'react-native-vector-icons';
import { Dropdown } from 'react-native-material-dropdown-v2';
import DropDownPicker from 'react-native-dropdown-picker';

export default function MiscOptions({navigation}){

  const [optionsSelection, setOptionsSelection] = useState({
    label: 'Storage',
    Storage: '',
    Brand: ''
  })

  const storage = [
    { label: 'Storage', value: '64GB',Price: 3000 },
    { label: 'Storage', value: '128GB',Price: 6000  },
    { label: 'Storage', value: '256GB', Price: 8000 },
    { label: 'Storage', value: '512GB',Price: 10000 },
  ];

  const memory = [
    { label: 'Storage', value: '64GB',Price: 3000 },
    { label: 'Storage', value: '128GB',Price: 6000  },
    { label: 'Storage', value: '256GB', Price: 8000 },
    { label: 'Storage', value: '512GB',Price: 10000 },
  ];
  const os = [
    { label: 'Android', value: 'Android',Price: 500 },
    { label: 'Puzzel UI', value: 'PuzzelUI',Price: 0  },
  ];

  const SubOptions = (props) => {
  return(
    <View style={styles.SubOptionsContainer}>
    {props.data.map((item,index)=>
      <TouchableOpacity key={index} onPress={()=>setOptionsSelection({...optionsSelection, [props.title] : item})} 
        style={styles.SubOptions}> 
      <Text style={styles.OptionText}>{item.value}</Text>
    </TouchableOpacity>)}
    </View>
  )}
  
  const MenuBar = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Sony', value: 'Sony'},
      {label: 'Adata', value: 'Adata'},
      {label: 'Seagate', value: 'Seagate'}
    ]);
    return (
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode="SCROLLVIEW"
    />
    )
  }


  const Option = (props) => (
      <View style={styles.OptionContainer}> 
            <View style={styles.TitleHolder}>
                <Text style={styles.titleText}>{props.title}</Text>
                <View style={styles.priceHolder}>
                    <Text style={styles.priceText}>{optionsSelection.Storage.Price ? optionsSelection.Storage.Price : '0' }</Text>
                </View>
            </View> 
        <Divider/> 
        {props.subOptions == false ? (<></>):   
        (<MenuBar/>)}
        <SubOptions title={props.title} data={props.data}/>
      </View>
  )

  return (
    <View style={styles.MiscContainer}>
        <HeaderButtons navigation={navigation} title='Customization'/>
        <ScrollView>   
            <Option title='Storage' data={storage}/> 
            <Option title='Memory' data={memory}/>
            <Option title='Operating System' data={os} subOptions={false}/>
            <Option title='Refresh Rate' data={os}/>
            <Option title='Pre-installed Apps' data={os}/>
            <Option title='Display' data={os}/>
            <Option title='Processor' data={os}/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    MiscContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    OptionContainer: {
        height:windowHeight * 0.28,
        width: windowWidth * 0.9,
        alignSelf: 'center',
        backgroundColor: 'grey',
        elevation: 10,
        borderRadius: 20,
        marginBottom: 30,
    },
    TitleHolder: {
        width: '100%',
        height: '25%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'grey',
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
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: 'black',
    },
    priceText: {
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 16,
    },
    SubOptionsContainer: {
      width: '80%',
      height: '25%',
      justifyContent: 'center',
      alignSelf:'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: 'white',
      flexDirection: 'row',
      marginTop: 10,
    },
    SubOptions: {
      height: 30,
      width: 40,
      backgroundColor: 'white',
      borderRadius: 5,
      margin: 10,
      justifyContent: 'center',
      backgroundColor: 'grey'
    },
    OptionText: {
      alignSelf: 'center',
      fontSize:10,
      fontWeight: 'bold',
    },
});