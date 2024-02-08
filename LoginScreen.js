// Login screen
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [login_type, setlogin_type] = useState(0);
  const [errors, seterrors] = useState('');
  const [data, setData] =useState([]);


//   Method:- POST

// body:-

// {
//    "Email": "ajit4gvm@gmail.com",
//    "Login_type": "0"
// }
const customerData = {
    Email: email,
    Login_type: login_type

}

   

  const fetchRegisterData = async()=>{
    try{
      const response = await fetch("https://api-coolbro.gvmtechnologies.com/auth/send_otp",
      method = post,
      body = customerData,

      
      )
      const result = await response.json()
      setData(data)


    }catch (error){
      console.log(" Error in fetch the data")
    }
    

  }

  useEffect(()=>{
    fetchRegisterData()
  },[])


   if(errors){
    seterrors("error in fetch the register data")
      
   }


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
