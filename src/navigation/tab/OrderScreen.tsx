import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

interface Order {
  id: string;
  orderNumber: string;
  assignedText: string;
  storeName: string;
  storeLogo: string;
  storeAddress: string;
  customerName: string;
  customerAvatar: string;
  customerAddress: string;
  orderTime: string;
  status: "On the way" | "Delivered";
  phone: string;
  email: string;
}

const ORDERS_DATA: Order[] = [
  {
    id: "1",
    orderNumber: "#55658",
    assignedText: "Assigned : 17 Nov 2023",
    storeName: "McDonald's",
    storeLogo: "https://img.icons8.com/color/96/mcdonalds.png",
    storeAddress: "Kodiak, Alaska 99615, USA",
    customerName: "Rio Daniel",
    customerAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    customerAddress: "Kodiak, Alaska 99615, USA",
    orderTime: "Order at 06:35   08, April, 2023",
    status: "On the way",
    phone: "+1234567890",
    email: "rio.daniel@example.com",
  },
  {
    id: "2",
    orderNumber: "#55658",
    assignedText: "Today",
    storeName: "McDonald's",
    storeLogo:
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=150", // Fresh organic look for green McDonald's/store logo
    storeAddress: "Kodiak, Alaska 99615, USA",
    customerName: "Rio Daniel",
    customerAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    customerAddress: "Kodiak, Alaska 99615, USA",
    orderTime: "Order at 06:35   08, April, 2023",
    status: "Delivered",
    phone: "+1234567890",
    email: "rio.daniel@example.com",
  },
];

export default function OrderScreen() {
  const handlePhoneCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(() => {
      Alert.alert("Error", "Unable to make a call on this device");
    });
  };

  const handleSendEmail = (emailAddress: string, orderNumber: string) => {
    Linking.openURL(
      `mailto:${emailAddress}?subject=Order ${orderNumber}`,
    ).catch(() => {
      Alert.alert("Error", "Unable to open email app");
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {ORDERS_DATA.map((order) => {
          const isOnTheWay = order.status === "On the way";

          return (
            <View key={order.id} style={styles.orderCard}>
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <Text style={styles.orderTitle}>
                  Order{" "}
                  <Text style={styles.orderNumber}>{order.orderNumber}</Text>
                </Text>
                <View style={styles.assignedRow}>
                  <Text style={styles.assignedText}>{order.assignedText}</Text>
                  <Ionicons
                    name="calendar"
                    size={18}
                    color="#005A36"
                    style={styles.calendarIcon}
                  />
                </View>
              </View>

              {/* Store Details */}
              <View style={styles.detailSection}>
                <Text style={styles.sectionLabel}>Store Details</Text>
                <View style={styles.profileRow}>
                  <View style={styles.logoContainer}>
                    {/* Fallback to text if image fails */}
                    <Image
                      source={{ uri: order.storeLogo }}
                      style={styles.profileLogo}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.profileMeta}>
                    <Text style={styles.profileName}>{order.storeName}</Text>
                    <Text style={styles.profileAddress}>
                      {order.storeAddress}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Customer Details */}
              <View style={styles.detailSection}>
                <Text style={styles.sectionLabel}>Customer Details</Text>
                <View style={styles.profileRow}>
                  <View style={styles.avatarContainer}>
                    <Image
                      source={{ uri: order.customerAvatar }}
                      style={styles.profileAvatar}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.profileMeta}>
                    <Text style={styles.profileName}>{order.customerName}</Text>
                    <Text style={styles.profileAddress}>
                      {order.customerAddress}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Order Time */}
              <View style={styles.timeSection}>
                <Text style={styles.timeText}>{order.orderTime}</Text>
              </View>

              {/* Footer / Status & Action Buttons */}
              <View style={styles.cardFooter}>
                <View style={styles.statusContainer}>
                  <Text style={styles.statusLabel}>Status :</Text>
                  <View
                    style={[
                      styles.statusBadge,
                      isOnTheWay ? styles.onTheWayBadge : styles.deliveredBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusBadgeText,
                        isOnTheWay ? styles.onTheWayText : styles.deliveredText,
                      ]}
                    >
                      {order.status}
                    </Text>
                  </View>
                </View>

                {/* Actions */}
                <View style={styles.actionsContainer}>
                  <TouchableOpacity
                    style={styles.actionButtonCall}
                    activeOpacity={0.7}
                    onPress={() => handlePhoneCall(order.phone)}
                  >
                    <Ionicons name="call" size={16} color="#005A43" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.actionButtonEmail}
                    activeOpacity={0.7}
                    onPress={() =>
                      handleSendEmail(order.email, order.orderNumber)
                    }
                  >
                    <Ionicons name="mail" size={16} color="#E27D00" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffcf9",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  orderCard: {
    backgroundColor: "#fefdfc",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e1e1e1",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  orderTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: "#E27D00",
  },
  orderNumber: {
    fontFamily: FONTS.bold,
    color: "#E27D00",
  },
  assignedRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  assignedText: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: "#888888",
    marginRight: 6,
  },
  calendarIcon: {
    marginLeft: 2,
  },
  detailSection: {
    marginBottom: 14,
  },
  sectionLabel: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: "#888888",
    marginBottom: 8,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFF0F0",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileLogo: {
    width: "100%",
    height: "100%",
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileAvatar: {
    width: "100%",
    height: "100%",
  },
  profileMeta: {
    marginLeft: 12,
    flex: 1,
  },
  profileName: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#111827",
    marginBottom: 2,
  },
  profileAddress: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#6B7280",
  },
  timeSection: {
    marginBottom: 16,
    paddingTop: 2,
  },
  timeText: {
    fontFamily: FONTS.bold,
    fontSize: 13,
    color: "#374151",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    paddingTop: 14,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusLabel: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#4B5563",
    marginRight: 8,
  },
  statusBadge: {
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  onTheWayBadge: {
    backgroundColor: "#FFF3E0",
  },
  deliveredBadge: {
    backgroundColor: "#E6F4EA",
  },
  statusBadgeText: {
    fontFamily: FONTS.bold,
    fontSize: 13,
  },
  onTheWayText: {
    color: "#E27D00",
  },
  deliveredText: {
    color: "#137333",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  actionButtonCall: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E6F4EA",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonEmail: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFF3E0",
    justifyContent: "center",
    alignItems: "center",
  },
});
