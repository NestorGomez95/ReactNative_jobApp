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
      const response = await fetch('https://yourapi.com/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      await fetch(`https://yourapi.com/jobs/${jobId}`, {
        method: 'DELETE',
      });
      Alert.alert('Job Deleted', 'The job has been deleted successfully.');
      fetchJobs(); // Refresh the job list after deletion
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
