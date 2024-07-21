import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home';
import {Movements} from '../screens/home/movements/Movements';

const Stack = createStackNavigator();
export const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Movements" component={Movements} />
    </Stack.Navigator>
  );
};
