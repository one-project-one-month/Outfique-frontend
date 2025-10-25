import OGContainer from "@/components/outfit-experience/OGContainer";
import OutfitSearchBar from "@/components/outfit-experience/saved-outfits/OutfitSearchBar";
import SavedOutfits from "@/components/outfit-experience/saved-outfits/SavedOutfits";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const SavedOutfitsScreen = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  return (
    <ScreenWrapper>
      <OGContainer paddingTop={20}>
        <OutfitSearchBar />
        {params.query && (
          <Text style={{ color: "white" }}>
            Search results for &quot;{params.query}&quot;
          </Text>
        )}
        <SavedOutfits />
      </OGContainer>
    </ScreenWrapper>
  );
};

export default SavedOutfitsScreen;
