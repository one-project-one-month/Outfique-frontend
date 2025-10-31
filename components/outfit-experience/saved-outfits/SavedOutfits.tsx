import { useSavedOutfits } from "@/features/saved-outfit/hooks/useSavedOutfits";
import React from "react";
import { Text, View } from "react-native";
import OutfitGeneratedCard from "../cards/OutfitGeneratedCard";

const SavedOutfits = () => {
  const { data, isLoading, isError, error } = useSavedOutfits();
  // // Without filters
  // const { data: allOutfits } = useSavedOutfits();

  // // With filters
  // const { data: filteredOutfits } = useSavedOutfits({
  //   search: "summer",
  //   category: "casual",
  //   page: 1,
  //   limit: 10,
  // });
  return (
    <View style={{ gap: 20 }}>
      {isLoading && <Text style={{ color: "white" }}>Loading...</Text>}
      {isError && <Text style={{ color: "red" }}>Error</Text>}
      <OutfitGeneratedCard isBordered />
      <OutfitGeneratedCard isBordered />
    </View>
  );
};

export default SavedOutfits;
