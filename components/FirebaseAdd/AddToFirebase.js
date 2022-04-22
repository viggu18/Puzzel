import { View, Text , Button } from 'react-native';
import React from 'react';
import firebase from '../../firebase';

const phones = [
    {
    Phone_ID: 1,
    Phone_Name: 'Puzzel Phone X',
    },
];

export default function AddTodb (){
    const addPhoneTodb = () => { 
        const db = firebase.firestore();
        db.collection('stock_phones').add({
            Phone_ID: 1,
            Phone_Name: 'Puzzel Phone X',  
        });
    }
    
  return (
    <Button onPress={addPhoneTodb}
    title='button' placeholder='Add To Firebase' 
    style={{alignItem: 'center', marginTop: 100}}/>
  );
}

