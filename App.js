import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Fingerprint } from 'lucide-react-native';
import onAuthenticate from './authService';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    const result = await onAuthenticate();
    if (result.success) {
      setIsLoggedIn(true);
    } else {
      Alert.alert('Authentication Failed', result.error);
    }
  };

  if (isLoggedIn) return <HomeScreen onLogout={() => setIsLoggedIn(false)} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secure Vault</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Fingerprint color="white" size={24} />
        <Text style={styles.buttonText}>Login Securely</Text>
      </TouchableOpacity>
    </View>
  );
}