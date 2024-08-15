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
      // Aquí puedes manejar la navegación o cualquier otra acción posterior al login
    } catch (error) {
      Alert.alert('Error', 'Credenciales inválidas. Por favor, verifica tus datos e intenta de nuevo.');
    }
  };

  return (
    <View>
      <Button title="Admin Login" onPress={() => setVisible(true)} />
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Email"
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