import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
import ImageScroll from '../components/PhoneDetails/ImageScroll';
import HeaderButtons from '../components/HeaderButtons';
import Camera from '../components/CustomizationTabs/Camera';
import Display from '../components/CustomizationTabs/Display';
import RAM from '../components/CustomizationTabs/RAM';
import Fingerprint from '../components/CustomizationTabs/Fingerprint';
import PowerButton from '../components/CustomizationTabs/PowerButton';
import FrontCamera from '../components/CustomizationTabs/FrontCamera';


export default function Tabs({route,navigation}){
    const [activeTab,setActiveTab] = useState("Display");
    const [activeTabComponent,setActiveTabComponent] = useState(<Display/>);


    let data = route.params;
    let image = [];
    {console.log(data)}
    {Object.values(route.params.Image).map((value) => (
            image.push(value)
        ))}
  

    const TabOption = (props) => {
        const pressHandler =() =>{
            props.setActiveTab(props.text);
            setActiveTabComponent(props.component);
        }
        return(
        <TouchableOpacity style={{ backgroundColor: props.activeTab === props.text ? 'black' : 'white', 
            paddingVertical: 6, 
            paddingHorizontal: 16, borderRadius: 60, justifyContent: 'center', alignItems: 'center'}}  
            onPress={pressHandler}
            >
        <Text style={{ color: props.activeTab === props.text ? 'white' : 'black', 
            fontSize: 14,fontWeight: 'bold',}}>{props.text}</Text>
        </TouchableOpacity>
        );
    };
    return(
        <View style={style.container}>
        <HeaderButtons title={data.Name} navigation={navigation} cartVisibility={true}/>
        <ImageScroll image={image}/>
        {activeTab === activeTab ? activeTabComponent 
        : (<Text>Unexpected Error!. Close the app and watch some TV. We're fixing it for your</Text>)}
        <View style={style.buttons}>
        <ScrollView horizontal={true} style={style.buttonScroller} showsHorizontalScrollIndicator={false}>
            <TabOption text="Display" activeTab={activeTab} setActiveTab={setActiveTab} component={<Display/>}/>
            <TabOption text="Camera" activeTab={activeTab} setActiveTab={setActiveTab} component={<Camera/>}/> 
            <TabOption text="RAM" activeTab={activeTab} setActiveTab={setActiveTab} component={<RAM/>}/>
            <TabOption text="Fingerprint" activeTab={activeTab} setActiveTab={setActiveTab} component={<Fingerprint/>}/> 
            <TabOption text="Power Button" activeTab={activeTab} setActiveTab={setActiveTab} component={<PowerButton/>}/>
            <TabOption text="Front Camera" activeTab={activeTab} setActiveTab={setActiveTab} component={<FrontCamera/>}/> 
        </ScrollView>
        </View>
        </View>
);
}


const style = StyleSheet.create({
    buttons: {
        position: 'absolute',
        height: 40,
        left: 0,
        bottom: 0,
        flexDirection: 'row', 
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginLeft: 5,
    },
    buttonScroller: {
        height: 30,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});