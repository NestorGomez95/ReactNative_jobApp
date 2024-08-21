import React, { useState } from 'react';
import { View, Button, Modal, TextInput, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext'; 
import styles from '../styles/adminlogin';

const AdminLogin = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      setVisible(false);
      
    } catch (error) {
      Alert.alert('Erreur, identifiants incorrects, veuillez réessayer !');
    }
  };

  return (
    <View>
      <Button title="Connexion administrateur" onPress={() => setVisible(true)} />
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="courriel"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </Modal>
    </View>
  );
};

export default AdminLogin;