import React, { useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Job Management</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add Job" onPress={() => router.push('/components/AddJob')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Delete Job" onPress={() => router.push('/components/deletejob')} />
      </View>
    </View>
  );
};

export default JobManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
    backgroundColor: '#fff', // Fondo blanco como pediste
    padding: 20, // Padding para darle espacio al contenido
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Espacio debajo del título
    color: '#333', // Color del texto
  },
  buttonContainer: {
    marginVertical: 10, // Espacio vertical entre los botones
    width: '80%', // Ancho del botón para que no ocupe todo el ancho de la pantalla
  },
});
