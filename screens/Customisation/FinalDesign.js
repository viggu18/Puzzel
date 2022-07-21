import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDevice } from './components/DataHandler'
import HeaderButtons from '../../components/HeaderButtons'
import FinalImage from './components/FinalDesign/FinalImage'
import ItemPositions from './components/FinalDesign/ItemPositions'
import DeviceDetails from './components/FinalDesign/DeviceDetails'
import BottomBar from './components/FinalDesign/BottomBar'

// const data = {
//     Name: 'Puzzle Click',
//     Image: {
//             img1: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-1.jpg',
//             img2: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-2.jpg',
//             img3: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-3.jpg',
//         },
//     Network: {
// 			label: ' LTE-A (2CA) Cat12 600/50 Mbps',
// 			brand: 'SomeBrand',
// 			price: 1000		
// 		},
//     Weight: '210g',
//         Glass: {
// 			label: 'Gorilla Glass ',
// 			brand: 'SomeBrand',
// 			price: 1000
// 		},
//     Display:
// 		{
// 			label: 'Super Amoled , 1080 x 2340 pixels ',
// 			brand: 'samsung',
// 			price: 1000,
// 		},
//     Os:{
// 			label:'Android 9.0 (Pie), upgradable to Android 10, Magic UI 2.1',
// 			brand: 'Google',
// 			price: 1000
// 		},
//     Chipset:{
// 			label: 'Exynos 2100 ',
// 			brand: 'Samsung',
// 			price: 1000
// 		},
//     Gpu:{ 
// 			label: 'Mali-G51 MP4',
// 			brand: 'Snapdragon',
// 			price: 5000
// 		},
//     Memory: {
// 			label: '6GB',
// 			brand: 'Sony',
// 			price: 8000,
//         },
//     Storage: {
// 			label: '128GB',
// 			brand: 'Samsung',
// 			price: 5000,
//         },
//     BackCamera:{
// 			label: '36 MP, f/1.8, (wide), PDAF 8 MP, f/2.4, 13mm (ultrawide) 12 MP, f/2.4, (depth)',
// 			brand: 'Sony',
// 			price: 5000,
// 		},
//         FrontCamera: {
// 			label: 'Motorized pop-up 16 MP, f/2.0',
// 			brand: 'Sony',
// 			price: 8000,
// 		},
//         Sound: {
// 			label: 'Loudspeaker:	Yes 3.5mm jack: Yes',
// 			brand: 'Sony',
// 			price: 5000
// 		},
//         Battery: {
// 			label: 'Li-Po 3500 mAh, non-removable',
// 			brand: 'SomeBrand',
// 			price: 5000
// 		},
//         Colors: 'Emerald Green, Midnight Black, Sapphire Blue',
//         Price: 10500,
//     positions: {
//       FrontCamera: 'Top Center',
//       BackCamera: 'Center Back Panel',
//       Speaker: 'Button Left',
//       Volume: 'Left Middle',
//       Power: 'Right Middle',
//       Charging: 'Bottom Middle'
//     }
//     }

export default function FinalDesign({navigation}){
  const [FinalDevice,setFinalDevice] = useState('')

  useEffect(() => {
    getDevice().then((data)=>{setFinalDevice(data),console.log(data)})
  }, [])

  console.log(FinalDevice)
  return (
    <View style={styles.FinalDesignContainer}>
        <HeaderButtons navigation={navigation} title='Final Design' />
        <ScrollView showsVerticalScrollIndicator={false}>
        <FinalImage images/>
        <ItemPositions name={FinalDevice.name} data={FinalDevice.componentPosition}/>
        <DeviceDetails data={FinalDevice.deviceComponents}/>
        </ScrollView>
        <BottomBar data={FinalDevice} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    FinalDesignContainer: {
        flex: 1,
        backgroundColor: 'white',
    }
})