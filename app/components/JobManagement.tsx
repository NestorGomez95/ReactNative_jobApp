import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../appNavigator';

const JobManagement = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>Job Management</Text>
      <Button title="Add Job" onPress={() => navigation.navigate('AddJob')} />
      <Button title="Delete Job" onPress={() => navigation.navigate('DeleteJob')} />
    </View>
  );
};

export default JobManagement;
