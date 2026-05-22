import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/common/SplashScreen";
import BottomTabNavigator from "../tab/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../drawer/DrawerNavigator";
import { navigationRef } from "../../utils/fonts";
import OnboardingScreen from "../../screens/common/OnboardingScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={"dark-content"} />

      <Stack.Navigator>
        {showSplash && (
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        )}

        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="drawer" component={DrawerNavigator} />
        <Stack.Screen name="bottom" component={BottomTabNavigator} />
        {/* <Stack.Screen name="toptab" component={MaterialTopTabNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
