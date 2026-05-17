import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./ProfileScreen";
import HelpAndSupportScreen from "./HelpAndSupportScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
