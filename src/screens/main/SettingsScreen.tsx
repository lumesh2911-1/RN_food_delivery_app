import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export default function SettingsScreen() {
  const navigation = useNavigation<any>();
  const [notifications, setNotifications] = useState(true);
  const [offers, setOffers] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotifications = () => setNotifications((prev) => !prev);
  const toggleOffers = () => setOffers((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Settings Options Group */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>App Preferences</Text>
        
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <View style={[styles.iconBg, { backgroundColor: "#FFF0ED" }]}>
              <Ionicons name="notifications" size={20} color="#F53A25" />
            </View>
            <Text style={styles.rowLabel}>Push Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={toggleNotifications}
            trackColor={{ false: "#D1D1D6", true: COLORS.secondary }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <View style={[styles.iconBg, { backgroundColor: "#FFF8EA" }]}>
              <Ionicons name="pricetag" size={20} color="#F58700" />
            </View>
            <Text style={styles.rowLabel}>Special Offers & Deals</Text>
          </View>
          <Switch
            value={offers}
            onValueChange={toggleOffers}
            trackColor={{ false: "#D1D1D6", true: COLORS.secondary }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <View style={[styles.iconBg, { backgroundColor: "#EBF8F2" }]}>
              <Ionicons name="moon" size={20} color="#10B981" />
            </View>
            <Text style={styles.rowLabel}>Dark Mode (Beta)</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "#D1D1D6", true: COLORS.secondary }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Payment & Account</Text>

        <TouchableOpacity style={styles.touchRow} activeOpacity={0.7}>
          <View style={styles.rowLeft}>
            <View style={[styles.iconBg, { backgroundColor: "#EDF7FF" }]}>
              <Ionicons name="card" size={20} color="#3B82F6" />
            </View>
            <Text style={styles.rowLabel}>Manage Payment Methods</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchRow} activeOpacity={0.7}>
          <View style={styles.rowLeft}>
            <View style={[styles.iconBg, { backgroundColor: "#FFF0ED" }]}>
              <Ionicons name="location" size={20} color="#EF4444" />
            </View>
            <Text style={styles.rowLabel}>Delivery Addresses</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Security & Legal</Text>

        <TouchableOpacity style={styles.touchRow} activeOpacity={0.7}>
          <View style={styles.rowLeft}>
            <View style={[styles.iconBg, { backgroundColor: "#F3F4F6" }]}>
              <Ionicons name="lock-closed" size={20} color="#6B7280" />
            </View>
            <Text style={styles.rowLabel}>Privacy Policy</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchRow} activeOpacity={0.7}>
          <View style={styles.rowLeft}>
            <View style={[styles.iconBg, { backgroundColor: "#F3F4F6" }]}>
              <Ionicons name="document-text" size={20} color="#6B7280" />
            </View>
            <Text style={styles.rowLabel}>Terms of Service</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8f2",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 28,
  },
  sectionHeader: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#8E8E93",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 12,
    marginLeft: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  touchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  rowLabel: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000000",
  },
});
