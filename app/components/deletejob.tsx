import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const DeleteJob = () => {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/jobs/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      await fetch(`http://localhost:3000/api/jobs/delete/${jobId}`, {
        method: 'DELETE',
      });
      Alert.alert('Job Deleted', 'The job has been deleted successfully.');
      fetchJobs(); // Vuelve a cargar los empleos después de eliminar
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const renderJob = ({ item }: { item: any }) => (
    <View style={styles.jobContainer}>
      <Text style={styles.jobText}>{item.position} - {item.location}</Text>
      <Button title="Delete" onPress={() => handleDeleteJob(item._id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={jobs} 
        renderItem={renderJob} 
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={styles.flatListContainer} // Centrar el contenido del FlatList
      />
      <Button title="Back" onPress={() => router.push('/')} />
    </View>
  );
};

export default DeleteJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  flatListContainer: {
    alignItems: 'center', // Centrar los items del FlatList
  },
  jobContainer: {
    marginBottom: 16,
    padding: 16,
    width: '90%', // Ajusta el ancho de los contenedores de trabajos
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center', // Centrar el contenido del contenedor de trabajos
  },
  jobText: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
    textAlign: 'center', // Centrar el texto
  },
});
