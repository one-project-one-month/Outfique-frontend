import BackButton from "@/components/BackButton";
import CustomHeightPicker from "@/components/CustomHeightPicker";
import ScreenWrapper from "@/components/ScreenWrapper";
import StarSlider from "@/components/StarSlider";
import { colors } from "@/constants/theme";
import { isIos } from "@/lib/utils";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page3 = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.topBar}>
        {isIos && <BackButton />}
        <StarSlider initialPosition={0.3} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>How tall are you?</Text>
          <Text style={styles.subtitle}>
            We want to get the fit just right!
          </Text>
        </View>
      </View>

      <CustomHeightPicker />

      <View style={styles.footerButton}>
        <TouchableOpacity
          onPress={() => router.push("/(onboarding)/page4")}
          style={styles.continueButton}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Page3;

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
