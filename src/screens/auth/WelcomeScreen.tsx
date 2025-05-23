// src/screens/auth/WelcomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../navigation/types";

type WelcomeNavProp = NativeStackNavigationProp<AuthStackParamList, "Welcome">;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeNavProp>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../../../assets/images/africa_drc.png")}
        style={styles.illustration}
        resizeMode="contain"
      />
      <Text style={styles.title}>KOZONGA</Text>
      <View style={styles.taglines}>
        <Text style={styles.tagline}>Redécouvrez la RDC</Text>
        <Text style={styles.tagline}>Return to the DRC</Text>
        <Text style={styles.tagline}>Zonga na RDC</Text>
      </View>
      <TouchableOpacity
        style={styles.cta}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.ctaText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const PRIMARY_BLUE = "#8DD6FF";
const RDC_BLUE_DARK = "#0B2E62";
const RDC_RED = "#C41F1F";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLUE,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 40,
  },
  illustration: {
    width: "70%",
    height: "40%",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 48,
    color: RDC_BLUE_DARK,
    letterSpacing: 1,
  },
  taglines: {
    alignItems: "center",
  },
  tagline: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: RDC_BLUE_DARK,
  },
  cta: {
    width: "70%",
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: RDC_RED,
    alignItems: "center",
  },
  ctaText: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#FFFFFF",
  },
});
