import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/common/SplashScreen";
import BottomTabNavigator from "../tab/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../drawer/DrawerNavigator";
import MaterialTopTabNavigator from "../materialTopTab/MaterialTopTabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="toptab" component={MaterialTopTabNavigator} /> */}
        <Stack.Screen name="drawer" component={DrawerNavigator} />
        <Stack.Screen name="bottom" component={BottomTabNavigator} />
        <Stack.Screen name="splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
