import  { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';

const jobs = [
  { title: 'Developer', location: 'Remote', description: 'Full-time developer role with benefits.', requirements: 'Experience in JavaScript and React.' },
  { title: 'Designer', location: 'Office', description: 'Creative designer needed.', requirements: 'Proficiency in Adobe Suite.' },
];

const Explore = () => {
  const [selectedJob, setSelectedJob] = useState<{ title: string; location: string; description: string; requirements: string } | null>(null);
  const router = useRouter();

  if (selectedJob) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{selectedJob.title}</Text>
        <Text style={styles.details}>{selectedJob.location}</Text>
        <Text style={styles.details}>{selectedJob.description}</Text>
        <Text style={styles.details}>{selectedJob.requirements}</Text>
        <Button
          title="Apply"
          onPress={() => router.push(`/ContactForm?title=${selectedJob.title}&location=${selectedJob.location}`)}
        />
        <TouchableOpacity onPress={() => setSelectedJob(null)}>
          <Text style={styles.backLink}>Back to job list</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {jobs.map((job, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedJob(job)}>
          <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text>{job.location}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#7f94d4',
  },
  jobItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 10,
  },
  backLink: {
    fontSize: 18,
    color: '#007AFF',
    marginTop: 20,
  },
});

export default Explore;
