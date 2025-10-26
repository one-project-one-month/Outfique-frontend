import React from "react";
import { View } from "react-native";
import BannerCarousel from "./BannerCarousel";
import BannerHeader from "./BannerHeader";

const OutfitRecommendationsSection = () => {
  return (
    <View>
      <BannerHeader title="Outfit Recommendations" />
      <BannerCarousel />
    </View>
  );
};

export default OutfitRecommendationsSection;
