import React , { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigation from './Appnavigator';
import SplashScreen from 'react-native-splash-screen';




const App = () => {
 
  useEffect(() => {

    const timer = setTimeout(() => {
      SplashScreen.hide();
      
    }, 3000);
  
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <AppNavigation />
    </>
    

  );
};

export default App;



