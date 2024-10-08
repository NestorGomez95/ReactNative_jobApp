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
      const response = await fetch('http://10.0.2.2:3000/api/jobs/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      await fetch(`http://10.0.2.2:3000/api/jobs/delete/${jobId}`, {
        method: 'DELETE',
      });
      Alert.alert('L emploi a été supprimé avec succès !');
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const renderJob = ({ item }: { item: any }) => (
    <View style={styles.jobContainer}>
      <Text style={styles.jobText}>{item.position} - {item.location}</Text>
      <Button title="Supprimer" onPress={() => handleDeleteJob(item._id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={jobs} 
        renderItem={renderJob} 
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={styles.flatListContainer} 
      />
      <Button title="retourner" onPress={() => router.push('/')} />
    </View>
  );
};

export default DeleteJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  flatListContainer: {
    alignItems: 'center', 
  },
  jobContainer: {
    marginBottom: 16,
    padding: 16,
    width: '90%', 
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  jobText: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
    textAlign: 'center', 
  },
});
