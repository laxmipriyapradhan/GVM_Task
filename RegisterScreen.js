// Register screen
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login_type, setlogin_type] = useState(0);
  const [role, setRole] = useState("");
  const [errors, seterrors] = useState('');
  const [data, setData] =useState([]);




  const customerData = {
    Name : name,
    Email: email,
    Login_type: login_type,
    Role: role

}


  const fetchRegisterData = async()=>{
    try{
      const response = await fetch("https://api-coolbro.gvmtechnologies.com/auth/register",
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

  const handleRegister = () => {
   
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
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      /> */}
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