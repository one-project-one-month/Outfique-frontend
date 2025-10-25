import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type FashionStyleCardProps = {
  title: string;
  description: string;
  selected?: boolean;
  onPress?: () => void;
};

const FashionStyleCard = ({
  title,
  description,
  selected = false,
  onPress,
}: FashionStyleCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Description */}
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FashionStyleCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    padding: 20,
    marginBottom: 12,
  },
  cardSelected: {
    backgroundColor: "rgba(160, 221, 255, 0.08)",
    borderColor: colors.uranianBlue,
    shadowColor: colors.uranianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  content: {
    gap: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  description: {
    color: "rgba(160, 221, 255, 0.8)",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
});
