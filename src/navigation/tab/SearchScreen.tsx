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
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Circle } from "react-native-svg";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

const CATEGORIES = ["Popular", "Quick & Easy", "Diets", "Healthy", "Fast Food"];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.heading}>
            What are you{"\n"}
            <Text style={styles.headingHighlight}>eating</Text> today?
          </Text>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchInputContainer}>
            <View style={styles.searchIconBg}>
              <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Search Food..."
              placeholderTextColor="#999999"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
            <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <Path
                d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3M1 14H7M9 8H15M17 12H23"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>

        <View style={styles.aiRow}>
          <View style={styles.aiTextContainer}>
            <Text style={styles.aiTitle}>Food Zone assistant</Text>
            <Text style={styles.aiSubtitle}>
              Smart insights for healthier choices
            </Text>
          </View>
          <TouchableOpacity style={styles.generateButton} activeOpacity={0.8}>
            <Svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 3v4M12 17v4M5 12h4M15 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </Svg>
            <Text style={styles.generateButtonText}>Generate</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScrollContent}
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryPill,
                    isActive && styles.categoryPillActive,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setActiveCategory(category)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      isActive && styles.categoryTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.recommendedHeader}>
          <Text style={styles.recommendedTitle}>Recommended for you</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.recommendedCard}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>20% Off</Text>
            </View>

            <TouchableOpacity
              style={styles.heartButton}
              activeOpacity={0.8}
              onPress={() => setIsLiked(!isLiked)}
            >
              <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59097 2.9987 4.1917 3.5783 3.16 4.61C2.1283 5.6417 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.8717 11.3583 22.4513 9.95903 22.4513 8.5C22.4513 7.04097 21.8717 5.6417 20.84 4.61V4.61Z"
                  stroke={isLiked ? "#EE3B2B" : "#EE3B2B"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill={isLiked ? "#EE3B2B" : "none"}
                />
              </Svg>
            </TouchableOpacity>

            <Image
              source={{ uri: "https://pngimg.com/uploads/burger/burger_PNG97.png" }}
              style={styles.burgerImage}
              resizeMode="contain"
            />

            <View style={styles.detailsOverlay}>
              <View style={styles.detailsTextContainer}>
                <Text style={styles.burgerTitle}>Black Lavel Burger</Text>
                <Text style={styles.burgerSubtitle}>650 Kcal</Text>
              </View>
              <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
                <Text style={styles.addButtonText}>+ Add</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerTextContainer: {
    marginBottom: 20,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: 34,
    color: "#000000",
    lineHeight: 42,
  },
  headingHighlight: {
    color: COLORS.secondary,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    width: "100%",
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    height: 56,
    paddingHorizontal: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#d4d4d4",
  },
  searchIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: "#000000",
    paddingLeft: 10,
  },
  filterButton: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d4d4d4",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  aiRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  aiTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  aiTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: "#000000",
    marginBottom: 4,
  },
  aiSubtitle: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: "#7E7E7E",
  },
  generateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 22,
  },
  generateButtonText: {
    fontFamily: FONTS.bold,
    fontSize: 13,
    color: "#FFFFFF",
    marginLeft: 6,
  },
  categoriesContainer: {
    marginBottom: 24,
    marginHorizontal: -20,
  },
  categoriesScrollContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryPill: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: "#d4d4d4",
  },
  categoryPillActive: {
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
  },
  categoryText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#666666",
  },
  categoryTextActive: {
    color: "#000000",
  },
  recommendedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  recommendedTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: "#000000",
  },
  seeAllText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#666666",
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
  },
  recommendedCard: {
    width: "100%",
    height: 270,
    borderRadius: 28,
    backgroundColor: "#C5E384",
    position: "relative",
    overflow: "hidden",
  },
  discountBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    zIndex: 10,
  },
  discountText: {
    fontFamily: FONTS.bold,
    fontSize: 13,
    color: "#000000",
  },
  heartButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  burgerImage: {
    position: "absolute",
    width: 250,
    height: 250,
    top: 10,
    alignSelf: "center",
  },
  detailsOverlay: {
    position: "absolute",
    bottom: 12,
    left: 12,
    right: 12,
    height: 76,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  detailsTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  burgerTitle: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#000000",
    marginBottom: 2,
  },
  burgerSubtitle: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: "#666666",
  },
  addButton: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  addButtonText: {
    fontFamily: FONTS.bold,
    fontSize: 13,
    color: "#000000",
  },
});
