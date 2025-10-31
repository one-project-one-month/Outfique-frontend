import { colors } from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AccessoryCardProps = {
  title: string;
  description: string;
  imageSource: any; // For require() images
  selected?: boolean;
  onPress?: () => void;
};

const AccessoryCard = ({
  title,
  description,
  imageSource,
  selected = false,
  onPress,
}: AccessoryCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
    >
      <View style={styles.content}>
    
        <View style={styles.iconContainer}>
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Text content at the bottom */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccessoryCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    aspectRatio: 0.85,
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
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 70,
    height: 60,
  },
  textContainer: {
    width: "100%",
    gap: 4,
    alignItems: "flex-start",
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  description: {
    color: colors.uranianBlue,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
  },
});
