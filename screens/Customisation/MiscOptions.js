import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React,{ useState,useEffect } from 'react';
import { windowHeight,windowWidth } from '../../components/export';
import HeaderButtons from '../../components/HeaderButtons';
import Options from './components/MiscOptions/Options';
import AntDesign from 'react-native-vector-icons';
import { Dropdown } from 'react-native-material-dropdown-v2';
import {setDevice,getDevice} from './components/DataHandler'
import { storageData,OSData,Memory,DisplayData,ProcessorData,PreInstalledApps,BackCamera,FrontCam } from './components/MiscOptions/Data';


export default function MiscOptions({navigation}){

  const [MainCamera,setMainCamera] = useState({
    component: 'Main Camera',
    brand: '',
    description: ''
  })
  const [wideLens,setWideLens] = useState({
    component: 'Wide Lens',
    brand: '',
    description: ''
  })
  const [TeleLens,setTeleLens] = useState({
    component: 'TelePhoto Lens',
    brand: '',
    description: ''
  })
  const [FrontCamera,setFrontCamera] = useState({
    component: 'Front Camera',
    brand: '',
    description: ''
  })

  const [storage, setStorage] = useState({
    component: 'Storage',
    brand: '',
    description:'',
  })
  
  const [memory,setMemory] = useState({
    component: 'Memory',
    brand:'',
    description: '',
  })
  // console.log(storage)

  const [os,setOS] = useState({
    component: 'Operating System',
    brand:'',
    description: ''
  })

  const [Display,setDisplay] = useState({
    component: 'Refresh Rate',
    brand:'',
    description: ''
  })

  const [Processor,setProcessor] = useState({
    component: 'Processor',
    brand:'',
    description: ''
  })

  const [PApps,setPApps] = useState({
    component: 'PreInstalled Apps',
    description: ''
  })

  const [currentTotal,setCurrentTotal] = useState(0);
  const [errorMessage,setErrorMessage] = useState(true)

  const saveData = (data) => {
    setDevice(data,'deviceComponents')
    setDevice({'Price' : currentTotal})
  }

  const checkSelection = () =>{
    let data = {
      'Storage': storage,
      'Memory' : memory,
      'Os' : os,
      'Display' : Display,
      'Processor' : Processor,
      'PreInstalledApps' : PApps,
      'BackCamera': {
        'Wide': wideLens,
        'Main': MainCamera,
        'Tele': TeleLens
      },
      'FrontCamera': FrontCamera,
    }
    console.log({data,'Price' : currentTotal})
    if(storage.description || memory.description || os.description || 
    Display.description || !Processor.description || !PreInstalledApps.description || 
    FrontCam.description == '' || !BackCamera.Wide.description || !BackCamera.Main.description || !BackCamera.Tele.description){
      saveData(data)
    }else{
      setErrorMessage(true)
    }
  }

  useEffect(() => {
    errorMessage ? setErrorMessage(false) : '' 
    checkSelection()
  }, [storage,memory,os,Display,Processor,PApps,BackCamera,FrontCamera])
  

  useEffect(() => {
    let amount = 0
    getDevice().then((data)=>{
      setStorage(data.deviceComponents?.Storage)
      data.deviceComponents?.Storage?.description?.price ?
      amount += data.deviceComponents?.Storage?.description?.price : ''
      setMemory(data.deviceComponents?.Memory)
      data.deviceComponents?.Memory?.description?.price ?
      amount += data.deviceComponents?.Memory?.description?.price :''
      setDisplay(data.deviceComponents?.Display)
      data.deviceComponents?.Display?.description?.price ? 
      amount += data.deviceComponents?.Display?.description?.price : ''
      setOS(data.deviceComponents?.Os)
      data.deviceComponents?.Os?.description?.price ?
      amount += data.deviceComponents?.Os?.description?.price : ''
      setFrontCamera(data.deviceComponents?.FrontCamera)
      data.deviceComponents?.FrontCamera?.description?.price ?
      amount += data.deviceComponents?.FrontCamera?.description?.price : ''
      setPApps(data.deviceComponents?.PreInstalledApps)
      data.deviceComponents?.PreInstalledApps?.description?.price ?
      amount += data.deviceComponents?.PreInstalledApps?.description?.price : ''
      setProcessor(data.deviceComponents?.Processor)
      data.deviceComponents?.Processor?.description?.price ? 
      amount += data.deviceComponents?.Processor?.description?.price : ''
      setWideLens(data.deviceComponents?.BackCamera.Wide)
      data.deviceComponents?.BackCamera?.Wide?.description?.price ?
      amount += data.deviceComponents?.BackCamera?.Wide?.description?.price : ''
      setTeleLens(data.deviceComponents?.BackCamera.Tele)
      data.deviceComponents?.BackCamera?.Tele?.description?.price ?
      amount += data.deviceComponents?.BackCamera?.Tele?.description?.price : ''
      setMainCamera(data.deviceComponents?.BackCamera.Main)
      data.deviceComponents?.BackCamera?.Main?.description?.price ?
      amount += data.deviceComponents?.BackCamera?.Main?.description?.price: ''
      data.componentPosition.DisplaySize?.price ? 
      amount += data.componentPosition.DisplaySize?.price: ''
      setCurrentTotal(amount)
    }
    )
  }, [])
  


  return (
    <View style={styles.MiscContainer}>
        <HeaderButtons navigation={navigation} title='Customization'/>
        <ScrollView>   
            <Options title='Storage' data={storageData[storage?.brand]} state={storage} 
                  setState={setStorage} menuData={storageData?.storageBrands}
                  currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/> 

            <Options title='Memory' data={Memory[memory?.brand]} menuData={Memory.memoryBrands}
              state= {memory} setState={setMemory} currentTotal={currentTotal} 
              setCurrentTotal={setCurrentTotal}/>

            <Options title='Processor' data={ProcessorData} state= {Processor} 
            setState={setProcessor} currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/>

            <Options title='Operating System' data={OSData} state={os} setState={setOS}
            currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/>

            <Options title='Display' menuData={DisplayData?.displayBrands} data={DisplayData[Display?.brand]} state= {Display} 
            setState={setDisplay} currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/>

            <Options title='Pre-installed Apps' data={PreInstalledApps} state={PApps} setState={setPApps}
            currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/>

            <Text style={styles.titleText}>Camera Selections</Text>
           <Options title='Main Lens' data={BackCamera.MainCamera[MainCamera?.brand]} menuData={BackCamera.MainCamera.MainCameraData} state={MainCamera} 
              setState={setMainCamera} currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/>

            <Options title='Wide Angle Lens' data={BackCamera.WideAngleLens[wideLens?.brand]} menuData={BackCamera.WideAngleLens.WideAngleLensData} state={wideLens} setState={setWideLens}
              currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/>

            <Options title='TelePhoto Lens' data={BackCamera.Telephoto[TeleLens?.brand]} menuData={BackCamera.Telephoto.TelephotoData} state={TeleLens} setState={setTeleLens}
              currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/>

            <Options title='Front Camera' data={FrontCam[FrontCamera?.brand]} menuData={FrontCam?.FrontCameraData} state={FrontCamera} setState={setFrontCamera}
              currentTotal={currentTotal} setCurrentTotal={setCurrentTotal}/>


        </ScrollView>
        <View style={styles.errorMessageHolder}>
          {errorMessage ? 
          (<Text style={{color:'red'}}>All selections are mandatory for this section</Text>): (<></>)}
        </View>
        <View style={styles.BottomBar}>
          <View style={styles.totalView}>
            <Text>CurrentTotal: {currentTotal} </Text>
          </View>
        <TouchableOpacity style={styles.FinalBtn} activeOpacity={0.6} onPress={()=>navigation.navigate('FinalDesign')}>
              <View>
                <Text>Finish</Text>
              </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    MiscContainer: {
        flex: 1,
        backgroundColor: '#F2F2F7',
    },
    BottomBar: {
      flexDirection: 'row',
      height: windowHeight *0.07,
      width: windowWidth,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10
    },
    totalView:{
      width: '70%',
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems:'center',
      borderTopLeftRadius: 10
    },
    FinalBtn: {
      width: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      borderTopRightRadius: 10,
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 16,
      alignSelf: 'center'
  },
  errorMessageHolder: {
    alignItems: 'center',
  }
});