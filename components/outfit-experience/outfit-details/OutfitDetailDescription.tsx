import { colors } from "@/constants/theme";
import React from "react";
import { Text } from "react-native";

const OutfitDetailDescription = ({
  description = "",
  color = colors.uranianBlue,
}: {
  description?: string;
  color?: string;
}) => {
  return (
    <Text
      style={{
        fontSize: 16,
        color: color,
        lineHeight: 24,
        fontWeight: "medium",
      }}
    >
      {description ||
        "A relaxed yet stylish outfit that’s perfect for a casual day out, featuring a soft and comfortable knit top that feels easy on the skin, paired with well-fitted jeans that add shape without losing comfort, and completed with a pair of trendy sneakers that bring a modern, laid-back vibe to the entire look while still keeping everything versatile and effortlessly chic, with an average price of around 100,000–200,000 MMK for the full outfit."}
    </Text>
  );
};

export default OutfitDetailDescription;
