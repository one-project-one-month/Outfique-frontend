import { colors } from "@/constants/theme";
import React from "react";
import { Text } from "react-native";

const OutfitDetailTitle = ({
  title,
  color = colors.eclipseBlack,
}: {
  title: string;
  color?: string;
}) => {
  return (
    <Text style={{ fontSize: 24, fontWeight: "bold", color: color }}>
      {title}
    </Text>
  );
};

export default OutfitDetailTitle;
