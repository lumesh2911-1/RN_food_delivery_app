import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

const FAQS = [
  {
    question: "How do I track my order?",
    answer: "Go to the Orders tab in the bottom navigation bar to view live status updates of your active delivery.",
  },
  {
    question: "Can I cancel my order?",
    answer: "Orders can only be cancelled within 60 seconds of placing them. After that, preparation begins and cancellation is unavailable.",
  },
  {
    question: "What if my delivery is delayed?",
    answer: "If your order is delayed beyond the estimated delivery time, you can contact the support team or rider directly via the chat button in the order page.",
  },
];

export default function HelpAndSupportScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* FAQ Section */}
      <Text style={styles.sectionHeader}>Frequently Asked Questions</Text>
      
      <View style={styles.faqList}>
        {FAQS.map((faq, index) => (
          <View key={index} style={styles.faqCard}>
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <Text style={styles.faqAnswer}>{faq.answer}</Text>
          </View>
        ))}
      </View>

      {/* Support Contact Section */}
      <Text style={styles.sectionHeader}>Contact Support</Text>

      <TouchableOpacity style={styles.contactRow} activeOpacity={0.7}>
        <View style={styles.rowLeft}>
          <View style={[styles.iconBg, { backgroundColor: "#EBF8F2" }]}>
            <Ionicons name="chatbubbles" size={20} color="#10B981" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.contactLabel}>Live Chat Support</Text>
            <Text style={styles.contactSub}>Average response time: 2 mins</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactRow} activeOpacity={0.7}>
        <View style={styles.rowLeft}>
          <View style={[styles.iconBg, { backgroundColor: "#EDF7FF" }]}>
            <Ionicons name="mail" size={20} color="#3B82F6" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.contactLabel}>Email Support</Text>
            <Text style={styles.contactSub}>support@fooddelivery.com</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactRow} activeOpacity={0.7}>
        <View style={styles.rowLeft}>
          <View style={[styles.iconBg, { backgroundColor: "#FFF8EA" }]}>
            <Ionicons name="call" size={20} color="#F58700" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.contactLabel}>Phone Support</Text>
            <Text style={styles.contactSub}>+1 (800) 555-FOOD</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
      </TouchableOpacity>
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
  sectionHeader: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#000000",
    marginBottom: 16,
    marginTop: 8,
  },
  faqList: {
    marginBottom: 24,
    gap: 12,
  },
  faqCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  faqQuestion: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000000",
    marginBottom: 6,
  },
  faqAnswer: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: "#666666",
    lineHeight: 18,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  textContainer: {
    justifyContent: "center",
  },
  contactLabel: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000000",
    marginBottom: 2,
  },
  contactSub: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: "#888888",
  },
});
