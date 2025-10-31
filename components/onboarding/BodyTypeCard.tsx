import { colors } from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BodyTypeCardProps = {
  title: string;
  description: string;
  imageSource: any; // For require() images
  selected?: boolean;
  onPress?: () => void;
};

const BodyTypeCard = ({
  title,
  description,
  imageSource,
  selected = false,
  onPress,
}: BodyTypeCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {/* Image on the left */}
        <Image
          source={imageSource}
          style={styles.iconContainer}
          resizeMode="contain"
        />

        {/* Text content on the right */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BodyTypeCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    padding: 8,
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
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    gap: 6,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
    lineHeight: 24,
  },
  description: {
    color: colors.uranianBlue,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
  },
});
