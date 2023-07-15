import React from 'react';
import RootNavigation from './navigation';
import { StatusBar,LogBox } from 'react-native';
import { Provider } from 'react-redux';
import userStore from './src/store';

const store = userStore();

export default function Puzzel() {
  LogBox.ignoreLogs(['Setting a timer for a long period of time'])
  LogBox.ignoreLogs(['Animated: `useNativeDriver`'])
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])
  LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'"])
  return(
    <Provider store={store}>
    <StatusBar hidden={true}/>
    <RootNavigation/>
    </Provider>
  )
}


