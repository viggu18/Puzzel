import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from "@react-native-material/core";
import HeaderButtons from '../components/HeaderButtons';
import firebase from '../firebase';
const db = firebase.firestore();

export const Phones = [
    {
        Name: 'Xioami Redmi K20',
        Image: {
            img1: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-5.jpg',
            img2: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-6.jpg',
            img3: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-7.jpg',
        },
        Network: 'GSM/HSPA/LTE',
        LaunchDate: '2019, May',
        Weight: '191g',
        Glass: 'Gorilla Glass 5',
        Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:6',
        Os: 'Android 9.0 Upgradable to Android 11',
        Chipset: 'Qualcomm Snapdragon 730',
        Gpu: 'Adreno 618',
        Memory: {
            option1: '6GB',
            option2: '8GB',
            option3: '12GB'
        },
        Storage: {
            option1: '64GB', 
            option2: '128GB', 
            option3: '256GB', 
            option4: '512GB'
        },
        BackCamera: '48 MP,(wide) 8 MP(telephoto) 13 MP(ultrawide)',
        FrontCamera: 'Motorized pop-up 20 MP, f/2.2, (wide), 1/3.4", 0.8µm',
        Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
        Battery: '4000mAh',
        Colors: 'Carbon black, Red flame, Glacier blue, Pearl White',
        Price: '18999',
        Rating: '4.7'
    },
    {
        Name: 'Redmi K20',
        Image: {
            img2: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-5.jpg',
            img1: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-6.jpg',
            img3: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-7.jpg',
        },
        Network: 'GSM/HSPA/LTE',
        LaunchDate: '2019, May',
        Weight: '191g',
        Glass: 'Gorilla Glass 5',
        Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:6',
        Os: 'Android 9.0 Upgradable to Android 11',
        Chipset: 'Qualcomm Snapdragon 730',
        Gpu: 'Adreno 618',
        Memory: {
            option1: '6GB',
            option2: '8GB',
            option3: '12GB'
        },
        Storage: {
            option1: '64GB', 
            option2: '128GB', 
            option3: '256GB', 
            option4: '512GB'
        },
        BackCamera: '48 MP,(wide) 8 MP(telephoto) 13 MP(ultrawide)',
        FrontCamera: 'Motorized pop-up 20 MP, f/2.2, (wide), 1/3.4", 0.8µm',
        Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
        Battery: '4000mAh',
        Colors: 'Carbon black, Red flame, Glacier blue, Pearl White',
        Price: '18999',
        Rating: "4.8"
    },
    {
        Name: 'Redmi K20',
        Image: {
            img3: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-5.jpg',
            img2: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-6.jpg',
            img1: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-7.jpg',
        },
        Network: 'GSM/HSPA/LTE',
        LaunchDate: '2019, May',
        Weight: '191g',
        Glass: 'Gorilla Glass 5',
        Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:6',
        Os: 'Android 9.0 Upgradable to Android 11',
        Chipset: 'Qualcomm Snapdragon 730',
        Gpu: 'Adreno 618',
        Memory: {
            option1: '6GB',
            option2: '8GB',
            option3: '12GB'
        },
        Storage: {
            option1: '64GB', 
            option2: '128GB', 
            option3: '256GB', 
            option4: '512GB'
        },
        Camera: 'Tripple Camera, 48MP',
        BackCamera: '48 MP,(wide) 8 MP(telephoto) 13 MP(ultrawide)',
        FrontCamera: 'Motorized pop-up 20 MP, f/2.2, (wide), 1/3.4", 0.8µm',
        Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
        Battery: '4000mAh',
        Colors: 'Carbon black, Red flame, Glacier blue, Pearl White',
        Price: '18999',
        Rating: '3.9'
    },   
    {
        Name: 'Redmi K20',
        Image: {
            img1: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-5.jpg',
            img2: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-6.jpg',
            img3: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-7.jpg',
        },
        Network: 'GSM/HSPA/LTE',
        LaunchDate: '2019, May',
        Weight: '191g',
        Glass: 'Gorilla Glass 5',
        Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:6',
        Os: 'Android 9.0 Upgradable to Android 11',
        Chipset: 'Qualcomm Snapdragon 730',
        Gpu: 'Adreno 618',
        Memory: {
            option1: '6GB',
            option2: '8GB',
            option3: '12GB'
        },
        Storage: {
            option1: '64GB', 
            option2: '128GB', 
            option3: '256GB', 
            option4: '512GB'
        },
        BackCamera: '48 MP,(wide) 8 MP(telephoto) 13 MP(ultrawide)',
        FrontCamera: 'Motorized pop-up 20 MP, f/2.2, (wide), 1/3.4", 0.8µm',
        Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
        Battery: '4000mAh',
        Colors: 'Carbon black, Red flame, Glacier blue, Pearl White',
        Price: '18999',
        Rating: '2.5'
        },
];
        

export default function PhoneList({navigation}){
    const [err,setErr] = React.useState(false);
    
    const docRef = db.collection("stock_phones").doc("2ahRYGxOlxOy2wE0wRRV");
    docRef.get().then((doc) => {
    if (doc.exists) {
        console.log(doc.data());
        return doc.data().Phone;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch((error) => {
    console.log("Error getting document:", error);
    setErr(error);
    });

    const user = firebase.auth().currentUser;
    console.log(user);

  return (
    <>
    <HeaderButtons title="P U Z Z E L" backButton={false} cartVisibility={true} navigation={navigation}/> 
    <ScrollView showsVerticalScrollIndicator={false}>
    {Phones.map((Phone,index)=> (
    <View key={index}>
        <TouchableOpacity style={S.ListItemStyle} onPress={()=>(navigation.push('PhoneDetails',Phone))}>
            <PhoneImage image={Phone}/>
            <PhoneInfo info={Phone}/>
        </TouchableOpacity>
        <Divider width={0.5} orientation='vertical' style={{marginHorizontal:20,borderWidth: 0.4}}/>
    </View>
    ))}
    </ScrollView>
    </>
  );
}

const PhoneImage = (props) => (
    <View>
        <Image source={{uri: props.image.Image.img1}} style={S.image}/>
    </View>
);
const PhoneInfo = (props) => (
    <View style={S.PhoneInfo}>
        <Text style={{fontWeight: 'bold',fontSize: 16}}>{props.info.Name}</Text>
        <Text style={S.restOfInfo}>{props.info.Price}</Text>
        {/* <Text>{props.info.Memory}</Text>
        <Text>{props.info.BackCamera}</Text>
        <Text>{props.info.FrontCamera}</Text>
        <Text>{props.info.Battery}</Text>
        <Text>{props.info.Os}</Text> */}
    </View>
);

const S = StyleSheet.create({
    image: {
        marginTop:4,
        width: 140, 
        height:180,
        borderRadius: 8,
    },
    ListItemStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        margin:20,
    },
    PhoneInfo: {
        marginTop: 10,
        marginLeft: 5,
    },
    restOfInfo: {
        position: 'relative',
    }
})
