import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import {
  INTRO1_XML,
  INTRO2_XML,
  INTRO3_XML,
} from "../../assets/svg/intro/introSvgData";
import { SafeAreaView } from "react-native-safe-area-context";

const ONBOARDING_DATA = [
  {
    id: "1",
    xml: INTRO1_XML,
    title: "Personalized meal\nplanning",
    description:
      "Pick your week's meals in minutes. With over 200 personalization options, eat exactly how you want to eat.",
  },
  {
    id: "2",
    xml: INTRO2_XML,
    title: "Simple, stress-free\ngrocery shopping",
    description:
      'Grocery shop once per week with an organized "done for you" shopping list.',
  },
  {
    id: "3",
    xml: INTRO3_XML,
    title: "Delicious, healthy meals\nmade easy",
    description:
      "Easily cook healthy, delicious meals in about 30 minutes, from start to finish.",
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<any>();
  const { width } = Dimensions.get("window");

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollOffset / width);
    if (
      index !== currentIndex &&
      index >= 0 &&
      index < ONBOARDING_DATA.length
    ) {
      setCurrentIndex(index);
    }
  };

  const handleContinue = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate("login");
    }
  };

  const handleSkip = () => {
    navigation.navigate("login");
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof ONBOARDING_DATA)[0];
    index: number;
  }) => {
    return (
      <View style={[styles.slideItem, { width }]}>
        <View style={styles.imageContainer}>
          <SvgXml xml={item.xml} width={width * 0.85} height={width * 0.85} />
        </View>
        <View style={styles.dotsContainer}>
          {ONBOARDING_DATA.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === index ? styles.activeDot : null]}
            />
          ))}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightBg} />
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.skipLink}
          activeOpacity={0.7}
          onPress={handleSkip}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    alignItems: "stretch",
  },
  slideItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1.4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E8E8E8",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.secondary,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 26,
    color: "#000000",
    textAlign: "center",
    lineHeight: 34,
    marginBottom: 16,
  },
  description: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: "#666666",
    textAlign: "center",
    lineHeight: 22,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: "center",
    gap: 16,
    backgroundColor: COLORS.lightBg,
  },
  button: {
    backgroundColor: COLORS.secondary,
    width: "100%",
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.primary,
    letterSpacing: 0.3,
  },
  skipLink: {
    paddingVertical: 8,
  },
  skipText: {
    fontFamily: FONTS.semiBold,
    fontSize: 15,
    color: "#000000",
  },
});
