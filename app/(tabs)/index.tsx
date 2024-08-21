import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/styles_index';
import AdminLogin from '../components/adminlogin'; 

const HomeScreen = () => {
  const router = useRouter();

  const handleNavigateToJobManagement = () => {
   
    router.push('/JobManagement'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alliance App</Text>
        <Image source={require('../../images/alliance_logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.link}>Bienvenue à Alliance</Text>
      <Text style={styles.text}>
        Avec cette application, il sera plus facile de nous rejoindre.
      </Text>
      <Text style={styles.text}>
        Consultez tous les postes disponibles et postulez dès maintenant !
      </Text>
      <View>
        <Text>Adresse : 3308 AV Francis-Hughes Laval, QC H7L 5A7</Text>
        <Text>Email: info@personnelalliance.com</Text>
        <Text>Téléphone: (514) 375-9908</Text>
      </View>
      <AdminLogin />
      <Button title="Accéder à la gestion des emplois" onPress={handleNavigateToJobManagement} />
    </View>
  );
};

export default HomeScreen;
