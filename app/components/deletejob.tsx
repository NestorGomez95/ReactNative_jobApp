import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const DeleteJob = () => {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/jobs/delete');
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
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const renderJob = ({ item }: { item: any }) => (
    <View>
      <Text>{item.position} - {item.location}</Text>
      <Button title="Delete" onPress={() => handleDeleteJob(item.id)} />
    </View>
  );

  return (
    <View>
      <FlatList 
        data={jobs} 
        renderItem={renderJob} 
        keyExtractor={(item) => item.id.toString()} 
      />
      <Button title="Back" onPress={() => router.push('/')} />
    </View>
  );
};

export default DeleteJob;
