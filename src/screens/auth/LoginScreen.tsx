import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path, Circle, SvgXml } from "react-native-svg";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";
import {
  GOOGLE_XML,
  FACEBOOK_XML,
} from "../../assets/svg/common/commonSvgData";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const isEmailValid = (emailStr: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(emailStr);
  };

  const isPasswordValid = (passStr: string) => {
    return passStr.length >= 6;
  };

  const showEmailSuccess = isEmailValid(email);
  const showPasswordSuccess = isPasswordValid(password);

  const handleLogin = () => {
    navigation.navigate("bottom");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              accessibilityLabel="Back"
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M19 12H5M12 19L5 12L12 5"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>
          </View>

          {/* Form Content */}
          <View style={styles.mainContent}>
            <Text style={styles.title}>Login</Text>

            {/* Email Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <View
                style={[
                  styles.inputWrapper,
                  emailFocused && styles.inputWrapperFocused,
                  showEmailSuccess && styles.inputWrapperSuccess,
                ]}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Enter email address"
                  placeholderTextColor="#999999"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                {showEmailSuccess && (
                  <View style={styles.validationIcon}>
                    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <Circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#34A853"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <Path
                        d="M8.5 12.5L11 15L16 10"
                        stroke="#34A853"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                )}
              </View>
            </View>

            {/* Password Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View
                style={[
                  styles.inputWrapper,
                  passwordFocused && styles.inputWrapperFocused,
                  showPasswordSuccess && styles.inputWrapperSuccess,
                ]}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="#999999"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                {showPasswordSuccess && (
                  <View style={styles.validationIcon}>
                    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <Circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#34A853"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <Path
                        d="M8.5 12.5L11 15L16 10"
                        stroke="#34A853"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                )}
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {}}
              style={styles.forgotPasswordLink}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.8}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Google Login Button */}
            <TouchableOpacity
              style={styles.googleButton}
              activeOpacity={0.8}
              onPress={() => {}}
            >
              <View style={styles.socialBtnContent}>
                <SvgXml xml={GOOGLE_XML} width="20" height="20" />
                <Text style={styles.googleButtonText}>Login with Google</Text>
              </View>
            </TouchableOpacity>

            {/* Facebook Login Button */}
            <TouchableOpacity
              style={styles.facebookButton}
              activeOpacity={0.8}
              onPress={() => {}}
            >
              <View style={styles.socialBtnContent}>
                <SvgXml xml={FACEBOOK_XML} width="20" height="20" />
                <Text style={styles.facebookButtonText}>
                  Login with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Sign Up Redirect */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Not a member? </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("register")}
            >
              <Text style={styles.signUpText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingBottom: Platform.OS === "ios" ? 10 : 24,
  },
  header: {
    height: 48,
    justifyContent: "center",
    marginTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 32,
    color: "#000000",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    borderRadius: 12,
    height: 58,
    paddingHorizontal: 16,
  },
  inputWrapperFocused: {
    borderColor: COLORS.secondary,
  },
  inputWrapperSuccess: {
    borderColor: "#34A853",
  },
  input: {
    flex: 1,
    height: "100%",
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: "#000000",
  },
  validationIcon: {
    marginLeft: 8,
  },
  forgotPasswordLink: {
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000000",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: COLORS.secondary,
    width: "100%",
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  loginButtonText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.primary,
    letterSpacing: 0.3,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    width: "100%",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E2E2",
  },
  dividerText: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: "#A0A0A0",
    paddingHorizontal: 16,
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    marginBottom: 16,
  },
  googleButtonText: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#000000",
    marginLeft: 10,
  },
  facebookButton: {
    backgroundColor: "#1877F2",
    width: "100%",
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  facebookButtonText: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  socialBtnContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  footerText: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: "#666666",
  },
  signUpText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: "#000000",
    textDecorationLine: "underline",
  },
});
