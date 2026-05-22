import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import StackNavigator from "./src/navigation/stack/StackNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "DMSans-Thin": require("./src/assets/fonts/DMSans-Thin.ttf"),
    "DMSans-ThinItalic": require("./src/assets/fonts/DMSans-ThinItalic.ttf"),
    "DMSans-Light": require("./src/assets/fonts/DMSans-Light.ttf"),
    "DMSans-LightItalic": require("./src/assets/fonts/DMSans-LightItalic.ttf"),
    "DMSans-Regular": require("./src/assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Italic": require("./src/assets/fonts/DMSans-Italic.ttf"),
    "DMSans-Medium": require("./src/assets/fonts/DMSans-Medium.ttf"),
    "DMSans-MediumItalic": require("./src/assets/fonts/DMSans-MediumItalic.ttf"),
    "DMSans-SemiBold": require("./src/assets/fonts/DMSans-SemiBold.ttf"),
    "DMSans-SemiBoldItalic": require("./src/assets/fonts/DMSans-SemiBoldItalic.ttf"),
    "DMSans-Bold": require("./src/assets/fonts/DMSans-Bold.ttf"),
    "DMSans-BoldItalic": require("./src/assets/fonts/DMSans-BoldItalic.ttf"),
    "DMSans-ExtraBold": require("./src/assets/fonts/DMSans-ExtraBold.ttf"),
    "DMSans-ExtraBoldItalic": require("./src/assets/fonts/DMSans-ExtraBoldItalic.ttf"),
    "DMSans-Black": require("./src/assets/fonts/DMSans-Black.ttf"),
    "DMSans-BlackItalic": require("./src/assets/fonts/DMSans-BlackItalic.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <>
      <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
