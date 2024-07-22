import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OperationScreen} from '../screens/operation';
const Stack = createStackNavigator();
export const OperationNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="operationn" component={OperationScreen} />
    </Stack.Navigator>
  );
};
