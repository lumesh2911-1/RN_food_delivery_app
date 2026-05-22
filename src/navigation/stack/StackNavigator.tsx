import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/common/SplashScreen";
import BottomTabNavigator from "../tab/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../../utils/fonts";
import OnboardingScreen from "../../screens/common/OnboardingScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import RegisterScreen from "../../screens/auth/RegisterScreen";
import SettingsScreen from "../../screens/main/SettingsScreen";
import HelpAndSupportScreen from "../drawer/HelpAndSupportScreen";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import { Ionicons } from "@expo/vector-icons";

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
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bottom"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="settings"
          component={SettingsScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "Settings",
            headerStyle: {
              backgroundColor: COLORS.lightBg,
              shadowOpacity: 0,
              elevation: 0,
              borderBottomWidth: 1,
              borderBottomColor: "#EAEAEA",
            },
            headerTitleStyle: {
              fontFamily: FONTS.bold,
              fontSize: 18,
              color: COLORS.primary,
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 12,
                }}
                activeOpacity={0.7}
              >
                <Ionicons name="chevron-back" size={22} color="#000" />
                <Text style={{ fontFamily: FONTS.bold, fontSize: 14, color: "#000", marginLeft: 2 }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="help"
          component={HelpAndSupportScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "Help & Support",
            headerStyle: {
              backgroundColor: COLORS.lightBg,
              shadowOpacity: 0,
              elevation: 0,
              borderBottomWidth: 1,
              borderBottomColor: "#EAEAEA",
            },
            headerTitleStyle: {
              fontFamily: FONTS.bold,
              fontSize: 18,
              color: COLORS.primary,
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 12,
                }}
                activeOpacity={0.7}
              >
                <Ionicons name="chevron-back" size={22} color="#000" />
                <Text style={{ fontFamily: FONTS.bold, fontSize: 14, color: "#000", marginLeft: 2 }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
