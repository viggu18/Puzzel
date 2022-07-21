import AsyncStorage from '@react-native-async-storage/async-storage'

export const getDevice = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('custom-device')
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
        console.log(e)
    }
    console.log('Done.')
  }

export async function setDevice(value,option){
    if(option == null){    
        try {
            await AsyncStorage.mergeItem('custom-device', JSON.stringify(value))
        } catch(e) {
            console.log(e)
        }  
    }else if(option == 'componentPosition'){
        let data = {
            ['componentPosition']:{
                [value.component] : value
            }
        }
        setDevice(data)
    }else if(option == 'deviceComponents'){
        let data ={
            ['deviceComponents']:value
        }
        setDevice(data)
    }
    console.log('Done.')
}
