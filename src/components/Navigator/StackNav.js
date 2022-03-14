import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Form from '../../Form';
import { withTheme } from 'react-native-elements';
import FooterNav from './FooterNav';
import CameraScreen from '../../CameraScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName='Tab' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={ FooterNav } />
      <Stack.Screen name="Form" component={ Form } options={{gestureEnabled: false}} />
      <Stack.Screen name="Camera" component={ CameraScreen } options={{gestureEnabled: true}} />
    </Stack.Navigator>
  );
}

export default withTheme(StackNav);