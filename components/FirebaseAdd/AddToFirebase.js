import { View, Text } from 'react-native';
import { Button } from '@react-native-material/core';
import React from 'react';
import firebase from '../../firebase';
const db = firebase.firestore();

const Phones = [
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

export default function AddTodb (){
    const addPhoneTodb = (phone) => { 
      db.collection("stock_phones").doc("2ahRYGxOlxOy2wE0wRRV").set({phone})
    .then(() => {
        console.log("Document successfully written!",phone);
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }
    
    
  return (
    <>
    <Text>Header</Text>
    {Phones.map((phone,index)=>(
      <Button key={index} onPress={addPhoneTodb(phone)}
    title='button'/>
    ))}
    </>
  );
}

