import React, { useState } from 'react';
import { View, Button, Modal, TextInput, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../appNavigator';
import { signIn } from '../services/authservice'; 
import styles from '../styles/adminlogin';

const AdminLogin = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      setVisible(false);
      navigation.navigate('JobManagement');
    } catch (error) {
      Alert.alert('Error', 'Failed to sign in. Please check your credentials and try again.');
    }
  };

  return (
    <View>
      <Button title="Admin Login" onPress={() => setVisible(true)} />
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View>
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
          <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </Modal>
    </View>
  );
};

export default AdminLogin;
