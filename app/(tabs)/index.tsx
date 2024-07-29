import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Link href="/explore">
        <Text style={styles.link}>Bienvenue à Alliance</Text> 
      </Link>
      <Text style={styles.text}>Avec cette application, il sera plus facile de nous rejoindre.</Text>
      <Text style={styles.text}>Consultez tous les postes disponibles et postulez dès maintenant !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#d6eaf8 ', 
  },
  link: {
    fontSize: 24,
    color: '#FF0000', // Texto en rojo
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10, // Espacio entre líneas de texto
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center', // Para centrar el texto
  },
});

export default HomeScreen;
