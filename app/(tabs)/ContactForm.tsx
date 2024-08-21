import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';

const ContactForm = () => {
  const { title } = useLocalSearchParams();
  const router = useRouter(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [availableHours, setAvailableHours] = useState('');

  const handleSubmit = () => {
    axios.post('http://10.0.2.2:3000/api/aplications/apply', {
      jobTitle: title, 
      name,
      email,
      address,
      phoneNumber,
      availableHours,
    }).then(response => {
      alert('Application submitted successfully!');
    }).catch(error => {
      console.error('Error submitting application:', error);
      alert('Failed to submit application.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for {title}</Text>
      <TextInput
        style={styles.input}
        placeholder="Prenom et Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="courriel"
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
        placeholder="Numero de telephone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Heures disponibles par semaine"
        value={availableHours}
        onChangeText={setAvailableHours}
        keyboardType="numeric"
      />
      
      
      <View style={styles.buttonContainer}>
        <Button title="retourner" onPress={() => router.back()} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Envoyer" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 8, 
  },
});

export default ContactForm;
