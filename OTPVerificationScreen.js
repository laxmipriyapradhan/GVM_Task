// OTP Verification screen
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOTP] = useState(0);
  const [id, setID] = useState(0);
  const [errors, seterrors] = useState('');
  const [data, setData] =useState([]);


  const customerData = {
    ID: id,
    OTP: otp

}


const fetchRegisterData = async()=>{
  try{
    const response = await fetch("https://api-coolbro.gvmtechnologies.com/auth/verify_otp",
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
