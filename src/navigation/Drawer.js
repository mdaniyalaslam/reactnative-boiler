import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Chat from '../screens/myChat';
import CustomDrawer from './customDrawer';
import Tabs from './Tabs';
import Account from '../screens/myAccount';

const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        width: 260,
      }}
      barButtonIconStyle={{tintColor: 'grey'}}
      drawerContent={props => <CustomDrawer {...props} />}
      drawerType="Slide"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          title: '',
        }}
      />
      <Drawer.Screen name="Account" component={Account} options={{title: ''}} />
    </Drawer.Navigator>
  );
};

export default Drawer;
