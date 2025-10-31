import { colors } from "@/constants/theme";
import { ShareFatIcon } from "phosphor-react-native";
import React from "react";
import GlassButton from "../GlassButton";

const ShareButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <GlassButton size="icon" onPress={onPress}>
      <ShareFatIcon size={24} color={colors.uranianBlue} />
    </GlassButton>
  );
};

export default ShareButton;
