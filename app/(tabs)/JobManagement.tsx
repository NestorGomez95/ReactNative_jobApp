import React, { useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useAuth } from '@/app/context/AuthContext'; 
import { useRouter } from 'expo-router';

const JobManagement = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      Alert.alert('Accès refusé', 'Vous devez vous connecter en tant qu administrateur pour accéder à cette page.');
      router.replace('/(tabs)/explore'); 
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des emplois</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ajouter un emploi" onPress={() => router.push('/components/AddJob')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Supprimer un emploi" onPress={() => router.push('/components/deletejob')} />
      </View>
    </View>
  );
};

export default JobManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#333', 
  },
  buttonContainer: {
    marginVertical: 10, 
    width: '80%', 
  },
});
