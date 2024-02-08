


import React , { useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/utils/store';
import SplashScreen from 'react-native-splash-screen';
// import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import { requestUserPermission , notificationListner} from './src/utils/notificationServices'
import FlashMessage from "react-native-flash-message";
import 'react-native-gesture-handler'

const App = () => {
 
  useEffect(() => {

    const timer = setTimeout(() => {
      SplashScreen.hide();
      
    }, 3000);
  
    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  

  useEffect (()=>{
    requestUserPermission()
    notificationListner()
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });

    // return unsubscribe;
    
  },[])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {/* <FlashMessage position='top'/> */}
       <AppNavigator/>

      </PersistGate>
    </Provider>
   

  );
};

export default App;

import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 3000); // 3 seconds delay before navigating to Login screen
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./splash_logo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;





// Login screen
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Send POST request with email and login type
    // Handle response accordingly
    // For simplicity, just navigating to OTP verification screen
    navigation.navigate('OTPVerification');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
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

export default LoginScreen;



// OTP Verification screen
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOTP] = useState('');

  const handleVerifyOTP = () => {
    // Send POST request with ID and OTP
    // Handle response accordingly
    // For simplicity, just navigating to the main app screen
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





// Register screen
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Send POST request with name, email, and password
    // Handle response accordingly
    // For simplicity, just navigating to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
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
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
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

export default RegisterScreen;
