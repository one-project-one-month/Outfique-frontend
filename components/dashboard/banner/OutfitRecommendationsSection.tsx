import { useOutfitRecommendations } from "@/features/outfit-recommendation/hooks/useOutfitRecommendation";
import React from "react";
import { Text, View } from "react-native";
import BannerCarousel from "./BannerCarousel";
import BannerHeader from "./BannerHeader";

const OutfitRecommendationsSection = () => {
  const { data, isLoading, isError, error } = useOutfitRecommendations();
  return (
    <View>
      {isLoading && <Text style={{ color: "white" }}>loading..</Text>}
      {isError && <Text style={{ color: "white" }}>{error.message}..</Text>}
      <BannerHeader
        title="Outfit Recommendations"
        to="/outfit-recommendations"
      />
      <BannerCarousel />
    </View>
  );
};

export default OutfitRecommendationsSection;
