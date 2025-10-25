import BackButton from "@/components/BackButton";
import BodyTypeCard from "@/components/onboarding/BodyTypeCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import StarSlider from "@/components/StarSlider";
import { colors } from "@/constants/theme";
import { getBodyTypesByGender } from "@/lib/bodyTypes";
import { isIos } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboardingStore";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Page6 = () => {
  const router = useRouter();

  const gender = useOnboardingStore((state) => state.gender);
  const setBodyType = useOnboardingStore((state) => state.setBodyType);
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);

  // Get body types based on selected gender
  const bodyTypes = getBodyTypesByGender(gender);

  const handleContinue = () => {
    setBodyType(selectedBodyType);
    router.push("/(onboarding)/page7");
  };

  return (
    <ScreenWrapper>
      <View style={styles.topBar}>
        {isIos && <BackButton />}
        <StarSlider initialPosition={0.5} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            How would you describe your body type?
          </Text>
        </View>

        {/* Body Type Cards List */}
        <ScrollView
          style={styles.bodyTypeList}
          showsVerticalScrollIndicator={false}
        >
          {bodyTypes.map((bodyType) => (
            <BodyTypeCard
              key={bodyType.id}
              title={bodyType.name}
              description={bodyType.description}
              icon={<Text style={styles.bodyTypeIcon}>{bodyType.icon}</Text>}
              selected={selectedBodyType === bodyType.id}
              onPress={() => setSelectedBodyType(bodyType.id)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.footerButton}>
        <TouchableOpacity
          onPress={handleContinue}
          style={[styles.continueButton, !selectedBodyType && { opacity: 0.5 }]}
          disabled={!selectedBodyType}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Page6;

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
    gap: 32,
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
  bodyTypeList: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  bodyTypeIcon: {
    fontSize: 40,
  },
  contentBox: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  infoSection: {
    alignItems: "center",
    gap: 12,
  },
  emoji: {
    fontSize: 64,
  },
  infoTitle: {
    color: colors.uranianBlue,
    fontSize: 20,
    fontWeight: "600",
  },
  infoText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
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
