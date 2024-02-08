// OTP Verification screen
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOTP] = useState('');

  const handleVerifyOTP = () => {

    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="OTP"
        value={otp}
        onChangeText={setOTP}
        keyboardType="numeric"
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default OTPVerificationScreen;
