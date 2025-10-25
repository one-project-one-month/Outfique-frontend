import OutfitCardOne from "@/components/outfit-experience/cards/OutfitCardOne";
import OutfitDetailButtons from "@/components/outfit-experience/OutfitDetailButtons";
import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

const OutfitRecommendCardTwo = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.imagesContainer}>
        <OutfitCardOne title="First Item" startColor={colors.astralBlue} />
        <OutfitCardOne title="Second Item" startColor={colors.astralBlue} />
        <OutfitCardOne title="Third Item" startColor={colors.astralBlue} />
        <OutfitCardOne title="Fourth Item" startColor={colors.astralBlue} />
        <OutfitCardOne title="Fifth Item" startColor={colors.astralBlue} />
        <OutfitCardOne title="Sixth Item" startColor={colors.astralBlue} />
      </View>
      <OutfitDetailButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    width: "100%",
  },
  imagesContainer: {
    padding: 20,
    backgroundColor: colors.moonlightGray,
    borderWidth: 1,
    borderColor: colors.moonlightGray,
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
});

export default OutfitRecommendCardTwo;
