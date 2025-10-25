import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { UserIcon } from "phosphor-react-native";
import React from "react";
import GlassButton from "../GlassButton";

const ProfileButton = () => {
  return (
    <GlassButton
      buttonStyle={{ borderRadius: 50 }}
      size="icon"
      onPress={() => router.push("/login")}
    >
      <UserIcon size={24} color={colors.uranianBlue} />
    </GlassButton>
  );
};

export default ProfileButton;
