import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen'
import LoginScreen from './LoginScreen'
import OTPVerificationScreen from './OTPVerificationScreen'

import SplashScreen from './SplashScreen';


const Stack = createStackNavigator();



function AppNavigation() {


  return (
    <NavigationContainer>
      <Stack.Navigator >
      
          <>
         
          {/* <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ title: "Back" }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ title: "Back" }}
            />
             <Stack.Screen
              name="OTPVerificationScreen"
              component={OTPVerificationScreen}
              options={{ title: "Back" }}
            />
            
          </>

      </Stack.Navigator>
   
    </NavigationContainer>
  );
}

export default AppNavigation;
