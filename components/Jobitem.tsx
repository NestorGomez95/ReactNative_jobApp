import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const JobItem = ({ job }: { job: any }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Link href={`/jobdetails?title=${job.title}&location=${job.location}`}>
        <Text style={styles.title}>{job.title}</Text>
        <Text>{job.location}</Text>
      </Link>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default JobItem;
