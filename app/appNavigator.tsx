import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './(tabs)/index';
import JobManagement from './components/JobManagement';
import AddJob from './components/AddJob';
import DeleteJob from './components/deletejob';

export type RootStackParamList = {
  Home: undefined;
  JobManagement: undefined;
  AddJob: undefined;
  DeleteJob: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="JobManagement" component={JobManagement} />
        <Stack.Screen name="AddJob" component={AddJob} />
        <Stack.Screen name="DeleteJob" component={DeleteJob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

