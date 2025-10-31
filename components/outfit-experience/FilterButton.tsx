import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { SlidersHorizontalIcon } from "phosphor-react-native";
import React from "react";
import GlassButton from "../GlassButton";

const FilterButton = () => {
  return (
    <GlassButton
      size="icon"
      buttonStyle={{ marginRight: 10 }}
      onPress={() => router.push("/dashboard")}
    >
      <SlidersHorizontalIcon size={24} color={colors.uranianBlue} />
    </GlassButton>
  );
};

export default FilterButton;
