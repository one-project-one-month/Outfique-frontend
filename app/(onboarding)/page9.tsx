import BackButton from "@/components/BackButton";
import FashionStyleCard from "@/components/onboarding/FashionStyleCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import StarSlider from "@/components/StarSlider";
import { colors } from "@/constants/theme";
import { getFashionStylesByGender } from "@/lib/fashionStyles";
import { isIos } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboardingStore";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Page9 = () => {
  const gender = useOnboardingStore((state) => state.gender);
  const setFashionStyles = useOnboardingStore(
    (state) => state.setFashionStyles
  );
  
  const [selectedFashionStyles, setSelectedFashionStyles] = useState<string[]>(
    []
  );

  const toggleFashionStyle = (id: string) => {
    if (selectedFashionStyles.includes(id)) {
      setSelectedFashionStyles(selectedFashionStyles.filter((s) => s !== id));
    } else {
      setSelectedFashionStyles([...selectedFashionStyles, id]);
    }
  };

  const fashionStyles = getFashionStylesByGender(gender);

  const handleContinue = () => {
    setFashionStyles(selectedFashionStyles);
    console.log("Onboarding completed! All data saved to store.");

  };

  return (
    <ScreenWrapper>
      <View style={styles.topBar}>
        {isIos && <BackButton />}
        <StarSlider initialPosition={1} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            What&apos;s your ultimate fashion style or outfit vibe?
          </Text>
        </View>

        {/* Fashion Style Cards List */}
        <ScrollView
          style={styles.fashionStyleList}
          showsVerticalScrollIndicator={false}
        >
          {fashionStyles.map((style) => (
            <FashionStyleCard
              key={style.id}
              title={style.name}
              description={style.description}
              selected={selectedFashionStyles.includes(style.id)}
              onPress={() => toggleFashionStyle(style.id)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.footerButton}>
        <TouchableOpacity
          onPress={handleContinue}
          style={[
            styles.continueButton,
            selectedFashionStyles.length === 0 && { opacity: 0.5 },
          ]}
          disabled={selectedFashionStyles.length === 0}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Page9;

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
    marginTop: 56,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
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
  fashionStyleList: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
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
