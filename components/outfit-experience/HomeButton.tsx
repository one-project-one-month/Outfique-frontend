import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { HouseIcon } from "phosphor-react-native";
import React from "react";
import GlassButton from "../GlassButton";

const HomeButton = () => {
  return (
    <GlassButton size="icon" onPress={() => router.push("/dashboard")}>
      <HouseIcon size={24} color={colors.uranianBlue} />
    </GlassButton>
  );
};

export default HomeButton;
