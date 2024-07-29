import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const JobDetails = () => {
  const router = useRouter();
  const { title, location } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{location}</Text>
      <Button
        title="Apply"
        onPress={() => router.push(`/contactform?title=${title}&location=${location}`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default JobDetails;
