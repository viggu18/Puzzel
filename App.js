import React from 'react';
import RootNavigation from './navigation';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import userStore from './src/store';

const store = userStore();

export default function Puzzel() {
  return(
    <Provider store={store}>
    <StatusBar hidden={true}/>
    <RootNavigation/>
    </Provider>
  )
}


