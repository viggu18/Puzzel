import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Home/Login';
import Home from './screens/Home'
import Profile from './screens/Profile'
import Signup from './components/Home/Signup'
import SelectUser from './components/Home/SelectUser';
import AddToFirebase from './components/FirebaseAdd/AddToFirebase';
import Tabs from './screens/Tabs';
import PhoneList from './screens/PhoneList';
import PhoneDetails from './screens/PhoneDetails';
import NullProfile from './components/Profile/NullProfile';
import FullDetails from './components/PhoneDetails/FulllDetails';
import Cart from './screens/Cart';


export default function RootNavigation() {
const Stack = createNativeStackNavigator();
const screenOptions={headerShown: false,};
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name='NullProfile' component={NullProfile}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SelectUser" component={SelectUser}/>
        <Stack.Screen name='PhoneList' component={PhoneList} />
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='PhoneDetails' component={PhoneDetails}/>
        <Stack.Screen name='FullDetails' component={FullDetails} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}