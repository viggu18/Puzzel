import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { windowHeight, windowWidth } from '../../../../components/export'

const SubOptions = (props) => {
    const [prevState,setPrevState] = useState('')

    const budgetHandler = (item) =>{
    let amount = 0 
    if(props.currentTotal == 0){
      props.setCurrentTotal(parseInt(item.price))
    }else if(!prevState){
      props.setCurrentTotal(parseInt(props.currentTotal)+parseInt(item.price))
    }else{
      amount = (parseInt(props.currentTotal) - parseInt(prevState.price))+parseInt(item.price)
      props.setCurrentTotal(parseInt(amount))
    }
    setPrevState(item);
    props.setState({...props.state, ['description'] : item})
  }

  useEffect(() => {
    props.data.map((item)=>{  
    props.state?.description?.value == item.value ? props.setState({...props.state, ['description']: item}): ''
  })
   }, [props.state?.brand])  
  
    return(
        <View style={styles.SubOptionsContainer}>
          {props.data.map((item,index)=>
            <TouchableOpacity key={index} 
            onPress={()=>budgetHandler(item)}
              style={[styles.SubOptions,item.value == props.state?.description?.value ? {backgroundColor: '#48C9B0'}: '']}> 
            <Text style={styles.OptionText}>{item.value}</Text>
          </TouchableOpacity>)}
          </View>
        )
    }

export default SubOptions

const styles = StyleSheet.create({
    SubOptionsContainer: {
        width: '80%',
        height: 'auto',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#F2F2F7',
        flexDirection: 'row',
        marginTop: 10,
      },
      SubOptions: {
        height: 'auto',
        width: 'auto',
        backgroundColor: '#F2F2F7',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        elevation: 2,
        borderColor: 'black'
      },
      OptionText: {
        alignSelf: 'center',
        fontSize:10,
        fontWeight: 'bold',
        margin: 8,
      },
})