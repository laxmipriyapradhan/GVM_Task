// Splash screen
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
    backgroundColor: "blue",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
