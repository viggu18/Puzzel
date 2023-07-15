import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import { Divider } from "@react-native-material/core";
import HeaderButtons from '../components/HeaderButtons';
import firebase from '../firebase';
import { windowHeight } from '../components/export';
import SearchBar from '../components/PhoneList/SearchBar';
import BufferScreen from '../components/BufferScreen';
const db = firebase.firestore();

// const Phones= [{
//     Name: 'Puzzle Bear',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-1.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-2.jpg',
//         img3: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-3.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
//     LaunchDate: '2022, November',
//     Weight: '196g',
//     Glass: 'Gorilla Glass 3',
//     Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:9 ratio ',
//     Os: 'Android 9.0 (Pie), upgradable to Android 10, Magic UI 2.1',
//     Chipset: 'Kirin 710F (12 nm)',
//     Gpu: 'Mali-G51 MP4',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB',
//         option4: '16GB'
//     },
//     Storage: {
       
//         option1: '128GB', 
//         option2: '256GB', 
//         option3: '512GB'
//     },
//     BackCamera: '16 MP, f/1.8, (wide), PDAF 8 MP, f/2.4, 13mm (ultrawide) 2 MP, f/2.4, (depth)',
//     FrontCamera: 'Motorized pop-up 16 MP, f/2.0',
//     Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 4000 mAh, non-removable',
//     Colors: 'Emerald Green, Midnight Black, Sapphire Blue',
//     Price: '21900',
//     Rating: '4.4'
//   },
//   {
//     Name: 'Puzzle Leet',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-s5-pro-01.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-s5-pro-02.jpg',
//         img3: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-s5-pro-03.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE Cat4 150/50 Mbps',
//     LaunchDate: '2022, Oct',
//     Weight: '195g',
//     Glass: 'Glass front',
//     Display:'Full HD display, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)',
//     Os: 'Android 10',
//     Chipset: 'Mediatek MT6765 Helio P35 (12nm)',
//     Gpu: 'PowerVR GE8320',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB'
//     },
//     Storage: {
//         option1: '64GB', 
//         option2: '128GB', 
//         option3: '256GB', 
//         option4: '512GB'
//     },
//     BackCamera: '16 MP, f/1.8, (wide), PDAF 2 MP, (depth)',
//     FrontCamera: 'Motorized pop-up 32 MP, (wide)',
//     Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 4000 mAh, non-removable',
//     Colors: 'Nebula Black, Quetzal Cyan, Violet',
//     Price: '15999',
//     Rating: '4.3'
//   },
//   {
//     Name: 'Puzzle Caster',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f11-pro-10.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f11-pro-3.jpg',
//         img3: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f11-pro-l2.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat7 300/50 Mbps',
//     LaunchDate: '2022, December',
//     Weight: '190g',
//     Glass: 'GGlass front, plastic back, plastic frame',
//     Display:'IPS LCD, 1080 x 2340 pixels, 19.5:9 ratio',
//     Os: 'Android 9.0 (Pie), ColorOS 6',
//     Chipset: 'Mediatek MT6771 Helio P70 (12nm)',
//     Gpu: 'Mali-G72 MP3',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB'
//     },
//     Storage: {
//         option1: '64GB', 
//         option2: '128GB', 
//         option3: '256GB', 
//         option4: '512GB'
//     },
//     BackCamera: '48 MP, f/1.8, (wide), 1/2.25", 0.8µm, PDAF 5 MP, f/2.4, (depth)',
//     FrontCamera: 'Motorized pop-up 16 MP, f/2.0, 26mm (wide), 1/3.06", 1.0µm',
//     Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 4000 mAh, non-removable',
//     Colors: 'Thunder Black, Aurora Green',
//     Price: '19999',
//     Rating: '4.7'
//   },
//   {
//     Name: 'Puzzle Dragon',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-k3-1.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-k3-10.jpg',
//         img3: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-k3-2.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A',
//     LaunchDate: '2024, May',
//     Weight: '191g',
//     Glass: 'Corning Gorilla Glass 5',
//     Display:'AMOLED, 1080 x 2340 pixels, 19.5:9 ratio (~394 ppi density)',
//     Os: 'Android 9.0 (Pie), ColorOS 6',
//     Chipset: 'Qualcomm SDM710 Snapdragon 710 (10 nm)',
//     Gpu: 'Adreno 616',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB'
//     },
//     Storage: {
//         option1: '128GB', 
//         option2: '256GB', 
//         option3: '512GB', 
//         option4: '1 TB'
//     },
//     BackCamera: '16 MP, f/1.7, 1/2.5", 1.12µm, PDAF',
//     FrontCamera: 'Motorized pop-up 16 MP, f/2.0, 26mm (wide), 1/3.06", 1.0µm',
//     Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 3765 mAh, non-removable',
//     Colors: 'Black, Nebula Purple, Morning White',
//     Price: '26500',
//     Rating: '4.5'
//   },
//   {
//     Name: 'Puzzle Meli',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-nex3-1.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-nex3-2.jpg',
//         img3: 'https://fdn.gsmarena.com/imgroot/reviews/19/vivo-nex-3-5g/lifestyle/-1024w2/gsmarena_009.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A (5CA) Cat18 1200/150 Mbps',
//     LaunchDate: '2003, Jan',
//     Weight: '217.3g',
//     Glass: 'Glass front, glass back, aluminum frame',
//     Display:'Super Amoled HDR 10, 1080 x 2256 pixels (~363 ppi density)',
//     Os: 'Android 9.0 (Pie), Funtouch 9.1',
//     Chipset: 'Qualcomm SM8150 Snapdragon 855+ (7 nm)',
//     Gpu: 'Adreno 640 (700 MHz)',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB'
//     },
//     Storage: {
//         option1: '64GB', 
//         option2: '128GB', 
//         option3: '256GB', 
//         option4: '512GB'
//     },
//     BackCamera: '64 MP, f/1.8, (wide), 1/1.72", 0.8µm, PDAF 13 MP, f/2.5, (telephoto), PDAF',
//     FrontCamera: 'Motorized pop-up 16 MP, f/2.1, 26mm (wide), 1/3.06", 1.0µm',
//     Sound: '32-bit/192kHz audio:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 4500 mAh, non-removable',
//     Colors: 'Black, Blue',
//     Price: '31200',
//     Rating: '4.7'
//   },
//   {
//     Name: 'Puzzle Original',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v15-pro-ruby-red2.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v15-pro-ruby-red1.jpg',
//         img3: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v15-pro-coral-red.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
//     LaunchDate: '2024, June',
//     Weight: '185g',
//     Glass: 'Gorilla Glass 5',
//     Display:'Super Amoled HDR, 080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)',
//     Os: 'Android 9.0 (Pie), Funtouch 9',
//     Chipset: 'Qualcomm SDM675 Snapdragon 675 (11 nm',
//     Gpu: 'Adreno 618',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB'
//     },
//     Storage: {
//         option1: '64GB', 
//         option2: '128GB', 
//         option3: '256GB', 
//         option4: '512GB'
//     },
//     BackCamera: '48 MP, f/1.8, (wide), 1/2.0", 0.8µm, PDAF 8 MP, f/2.2, 13mm (ultrawide)',
//     FrontCamera: 'Motorized pop-up 32 MP, f/2.0, 26mm (wide), 1/2.8", 0.8µm',
//     Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 3700 mAh, non-removable',
//     Colors: 'Topaz Blue, Coral Red, Ruby Red',
//     Price: '20400',
//     Rating: '4.8'
//   },
//   {
//     Name: 'Puzzle Axio',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-pro-zs670ks-zs671ks-1.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-pro-zs670ks-zs671ks-2.jpg',
//         img3: 'https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-002.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A (5CA) Cat19 1800/150 Mbps, 5G 3.6 Gbps DL',
//     LaunchDate: '2024, May',
//     Weight: '230g',
//     Glass: 'Gorilla Glass 6',
//     Display:'Super Amoled HDR, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)',
//     Os: 'Android 10, upgradable to Android 12, ZenUI',
//     Chipset: 'Qualcomm SM8250 Snapdragon 865 5G+ (7 nm+)',
//     Gpu: 'Adreno 650',
//     Memory: {
//         option1: '8GB',
//         option2: '12GB',
//         option3: '16GB'
//     },
//     Storage: {
//         option1: '64GB', 
//         option2: '128GB', 
//         option3: '256GB', 
//         option4: '512GB',
//         option4: '1 TB',
//     },
//     BackCamera: '64 MP, f/1.8, 26mm (wide), 1/1.72", 0.8µm, PDAF, OIS8 MP, f/2.4, 80mm (telephoto), PDAF, OIS, 3x optical zoom12 MP, f/2.2, 113˚, 17mm (ultrawide), 1/2.55", 1.4µm, dual pixel PDAF',
//     FrontCamera: 'Motorized flip-up main camera module',
//     Sound: 'stereo speakers:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 5000 mAh, non-removable',
//     Colors: 'Aurora Black, Pastel White',
//     Price: '39999',
//     Rating: '4.7'
//   },
//   {
//     Name: 'Puzzle Euro',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno-10x-zoom-2.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno-10x-zoom-4.jpg',
//         img3: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno-10x-zoom-3.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A (5CA) Cat18 1200/150 Mbps',
//     LaunchDate: '2022, May',
//     Weight: '210g',
//     Glass: 'Gorilla Glass 5',
//     Display:'Super Amoled HDR,1080 x 2340 pixels, 19.5:9 ratio (~387 ppi density)',
//     Os: 'Android 9.0 (Pie), upgradable to Android 11, ColorOS 11',
//     Chipset: 'Qualcomm SM8150 Snapdragon 855 (7 nm)',
//     Gpu: 'Adreno 640',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB'
//     },
//     Storage: {
//         option1: '64GB', 
//         option2: '128GB', 
//         option3: '256GB', 
//         option4: '512GB'
//     },
//     BackCamera: '48 MP, f/1.7, 26mm (wide), 1/2.0", 0.8µm, PDAF, Laser AF, OIS, 13 MP, 8 MP, ',
//     FrontCamera: 'Motorized pop-up 16 MP, f/2.0, 26mm (wide), 1/3.06", 1.0µm',
//     Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 4065 mAh, non-removable',
//     Colors: 'Ocean Green, Jet Black, Mist Pink, Ocean Blue',
//     Price: '29800',
//     Rating: '4.7'
//   },
//   {
//     Name: 'Puzzle Sage',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v17-pro-vivo-1909-pd1931f-1.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v17-pro-vivo-1909-pd1931f-2.jpg',
//         img3: 'https://fdn.gsmarena.com/imgroot/reviews/19/vivo-v17-pro/lifestyle/-1024w2/gsmarena_010.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A',
//     LaunchDate: '2023, Jan',
//     Weight: '201g',
//     Glass: 'Glass front (Gorilla Glass 6), glass back (Gorilla Glass 6), plastic frame',
//     Display:'Super AMOLED, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)',
//     Os: 'Android 9.0 (Pie), Funtouch 9.1',
//     Chipset: 'Qualcomm SDM675 Snapdragon 675 (11 nm)',
//     Gpu: 'Adreno 612',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB'
//     },
//     Storage: {
//         option1: '64GB', 
//         option2: '128GB', 
//         option3: '256GB', 
//         option4: '512GB'
//     },
//     BackCamera: '48 MP, PDAF 8 MP, f/2.2, 16mm (ultrawide), 1/4.0", 1.12µm, 13 MP, 2 MP', 
//     FrontCamera: 'Motorized pop-up 32 MP, f/2.0, 26mm (wide), 1/2.8", 0.8µm',
//     Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
//     Battery: 'Li-Po 4100 mAh, non-removable',
//     Colors: 'Crystal Black, Crystal Sky, Midnight Ocean',
//     Price: '23990',
//     Rating: '4.4'
//   },
//   {
//     Name: 'Puzzle Nexus',
//     Image: {
//         img1: 'https://fdn2.gsmarena.com/vv/pics/honor/honor-9x-pro-00.jpg',
//         img2: 'https://fdn2.gsmarena.com/vv/pics/honor/honor-9x-pro-01.jpg',
//         img3: 'https://fdn2.gsmarena.com/vv/pics/honor/honor-9x-pro-02.jpg',
//     },
//     Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
//     LaunchDate: '2022, July',
//     Weight: '202g',
//     Glass: 'IPS LCD',
//     Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:6',
//     Os: 'Android 9.0 (Pie), upgradable to Android 10, EMUI 9.1, no Google Play Services',
//     Chipset: 'Kirin 810 (7 nm)',
//     Gpu: 'Mali-G52 MP6',
//     Memory: {
//         option1: '6GB',
//         option2: '8GB',
//         option3: '12GB'
//     },
//     Storage: {
//         option1: '64GB', 
//         option2: '128GB', 
//         option3: '256GB', 
//         option4: '512GB'
//     },
//     BackCamera: '48 MP, f/1.8, (wide), 1/2.0", 0.8µm, PDAF 8 MP, f/2.4, 120˚ (ultrawide)',
//     FrontCamera: 'Motorized pop-up 16 MP, f/2.2, 26mm (wide), 1/3.06", 1.0µm',
//     Sound: 'Loudspeaker:	Yes 4.5mm jack: Yes',
//     Battery: 'Li-Po 4000 mAh, non-removable',
//     Colors: 'Midnight Black, Phantom Purple',
//     Price: '21990',
//     Rating: '4.5'
//   },
//   ]

export default function PhoneList({navigation}){
    const [err,setErr] = useState(false);
    const [Phones,setPhones] = useState([]);
    const [Filtered,setFiltered] = useState([]);
    const [isLoading,setisLoading] = useState(true);
    const [searchKey, setSearchKey] = useState('');

    const docRef = db.collection("stock_phones").doc("Phones");
    async function getData(){
        if(Phones.length === 0){
            await docRef.get().then((doc) => {
              if (doc.exists) {
                      setPhones(doc.data().List);
                      setisLoading(false);
              } else {
                  console.log("No such document!");
              }
              }).catch((error) => {
                  console.log("Error getting document:", error);
                  setErr(error);
                  setisLoading(true);
                  });
              }
    }
    getData();

    
    const searchHandler = () => {
        // setFiltered(Phones.filter(searchObject(){

        // }))
    }


  return (
    <>
    <HeaderButtons title="P U Z Z E L" backButton={false} cartVisibility={true} navigation={navigation}/>
    {/* <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} searchHandler={searchHandler}/>  */}
    {isLoading ? (<BufferScreen/>):(
    <ScrollView showsVerticalstylecrollIndicator={false} style={{backgroundColor:'white'}}>
    {Phones.map((Phone,index)=> (
        <DisplayList key={index} Phone={Phone} navigation={navigation} searchKey={searchKey}/>
    ))}
    </ScrollView>)
    }
    </>
  );
}

const DisplayList = (props) => (
    <View key={props.index}>
        <TouchableOpacity style={style.ListItemstyle} onPress={()=>(props.navigation.push('PhoneDetails',props.Phone))} activeOpacity={0.7}>
            <PhoneImage image={props.Phone}/>
            <PhoneInfo info={props.Phone}/>
        </TouchableOpacity>
        <Divider width={0.5} orientation='vertical' style={{marginHorizontal:20,borderWidth: 0.4}}/>
    </View>
)

const PhoneImage = (props) => (
    <View>
        <Image source={{uri: props.image.Image.img1}} style={style.image} resizeMode='contain'/>
    </View>
);
const PhoneInfo = (props) => (
    <View style={style.PhoneInfo}>
        <Text style={{fontWeight: 'bold',fontSize: 16}}>{props.info.Name}</Text>
        <Text style={style.restOfInfo}>{props.info.Price}</Text>
        {/* <Text>{props.info.Memory}</Text>
        <Text>{props.info.BackCamera}</Text>
        <Text>{props.info.FrontCamera}</Text>
        <Text>{props.info.Battery}</Text>
        <Text>{props.info.Os}</Text> */}
    </View>
);

const style = StyleSheet.create({
    image: {
        marginTop:4,
        width: 140, 
        height:180,
        borderRadius: 8,
    },
    ListItemstyle: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        margin:20,
        backgroundColor: 'white',
        // borderRadius: 8,
        // elevation: 5,
    },
    PhoneInfo: {
        marginTop: 10,
        marginLeft: 5,
        // backgroundColor:'#F2F2F7'
    },
    restOfInfo: {
        position: 'relative',
    },
    checkConnectionText: {
        fontWeight: '700',
        alignSelf: 'center',
    },
    checkConnectionContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        top: windowHeight * 0.5,
    }
})
