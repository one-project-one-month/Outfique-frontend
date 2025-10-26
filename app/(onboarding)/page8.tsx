import BackButton from "@/components/BackButton";
import ColorBox from "@/components/onboarding/ColorBox";
import ScreenWrapper from "@/components/ScreenWrapper";
import StarSlider from "@/components/StarSlider";
import { colors } from "@/constants/theme";
import { getAllColors } from "@/lib/colors";
import { isIos } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboardingStore";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Page8 = () => {
  const setFavoriteColors = useOnboardingStore(
    (state) => state.setFavoriteColors
  );
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const colorOptions = getAllColors();

  const toggleColor = (id: string) => {
    if (selectedColors.includes(id)) {
      setSelectedColors(selectedColors.filter((c) => c !== id));
    } else {
      setSelectedColors([...selectedColors, id]);
    }
  };

  const handleContinue = () => {
    setFavoriteColors(selectedColors);
    router.push("/(onboarding)/page9");
  };

  return (
    <ScreenWrapper>
      <View style={styles.topBar}>
        {isIos && <BackButton />}
        <StarSlider initialPosition={0.9} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Pick your favorite color!</Text>
          <Text style={styles.subtitle}>This helps us match your vibe</Text>
        </View>

        {/* Color Boxes Grid */}
        <FlatList
          data={colorOptions}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.colorGrid}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ColorBox
              colorName={item.name}
              colorValue={item.value}
              selected={selectedColors.includes(item.id)}
              onPress={() => toggleColor(item.id)}
            />
          )}
        />
      </View>

      <View style={styles.footerButton}>
        <TouchableOpacity
          onPress={handleContinue}
          style={[
            styles.continueButton,
            selectedColors.length === 0 && { opacity: 0.5 },
          ]}
          disabled={selectedColors.length === 0}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Page8;

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
  colorGrid: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  columnWrapper: {
    justifyContent: "space-between",
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
