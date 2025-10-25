import { Image } from "expo-image";
import { StarFourIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const image = require("@/assets/images/t2.png");

const OutfitCardOne = ({
  title,
  startColor = "white",
}: {
  title: string;
  startColor?: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
          contentFit="contain"
          cachePolicy={"memory-disk"}
        />
      </View>
      <View style={styles.titleContainer}>
        <StarFourIcon size={24} color={startColor} weight="fill" />
        <Text style={[styles.title, { color: startColor }]}>{title}</Text>
      </View>
    </View>
  );
};

export default OutfitCardOne;

const styles = StyleSheet.create({
  container: {
    width: "45%", // Responsive width for 2 columns with gap
    maxWidth: 160,
    minWidth: 140,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1.07, // 160/150 ratio
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 6,
    marginTop: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    flexShrink: 1,
  },
});
