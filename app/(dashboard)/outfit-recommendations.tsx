import OutfitRecommendationCards from "@/components/dashboard/OutfitRecommendationCards";
import OGContainer from "@/components/outfit-experience/OGContainer";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";

const OutfitRecommendations = () => {
  return (
    <ScreenWrapper>
      <OGContainer paddingTop={30}>
        <OutfitRecommendationCards />
      </OGContainer>
    </ScreenWrapper>
  );
};

export default OutfitRecommendations;
