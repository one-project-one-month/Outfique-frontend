import BackButton from "@/components/BackButton";
import WeightPicker from "@/components/CustomWeightPicker";
import ScreenWrapper from "@/components/ScreenWrapper";
import StarSlider from "@/components/StarSlider";
import { colors } from "@/constants/theme";
import { isIos } from "@/lib/utils";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page4 = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.topBar}>
        {isIos && <BackButton />}
        <StarSlider initialPosition={0.4} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>And your weight?</Text>
          <Text style={styles.subtitle}>
            This helps us finding the most flattering styles for you!
          </Text>
        </View>
      </View>

      <WeightPicker />

      <View style={styles.footerButton}>
        <TouchableOpacity
          onPress={() => router.push("/(onboarding)/page1")}
          style={styles.continueButton}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Page4;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
    marginTop: isIos ? 30 : 20,
  },
  contentContainer: {
    flex: 1,
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 48,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  subtitle: {
    color: colors.uranianBlue,
    fontSize: 16,
    fontWeight: "400",
  },
  footerButton: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  continueButton: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "600",
    color: colors.midnightNavy,
    textAlign: "center",
    fontSize: 16,
  },
});
