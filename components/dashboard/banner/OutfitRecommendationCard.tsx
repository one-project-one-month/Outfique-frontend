import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

const OutfitRecommendationCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", width: "30%" }}>
        <Image
          source={require("@/assets/images/t4.png")}
          style={{
            width: "100%",
            height: 75,
          }}
          contentFit="contain"
          cachePolicy={"memory-disk"}
        />
        <Image
          source={require("@/assets/images/t4.png")}
          style={{
            width: "100%",
            height: 75,
          }}
          contentFit="contain"
          cachePolicy={"memory-disk"}
        />
      </View>
      <Image
        source={require("@/assets/images/t2.png")}
        style={{
          width: "30%",
          height: 150,
        }}
        contentFit="contain"
        cachePolicy={"memory-disk"}
      />
      <Image
        source={require("@/assets/images/t3.png")}
        style={{
          width: "30%",
          height: 150,
        }}
        contentFit="contain"
        cachePolicy={"memory-disk"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 212,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default OutfitRecommendationCard;
