import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderButtons from '../HeaderButtons'

const FullDetails = ({route,navigation}) => {
    const data = route.params;
    

    // let title = []
    // let properties = []
    // {Object.keys(data).map((value) => (
    //   title.push(value),
    //   properties.push(data[value])
    //   ));
    // properties.map((value) => (
    //   Object.keys(value).map != null ? properties.pop(value) : null
    // ))}


  return (
    <>
        <HeaderButtons title={data.Name} navigation={navigation}/>
        <View style={{backgroundColor: 'white',flex:1}}>
          <ScrollView >
              <View>
              <Text></Text>
              {/* <Text>{data[key]}</Text> */}
              </View>
          </ScrollView>
        </View>
    </>
  )
}

export default FullDetails