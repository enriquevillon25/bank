import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigation} from './HomeNavigation';
import {OperationNavigation} from './OperationNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth/login/LoginScreen';
import {useAuth} from '../hooks/useAuth';
import {UserContext, UserProvider} from '../context/UseContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigationContent = () => {
  const {token} = useContext(UserContext);

  if (!token) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeNavigation} />
      <Tab.Screen name="Operaciones" component={OperationNavigation} />
    </Tab.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainNavigationContent />
      </NavigationContainer>
    </UserProvider>
  );
};
