import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const ContactForm = () => {
  const { title } = useLocalSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [availableHours, setAvailableHours] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:3000/jobs/apply', {
      jobTitle: title, // Nombre del trabajo al que se aplica
      name,
      email,
      address,
      phoneNumber,
      availableHours,
    }).then(response => {
      alert('Application submitted successfully!');
    }).catch(error => {
      alert('Failed to submit application.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for {title}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Available Hours per Week"
        value={availableHours}
        onChangeText={setAvailableHours}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
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
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});

export default ContactForm;
