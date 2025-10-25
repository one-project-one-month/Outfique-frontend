import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import OutfitDetailButtons from "../OutfitDetailButtons";
import OutfitCardOne from "./OutfitCardOne";

const OutfitGeneratedCard = ({
  isBordered = false,
}: {
  isBordered?: boolean;
}) => {
  return (
    <View style={[styles.container, isBordered && styles.border]}>
      <View style={styles.imagesContainer}>
        <OutfitCardOne title="First Item" />
        <OutfitCardOne title="Second Item" />
        <OutfitCardOne title="Third Item" />
        <OutfitCardOne title="Fourth Item" />
        <OutfitCardOne title="Fifth Item" />
        <OutfitCardOne title="Sixth Item" />
      </View>
      <OutfitDetailButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    width: "100%",
  },
  border: {
    borderWidth: 1,
    borderColor: colors.moonlightGray,
    borderRadius: 10,
    backgroundColor: "rgba(27, 27, 27, 1)",
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
});

export default OutfitGeneratedCard;
