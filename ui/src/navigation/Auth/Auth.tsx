import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../screens';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerShown: false
      }}
    >
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default Auth;
