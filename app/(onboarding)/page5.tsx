import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import StarSlider from "@/components/StarSlider";
import { colors } from "@/constants/theme";
import { isIos } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboardingStore";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page5 = () => {
  const router = useRouter();

  const gender = useOnboardingStore((state) => state.gender);

  const setGender = useOnboardingStore((state) => state.setGender);

  return (
    <ScreenWrapper>
      <View style={styles.topBar}>
        {isIos && <BackButton />}
        <StarSlider initialPosition={0.4} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>What's your gender?</Text>
      </View>

      <View style={styles.genderContainer}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.genderCard,
            gender === "male" && styles.genderCardSelected,
          ]}
          onPress={() => setGender("male")}
        >
          <View style={styles.iconBox}>
            <Text style={styles.icon}>👨</Text>
          </View>
          <Text style={styles.genderLabel}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.genderCard,
            gender === "female" && styles.genderCardSelected,
          ]}
          onPress={() => setGender("female")}
        >
          <View style={styles.iconBox}>
            <Text style={styles.icon}>👩</Text>
          </View>
          <Text style={styles.genderLabel}>Female</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerButton}>
        <TouchableOpacity
          onPress={() => router.push("/(onboarding)/page6")}
          style={[styles.continueButton, !gender && { opacity: 0.5 }]}
          disabled={!gender}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Page5;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
    marginTop: isIos ? 30 : 20,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 56,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 30,
  },
  genderContainer: {
    flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 18,
        paddingLeft: 3,
        paddingRight: 3
  },
  genderCard: {
    width: "45%",
    aspectRatio: 1.1,
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  genderCardSelected: {
    backgroundColor: "rgba(160,221,255,0.08)",
    borderColor: colors.uranianBlue,
    shadowColor: colors.uranianBlue,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  iconBox: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.02)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    fontSize: 48,
    color: "white",
  },
  genderLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
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
