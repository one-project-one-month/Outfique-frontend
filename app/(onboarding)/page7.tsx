import BackButton from "@/components/BackButton";
import AccessoryCard from "@/components/onboarding/AccessoryCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import StarSlider from "@/components/StarSlider";
import { colors } from "@/constants/theme";
import { getAllAccessories } from "@/lib/accessories";
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

const Page7 = () => {
  const setAccessories = useOnboardingStore((state) => state.setAccessories);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const accessories = getAllAccessories();

  const toggleAccessory = (id: string) => {
    if (selectedAccessories.includes(id)) {
      setSelectedAccessories(selectedAccessories.filter((a) => a !== id));
    } else {
      setSelectedAccessories([...selectedAccessories, id]);
    }
  };

  const handleContinue = () => {
    setAccessories(selectedAccessories);
    router.push("/(onboarding)/page8");
  };

  return (
    <ScreenWrapper>
      <View style={styles.topBar}>
        {isIos && <BackButton />}
        <StarSlider initialPosition={0.8} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Do you love accesorizing?</Text>
          <Text style={styles.subtitle}>Tell us your go-to accessories?</Text>
        </View>

        <FlatList
          data={accessories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <AccessoryCard
              title={item.name}
              description={item.description}
              icon={<Text style={styles.icon}>{item.icon}</Text>}
              selected={selectedAccessories.includes(item.id)}
              onPress={() => toggleAccessory(item.id)}
            />
          )}
        />
      </View>

      <View style={styles.footerButton}>
        <TouchableOpacity
          onPress={handleContinue}
          style={[
            styles.continueButton,
            selectedAccessories.length === 0 && { opacity: 0.5 },
          ]}
          disabled={selectedAccessories.length === 0}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Page7;

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
  subtitle: {
    color: colors.uranianBlue,
    fontSize: 16,
    fontWeight: "400",
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 56,
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
