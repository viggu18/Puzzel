import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { windowWidth,windowHeight } from './components/export';
import firebase from './firebase';
import Login from './components/Home/Login';
import EntryScreen from './screens/EntryScreen'
import Profile from './screens/Profile'
import Signup from './components/Home/Signup'
import SelectUser from './components/Home/SelectUser';
import AddToFirebase from './components/FirebaseAdd/AddToFirebase';
import Tabs from './screens/Tabs';
import PhoneList from './screens/PhoneList';
import PhoneDetails from './screens/PhoneDetails';
import FullDetails from './components/PhoneDetails/FulllDetails';
import Cart from './screens/Cart';
import EditProfile from './components/Profile/EditProfile';
import AddressSelection from './screens/AddressSelection';
import AddressForm from './components/Address/AddressForm';
import Payment from './screens/Payment';
import ConfirmOrder from './screens/ConfirmOrder';
import ForgotPassword from './screens/ForgotPassword';
import Home from './components/Home/Home';
import Settings from './components/OptionScreens/Settings';
import Account from './components/OptionScreens/Account';
import DeleteAc from './components/Account/DeleteAc'
import GenerateDesign from './screens/GenerateDesign';
import MiscOptions from './screens/Customisation/MiscOptions';
import ChangeUserType from './components/Account/ChangeUserType';
import Orders from './screens/Orders';
import Wishlist from './screens/Wishlist';

import GetName from './screens/Customisation/GetName';
import SelectDisplay from './screens/Customisation/SelectDisplay';
import FrontCamera from './screens/Customisation/FrontCamera';
import BackCamera from './screens/Customisation/BackCamera';
import Speaker from './screens/Customisation/Speaker';
import Volume from './screens/Customisation/Volume';
import Power from './screens/Customisation/Power';
import Charging from './screens/Customisation/Charging';
import FinalDesign from './screens/Customisation/FinalDesign';


const screenOptions={headerShown: false,};


const BottomNavigator = createBottomTabNavigator();
const HomeIcon = () => (
  <></>
)
const ProfileIcon = () => (<></>)
const BottomNav = () => { 
  let screenOptions={
    headerShown: false,
    tabBarStyle:{
      position: 'absolute',
      backgroundColor: 'white',
      width: windowWidth,
      // left: windowWidth * 0.03,
      // right: windowWidth * 0.03,
      bottom: 0,
      height: windowHeight * 0.09,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    }};
  return(
    <BottomNavigator.Navigator initialRouteName='PhoneList' screenOptions={screenOptions}>
      <BottomNavigator.Screen name="PhoneList" component={PhoneList} 
      tabBarIcon={() => {
        return (
          <Ionicons
            name="md-home"
            size={24}/>)}}
            />
      <BottomNavigator.Screen name="Profile" component={Profile} />
    </BottomNavigator.Navigator>
  );
  }
const Customization = () => {
  const Customisation = createNativeStackNavigator();
  return(
    <Customisation.Navigator initialRouteName='GetName' screenOptions={screenOptions}>
        <Customisation.Screen name='GetName' component={GetName} />
        <Customisation.Screen name='SelectDisplay' component={SelectDisplay} />
        <Customisation.Screen name='FrontCamera' component={FrontCamera} />
        <Customisation.Screen name='BackCamera' component={BackCamera} />
        <Customisation.Screen name='Speaker' component={Speaker} />
        <Customisation.Screen name='Volume' component={Volume} />
        <Customisation.Screen name='Power' component={Power} />
        <Customisation.Screen name='Charging' component={Charging} />
        <Customisation.Screen name='MiscOptions' component={MiscOptions} />
        <Customisation.Screen name='FinalDesign' component={FinalDesign} />
    </Customisation.Navigator>
  )
}
const CartNav = () => { 
const CheckOut = createNativeStackNavigator();
return(
  <CheckOut.Navigator initialRouteName='Cart' screenOptions={screenOptions}>
    <CheckOut.Screen name='Cart' component={Cart} />
    <CheckOut.Screen name='AddressSelection' component={AddressSelection} />
    <CheckOut.Screen name='AddressForm' component={AddressForm} />
    <CheckOut.Screen name='ConfirmOrder' component={ConfirmOrder} /> 
    <CheckOut.Screen name='Payment' component={Payment} />
  </CheckOut.Navigator>
)}


export default function RootNavigation() {
  const [LoginState,setLoginState] = React.useState(false);
  const isLoggedIn = async () => {
    const user = await firebase.auth().currentUser;
    console.log(user);
    if (user == null) {
      setLoginState(false);
    } else {
      setLoginState(true);
    }
  }
  isLoggedIn();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screen={AddToFirebase} screenOptions={screenOptions} >
      {/* <Stack.Screen name='AddToFirebase' component={AddToFirebase} /> */}
        {/* {LoginState != null ? (<></>) : (<> */}
        <Stack.Screen name='EntryScreen' component={EntryScreen}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* </>)} */}
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='BottomNav' component={BottomNav} />
        <Stack.Screen name='PhoneList' component={PhoneList} />
        <Stack.Screen name='CartNav' component={CartNav} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name="SelectUser" component={SelectUser}/>
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='PhoneDetails' component={PhoneDetails}/>
        <Stack.Screen name='FullDetails' component={FullDetails} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        {/* <Stack.Screen name='AddToFirebase' component={AddToFirebase} /> */}
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='DeleteAc' component={DeleteAc} />
        <Stack.Screen name='GenerateDesign' component={GenerateDesign} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='ChangeUserType' component={ChangeUserType} />
        <Stack.Screen name='Customization' component={Customization}/>
        <Stack.Screen name='Orders' component={Orders}/>
        <Stack.Screen name='Wishlist' component={Wishlist}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
