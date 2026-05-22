import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Circle } from "react-native-svg";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

const { width } = Dimensions.get("window");

const CATEGORIES = [
  { id: "1", name: "Pizza", emoji: "🍕", bgColor: "#FFF0ED" },
  { id: "2", name: "Burgers", emoji: "🍔", bgColor: "#FFF8EA" },
  { id: "3", name: "Sushi", emoji: "🍣", bgColor: "#EBF8F2" },
  { id: "4", name: "Dessert", emoji: "🍩", bgColor: "#FDF0F6" },
  { id: "5", name: "Drinks", emoji: "🥤", bgColor: "#EDF7FF" },
];

const FEATURED_ITEMS = [
  {
    id: "1",
    name: "Classic Cheeseburger",
    restaurant: "Burger Crafts",
    price: "$9.50",
    rating: "4.8",
    time: "15-20 min",
    image: { uri: "https://pngimg.com/uploads/burger/burger_PNG97.png" },
  },
  {
    id: "2",
    name: "Pepperoni Feast",
    restaurant: "Pizza Studio",
    price: "$14.90",
    rating: "4.9",
    time: "20-25 min",
    emoji: "🍕",
  },
  {
    id: "3",
    name: "Crunchy Salmon Roll",
    restaurant: "Sushi Palace",
    price: "$18.00",
    rating: "4.7",
    time: "25-30 min",
    emoji: "🍣",
  },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Burgers");

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Top Location & Notification Row */}
        <View style={styles.topRow}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Deliver to</Text>
            <TouchableOpacity
              style={styles.locationSelector}
              activeOpacity={0.7}
            >
              <Text style={styles.locationValue}>Home - 123 Main St, NY</Text>
              <Svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M6 9L12 15L18 9"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <Path
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <View style={styles.badgeDot} />
          </TouchableOpacity>
        </View>

        {/* Greeting Banner */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingTitle}>Hello, Lumesh! 👋</Text>
          <Text style={styles.greetingSubtitle}>
            What are you craving today?
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchIconBg}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <Path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#999999"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search restaurants, dishes..."
            placeholderTextColor="#999999"
          />
        </View>

        {/* Promotional Banner */}
        <View style={styles.promoCard}>
          <View style={styles.promoTextCol}>
            <Text style={styles.promoTag}>LIMITED TIME</Text>
            <Text style={styles.promoTitle}>50% OFF</Text>
            <Text style={styles.promoDesc}>On your first 3 food orders!</Text>
            <TouchableOpacity style={styles.promoBtn} activeOpacity={0.8}>
              <Text style={styles.promoBtnText}>Claim Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.promoGraphicCol}>
            {/* Clean visual representation of food splash */}
            <View style={styles.promoPizzaCircle}>
              <Text style={{ fontSize: 64 }}>🍕</Text>
            </View>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.name;
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  { backgroundColor: category.bgColor },
                  isActive && styles.categoryCardActive,
                ]}
                activeOpacity={0.8}
                onPress={() => setActiveCategory(category.name)}
              >
                <View style={styles.emojiContainer}>
                  <Text style={styles.categoryEmoji}>{category.emoji}</Text>
                </View>
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Popular Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Near You</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.seeAllLink}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Items Grid/List */}
        <View style={styles.featuredList}>
          {FEATURED_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.featuredCard}
              activeOpacity={0.9}
            >
              <View style={styles.cardImageContainer}>
                {item.image ? (
                  <View style={styles.imageBgCircle}>
                    <Image
                      source={item.image}
                      style={styles.cardImage}
                      resizeMode="contain"
                    />
                  </View>
                ) : (
                  <View style={styles.emojiFallbackBg}>
                    <Text style={{ fontSize: 44 }}>{item.emoji}</Text>
                  </View>
                )}
                <View style={styles.ratingBadge}>
                  <Svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                  >
                    <Path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </Svg>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>

              <View style={styles.cardDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemRestaurant}>{item.restaurant}</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <View style={styles.timeContainer}>
                    <Svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#666666"
                        strokeWidth="2"
                      />
                      <Path
                        d="M12 6V12L16 14"
                        stroke="#666666"
                        strokeWidth="2"
                      />
                    </Svg>
                    <Text style={styles.itemTime}>{item.time}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8f2",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: "column",
  },
  locationLabel: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#888888",
    marginBottom: 2,
  },
  locationSelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationValue: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000000",
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    position: "relative",
  },
  badgeDot: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greetingTitle: {
    fontFamily: FONTS.bold,
    fontSize: 26,
    color: "#000000",
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: "#666666",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  searchIconBg: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: "#000",
  },
  promoCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 3,
  },
  promoTextCol: {
    flex: 1.2,
  },
  promoTag: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    color: "#FFFFFF",
    opacity: 0.8,
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  promoTitle: {
    fontFamily: FONTS.black,
    fontSize: 34,
    color: "#000000",
    marginBottom: 4,
    lineHeight: 38,
  },
  promoDesc: {
    fontFamily: FONTS.bold,
    fontSize: 13,
    color: "#000000",
    opacity: 0.85,
    marginBottom: 16,
  },
  promoBtn: {
    backgroundColor: "#000000",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
    alignSelf: "flex-start",
  },
  promoBtnText: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: "#FFFFFF",
  },
  promoGraphicCol: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  promoPizzaCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: "#000000",
  },
  seeAllLink: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.secondary,
  },
  categoriesScroll: {
    paddingBottom: 24,
    gap: 12,
  },
  categoryCard: {
    width: 84,
    height: 96,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  categoryCardActive: {
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
  },
  emojiContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  categoryEmoji: {
    fontSize: 20,
  },
  categoryText: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: "#666666",
  },
  categoryTextActive: {
    color: "#000000",
  },
  featuredList: {
    gap: 16,
  },
  featuredCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    flexDirection: "row",
    padding: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  cardImageContainer: {
    position: "relative",
  },
  imageBgCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F2F8E8", // Light matching green background plate
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  cardImage: {
    width: 70,
    height: 70,
  },
  emojiFallbackBg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FAF3E8",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingBadge: {
    position: "absolute",
    bottom: -6,
    left: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  ratingText: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    color: "#000",
  },
  cardDetails: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: "space-between",
  },
  itemName: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#000000",
    marginTop: 2,
  },
  itemRestaurant: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#888888",
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 2,
  },
  itemPrice: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#000000",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  itemTime: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#666666",
  },
});
