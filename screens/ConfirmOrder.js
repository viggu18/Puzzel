import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderButtons from '../components/HeaderButtons'
import Items from '../components/Cart/Items'
import AddressBox from '../components/AddressBox'

const data = {
  "data" :{
    "BackCamera": "48 MP,(wide) 8 MP(telephoto) 13 MP(ultrawide)",
    "Battery": "4000mAh",
    "Chipset": "Qualcomm Snapdragon 730",
    "Colors": "Carbon black, Red flame, Glacier blue, Pearl White",
    "Display": "Super Amoled HDR, 1080 x 2340 pixels, 19.5:6",
    "FrontCamera": "Motorized pop-up 20 MP, f/2.2, (wide), 1/3.4\", 0.8µm",
    "Glass": "Gorilla Glass 5",
    "Gpu": "Adreno 618",
    "Image": {
      "img1": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-5.jpg",
      "img2": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-6.jpg",
      "img3": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-7.jpg",
    },
    "LaunchDate": "2019, May",
    "Memory": {
      "option1": "6GB",
      "option2": "8GB",
      "option3": "12GB",
    },
    "Name": "Xioami Redmi K20",
    "Network": "GSM/HSPA/LTE",
    "Os": "Android 9.0 Upgradable to Android 11",
    "Price": "18999",
    "Rating": "4.7",
    "Sound": "Loudspeaker:      Yes 3.5mm jack: Yes",
    "Storage": {
      "option1": "64GB",
      "option2": "128GB",
      "option3": "256GB",
      "option4": "512GB",
    },
    "Weight": "191g",
  },
  "storageSelection":{
    "Memory": "6GB",
    "Storage": "64GB",
  },
}
export default function ConfirmOrder({route,navigation}){
  console.log(route.params)
  return (
    <View>
        <HeaderButtons title='Confirm Order' navigation={navigation}/>
        <ScrollView>
            <Items data={data} display={true}/>
            {/* <AddressBox address={route.params} addressDisplay={true}/> */}
        </ScrollView>
    </View>
  )
}

