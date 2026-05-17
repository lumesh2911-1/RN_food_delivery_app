import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "./DashboardScreen";
import HistoryScreen from "./HistoryScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={DashboardScreen} />
      <Tab.Screen name="history" component={HistoryScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
