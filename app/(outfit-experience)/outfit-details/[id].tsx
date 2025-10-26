import OGContainer from "@/components/outfit-experience/OGContainer";
import OutfitDetails from "@/components/outfit-experience/outfit-details/OutfitDetails";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const OutfitDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <ScreenWrapper>
      <OutfitDetails />
    </ScreenWrapper>
  );
};

export default OutfitDetailsScreen;
