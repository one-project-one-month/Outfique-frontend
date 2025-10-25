import React from "react";
import { View } from "react-native";
import OutfitGeneratedCard from "../cards/OutfitGeneratedCard";

const SavedOutfits = () => {
  return (
    <View style={{ gap: 20 }}>
      <OutfitGeneratedCard isBordered />
      <OutfitGeneratedCard isBordered />
    </View>
  );
};

export default SavedOutfits;
