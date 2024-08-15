import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'; // Importa useFocusEffect
import styles from '../styles/explore_styles';

interface Job {
  _id: string;
  position: string;
  location: string;
  hours: string;
  salary: string;
  jobType: string;
  jobDescription: string;
  keyResponsibilities: string;
  requirements: string;
  benefits: string;
}

const Explore: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const router = useRouter();

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/jobs');
      const data: Job[] = await response.json();
      console.log('Jobs fetched:', data);
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  // Cargar empleos cuando la pantalla recibe foco
  useFocusEffect(
    useCallback(() => {
      console.log('Focus on Explore, reloading jobs...');
      fetchJobs();
    }, [])
  );

  if (selectedJob) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{selectedJob.position}</Text>
        <Text style={styles.details}>Location: {selectedJob.location}</Text>
        <Text style={styles.details}>Hours: {selectedJob.hours}</Text>
        <Text style={styles.details}>Salary: {selectedJob.salary}</Text>
        <Text style={styles.details}>Job Type: {selectedJob.jobType}</Text>
        <Text style={styles.details}>Description: {selectedJob.jobDescription}</Text>
        <Text style={styles.details}>Key Responsibilities: {selectedJob.keyResponsibilities}</Text>
        <Text style={styles.details}>Requirements: {selectedJob.requirements}</Text>
        <Text style={styles.details}>Benefits: {selectedJob.benefits}</Text>
        <Button
          title="Apply"
          onPress={() =>
            router.push(`/ContactForm?title=${selectedJob.position}&location=${selectedJob.location}`)
          }
        />
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      {jobs.length === 0 ? (
        <Text>No jobs found</Text>
      ) : (
        jobs.map((job) => (
          <TouchableOpacity key={job._id} onPress={() => setSelectedJob(job)}>
            <Text style={styles.jobTitle}>{job.position}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

export default Explore;
