import React, { useState, useRef, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const DRAWER_WIDTH = SCREEN_WIDTH * 0.75;

export default function ProfileScreen() {
  const navigation = useNavigation<any>();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

  // Set the header left menu button to open the drawer
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={openDrawer}
          style={styles.headerMenuBtn}
          activeOpacity={0.7}
        >
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const openDrawer = () => {
    setDrawerVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = (callback?: () => void) => {
    Animated.timing(slideAnim, {
      toValue: -DRAWER_WIDTH,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setDrawerVisible(false);
      if (callback) callback();
    });
  };

  const handleMenuPress = (route: string, params?: any, isReset = false) => {
    closeDrawer(() => {
      if (isReset) {
        navigation.reset({
          index: 0,
          routes: [{ name: route }],
        });
      } else {
        navigation.navigate(route, params);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* User Card Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarLargeText}>L</Text>
          </View>
          <Text style={styles.userName}>Lumesh</Text>
          <Text style={styles.userEmail}>lumesh@example.com</Text>
        </View>

        {/* User Statistics Row */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <View style={[styles.statIconBg, { backgroundColor: "#FFF0ED" }]}>
              <Ionicons name="bag" size={20} color="#F53A25" />
            </View>
            <Text style={styles.statVal}>42</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>

          <View style={styles.statItem}>
            <View style={[styles.statIconBg, { backgroundColor: "#FFF8EA" }]}>
              <Ionicons name="heart" size={20} color="#F58700" />
            </View>
            <Text style={styles.statVal}>18</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>

          <View style={styles.statItem}>
            <View style={[styles.statIconBg, { backgroundColor: "#EBF8F2" }]}>
              <Ionicons name="wallet" size={20} color="#10B981" />
            </View>
            <Text style={styles.statVal}>$250</Text>
            <Text style={styles.statLabel}>Wallet</Text>
          </View>
        </View>

        {/* Profile Info Details */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionHeader}>Account Information</Text>

          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color="#888" />
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <Text style={styles.infoValue}>+1 (234) 567-8900</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={20} color="#888" />
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Email Address</Text>
              <Text style={styles.infoValue}>lumesh@example.com</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color="#888" />
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Primary Address</Text>
              <Text style={styles.infoValue}>123 Main St, New York, NY</Text>
            </View>
          </View>
        </View>

        {/* Action Button to Open Drawer */}
        <TouchableOpacity
          style={styles.drawerButton}
          activeOpacity={0.8}
          onPress={openDrawer}
        >
          <Ionicons name="menu" size={20} color="#FFFFFF" />
          <Text style={styles.drawerButtonText}>Open Navigation Menu</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Custom Drawer Modal Overlay */}
      <Modal
        visible={drawerVisible}
        transparent={true}
        animationType="none"
        onRequestClose={() => closeDrawer()}
      >
        <View style={styles.modalOverlay}>
          {/* Backdrop Tap Target */}
          <TouchableWithoutFeedback onPress={() => closeDrawer()}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          {/* Sliding Drawer Container */}
          <Animated.View
            style={[
              styles.drawerContainer,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            {/* Drawer Header */}
            <View style={styles.drawerHeader}>
              <View style={styles.drawerAvatar}>
                <Text style={styles.drawerAvatarText}>L</Text>
              </View>
              <View style={styles.drawerHeaderMeta}>
                <Text style={styles.drawerProfileName}>Lumesh</Text>
                <Text style={styles.drawerProfileEmail}>lumesh@example.com</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Menu Options List */}
            <ScrollView
              contentContainerStyle={styles.drawerMenu}
              showsVerticalScrollIndicator={false}
            >
              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => handleMenuPress("order")}
              >
                <View style={[styles.menuIconBg, { backgroundColor: "#EBF8F2" }]}>
                  <Ionicons name="bag-handle-outline" size={20} color="#10B981" />
                </View>
                <Text style={styles.menuText}>My Orders</Text>
                <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => handleMenuPress("settings")}
              >
                <View style={[styles.menuIconBg, { backgroundColor: "#FFF8EA" }]}>
                  <Ionicons name="settings-outline" size={20} color="#F58700" />
                </View>
                <Text style={styles.menuText}>Settings</Text>
                <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => handleMenuPress("help")}
              >
                <View style={[styles.menuIconBg, { backgroundColor: "#EDF7FF" }]}>
                  <Ionicons name="help-circle-outline" size={20} color="#3B82F6" />
                </View>
                <Text style={styles.menuText}>Help & Support</Text>
                <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
              </TouchableOpacity>

              <View style={[styles.divider, { marginVertical: 12 }]} />

              <TouchableOpacity
                style={styles.logoutItem}
                activeOpacity={0.7}
                onPress={() => handleMenuPress("login", undefined, true)}
              >
                <View style={[styles.menuIconBg, { backgroundColor: "#FFF0ED" }]}>
                  <Ionicons name="log-out-outline" size={20} color="#F53A25" />
                </View>
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </ScrollView>

            {/* Footer with version */}
            <View style={styles.drawerFooter}>
              <Text style={styles.versionText}>Food Delivery App v1.0.0</Text>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8f2",
  },
  headerMenuBtn: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
    alignItems: "center",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 28,
  },
  avatarLarge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  avatarLargeText: {
    fontFamily: FONTS.black,
    fontSize: 44,
    color: "#FFFFFF",
  },
  userName: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: "#000000",
    marginBottom: 4,
  },
  userEmail: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: "#888888",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statVal: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: "#000000",
    marginBottom: 2,
  },
  statLabel: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: "#888888",
  },
  infoSection: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  sectionHeader: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#000000",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  infoCol: {
    marginLeft: 16,
    flex: 1,
  },
  infoLabel: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: "#888888",
    marginBottom: 2,
  },
  infoValue: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000000",
  },
  drawerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    width: "100%",
    height: 56,
    borderRadius: 16,
    gap: 8,
  },
  drawerButtonText: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#FFFFFF",
  },

  // Modal & Drawer Overlay Styles
  modalOverlay: {
    flex: 1,
    flexDirection: "row",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  drawerContainer: {
    width: DRAWER_WIDTH,
    height: "100%",
    backgroundColor: "#fff8f2",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 16,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  drawerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  drawerAvatarText: {
    fontFamily: FONTS.black,
    fontSize: 28,
    color: "#FFFFFF",
  },
  drawerHeaderMeta: {
    marginLeft: 14,
    flex: 1,
  },
  drawerProfileName: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: "#000000",
    marginBottom: 2,
  },
  drawerProfileEmail: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#888888",
  },
  divider: {
    height: 1,
    backgroundColor: "#EAEAEA",
    width: "100%",
    marginVertical: 16,
  },
  drawerMenu: {
    flexGrow: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 8,
  },
  logoutItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuIconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  menuText: {
    flex: 1,
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#000000",
  },
  logoutText: {
    flex: 1,
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#F53A25",
  },
  drawerFooter: {
    alignItems: "center",
    paddingTop: 10,
  },
  versionText: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: "#B0B0B0",
  },
});
