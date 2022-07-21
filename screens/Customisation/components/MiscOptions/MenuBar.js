import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const MenuBar = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(props.state?.brand);
    const [items, setItems] = useState(props.data);

    useEffect(() => {
      props.setState({...props.state,['brand']:value})
    }, [value])
    
    useEffect(()=>{
      props.state?.brand ? setValue(props.state?.brand): ''
    },[])
        return (
          <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listMode="SCROLLVIEW"
        />
  )
}

export default MenuBar

const styles = StyleSheet.create({})