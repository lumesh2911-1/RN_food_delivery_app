import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import OrderScreen from "./OrderScreen";
import ProfileScreen from "../drawer/ProfileScreen";

import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

const Tab = createBottomTabNavigator();

const HeaderBackButton = () => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backBtnContainer}
      activeOpacity={0.7}
    >
      <Ionicons name="chevron-back" size={22} color="#000" />
      <Text style={styles.backBtnText}>Back</Text>
    </TouchableOpacity>
  );
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: "#8E8E93",

        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,

        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: "center",

        headerLeft: () => <HeaderBackButton />,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: "Dashboard",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          headerTitle: "Search Foods",
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="order"
        component={OrderScreen}
        options={{
          headerTitle: "My Orders",
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "bag" : "bag-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerTitle: "User Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.lightBg,
    height: 85,
    paddingTop: 10,
    paddingBottom: 10,
  },

  tabBarLabel: {
    fontFamily: FONTS.bold,
    fontSize: 11,
    marginTop: 4,
  },

  header: {
    backgroundColor: COLORS.lightBg,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
  },

  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.primary,
  },

  backBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
  },

  backBtnText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000",
    marginLeft: 2,
  },
});
