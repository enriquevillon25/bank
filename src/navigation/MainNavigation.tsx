import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigation} from './HomeNavigation';
import {OperationNavigation} from './OperationNavigation';

const Tab = createBottomTabNavigator();
export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen name="HomeTab" component={HomeNavigation} />
        <Tab.Screen name="Operaciones" component={OperationNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
