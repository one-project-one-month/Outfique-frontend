import React from "react";
import { View } from "react-native";
import OutfitRecommendCardTwo from "./card/OutfitRecommendCardTwo";

const OutfitRecommendationCards = () => {
  return (
    <View style={{ gap: 25, marginBottom: 40 }}>
      <OutfitRecommendCardTwo />
      <OutfitRecommendCardTwo />
    </View>
  );
};

export default OutfitRecommendationCards;
