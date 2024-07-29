import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Oops!</Text>
      <Text style={styles.message}>Esta pantalla no existe.</Text>
      <Button title="Ir a la pantalla de inicio" onPress={() => navigation.navigate('HomeScreen' as never)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
});
