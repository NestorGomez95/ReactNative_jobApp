import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useAuth } from '@/app/context/AuthContext'; 
import { useRouter } from 'expo-router';

const JobManagement = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      Alert.alert('Access denied', 'You have to login as an admin to access this page.');
      router.replace('/(tabs)/explore'); 
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <View>
      <Text>Job Management</Text>
      <Button title="Add Job" onPress={() => router.push('/components/AddJob')} />
      <Button title="Delete Job" onPress={() => router.push('/components/deletejob')} />
    </View>
  );
};

export default JobManagement;
