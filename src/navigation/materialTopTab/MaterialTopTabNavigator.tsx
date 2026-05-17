import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MessageScreen from "./MessageScreen";
import NotificationScreen from "./NotificationScreen";

const Tab = createMaterialTopTabNavigator();

export default function MaterialTopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
