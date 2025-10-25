import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ColorBoxProps = {
  colorName: string;
  colorValue: string;
  selected?: boolean;
  onPress?: () => void;
};

const ColorBox = ({
  colorName,
  colorValue,
  selected = false,
  onPress,
}: ColorBoxProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.colorBox,
        { backgroundColor: colorValue },
        selected && styles.selected,
      ]}
      onPress={onPress}
    >
      <Text style={styles.colorName}>{colorName}</Text>
    </TouchableOpacity>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  colorBox: {
    width: "31%",
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 6,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selected: {
    borderColor: colors.uranianBlue,
    borderWidth: 3,
    shadowColor: colors.uranianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  colorName: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    lineHeight: 24,
  },
});
