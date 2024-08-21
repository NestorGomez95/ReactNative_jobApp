import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, ScrollView, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import styles from '../styles/addjob';

const JobForm = () => {
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [hours, setHours] = useState('');
  const [salary, setSalary] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [keyResponsibilities, setKeyResponsibilities] = useState('');
  const [requirements, setRequirements] = useState('');
  const [benefits, setBenefits] = useState('');
  const router = useRouter();
  const { id } = useLocalSearchParams(); 

  useEffect(() => {
    if (id) {
      fetchJobDetails(id as string);
    }
  }, [id]);

  const fetchJobDetails = async (jobId: string) => {
    try {
      const response = await fetch(`https://yourapi.com/jobs/${jobId}`);
      const job = await response.json();
      setPosition(job.position);
      setLocation(job.location);
      setHours(job.hours);
      setSalary(job.salary);
      setJobType(job.jobType);
      setJobDescription(job.jobDescription);
      setKeyResponsibilities(job.keyResponsibilities);
      setRequirements(job.requirements);
      setBenefits(job.benefits);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  const handleSaveJob = () => {
    if (id) {
      updateJob(id as string);
    } else {
      addNewJob();
    }
  };

  const addNewJob = async () => {
    try {
      await fetch('http://10.0.2.2:3000/api/jobs/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          position,
          location,
          hours,
          salary,
          jobType,
          jobDescription,
          keyResponsibilities,
          requirements,
          benefits,
        }),
      });
      Alert.alert('Le travail a été ajouté avec succès !');
      router.replace('/');
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const updateJob = async (jobId: string) => {
    try {
      await fetch(`http://10.0.2.2:3000/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          position,
          location,
          hours,
          salary,
          jobType,
          jobDescription,
          keyResponsibilities,
          requirements,
          benefits,
        }),
      });
      Alert.alert('Le travail a été mis à jour avec succès !');
      router.replace('/');
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Position:</Text>
        <TextInput style={styles.input} value={position} onChangeText={setPosition} />

        <Text style={styles.label}>Location:</Text>
        <TextInput style={styles.input} value={location} onChangeText={setLocation} />

        <Text style={styles.label}>Hours:</Text>
        <TextInput style={styles.input} value={hours} onChangeText={setHours} />

        <Text style={styles.label}>Salary:</Text>
        <TextInput style={styles.input} value={salary} onChangeText={setSalary} />

        <Text style={styles.label}>Job Type:</Text>
        <TextInput style={styles.input} value={jobType} onChangeText={setJobType} />

        <Text style={styles.label}>Job Description:</Text>
        <TextInput 
          style={styles.textArea} 
          value={jobDescription} 
          onChangeText={setJobDescription} 
          multiline 
          numberOfLines={4} 
        />

        <Text style={styles.label}>Key Responsibilities:</Text>
        <TextInput 
          style={styles.textArea} 
          value={keyResponsibilities} 
          onChangeText={setKeyResponsibilities} 
          multiline 
          numberOfLines={4} 
        />

        <Text style={styles.label}>Requirements:</Text>
        <TextInput 
          style={styles.textArea} 
          value={requirements} 
          onChangeText={setRequirements} 
          multiline 
          numberOfLines={4} 
        />

        <Text style={styles.label}>Benefits:</Text>
        <TextInput 
          style={styles.textArea} 
          value={benefits} 
          onChangeText={setBenefits} 
          multiline 
          numberOfLines={4} 
        />

        <Button title={id ? "Update Job" : "Add Job"} onPress={handleSaveJob} />
      </View>
    </ScrollView>
  );
};

export default JobForm;
