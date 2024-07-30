import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigation} from './HomeNavigation';
import {OperationNavigation} from './OperationNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth/login/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator screenOptions={{}}>
        <Tab.Screen name="HomeTab" component={HomeNavigation} />
        <Tab.Screen name="Operaciones" component={OperationNavigation} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
