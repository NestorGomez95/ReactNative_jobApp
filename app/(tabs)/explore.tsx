import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Personnel Alliance Job App</Text>
      <Text style={styles.description}>
        This app helps you find the latest job openings at Personnel Alliance. Explore the available positions and apply directly through the app.
      </Text>
      <Text style={styles.info}>
        Use the navigation to view the job list, see job details, and submit your contact information.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
});

export default Explore;
