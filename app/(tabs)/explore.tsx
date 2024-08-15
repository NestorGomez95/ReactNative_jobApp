import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
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
      const response = await fetch('http://localhost:3000/api/jobs/jobs');
      const data: Job[] = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchJobs();
    }, [])
  );

  if (selectedJob) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}> {/* Contenedor de contenido con flexbox */}
          <Image source={require('../../images/alliance_logo.png')} style={styles.logo} />
          <Text style={styles.title}>{selectedJob.position}</Text>
          <Text style={styles.details}>Location: {selectedJob.location}</Text>
          <Text style={styles.details}>Hours: {selectedJob.hours}</Text>
          <Text style={styles.details}>Salary: {selectedJob.salary}</Text>
          <Text style={styles.details}>Job Type: {selectedJob.jobType}</Text>
          <Text style={styles.details}>Description: {selectedJob.jobDescription}</Text>
          <Text style={styles.details}>Key Responsibilities: {selectedJob.keyResponsibilities}</Text>
          <Text style={styles.details}>Requirements: {selectedJob.requirements}</Text>
          <Text style={styles.details}>Benefits: {selectedJob.benefits}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push(`/ContactForm?title=${selectedJob.position}&location=${selectedJob.location}`)
            }
          >
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../images/alliance_logo.png')} style={styles.logo} />
      </View>
      {jobs.length === 0 ? (
        <Text>No jobs found</Text>
      ) : (
        jobs.map((job) => (
          <TouchableOpacity
            key={job._id}
            style={styles.jobItem}
            onPress={() => setSelectedJob(job)}
          >
            <Text style={styles.jobTitle}>{job.position}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

export default Explore;
