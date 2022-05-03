import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export default function BottomNav(){
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', icon: 'home', color: 'black'},
    { key: 'Profile', title: 'Profile', icon: 'account-circle', color: 'black'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Profile: Profile,
  });

  return (
    <BottomNavigation 
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};