import { Image } from "expo-image";
import React from "react";
import { Dimensions, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = SCREEN_WIDTH * 0.28;

const TrendingItemCard = ({ color }: { color: string }) => {
  return (
    <View
      style={{
        width: CARD_WIDTH,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#FAFAFA",
      }}
    >
      <Image
        source={require("@/assets/images/t4.png")}
        style={{
          width: "100%",
          height: 120,
        }}
        contentFit="contain"
        cachePolicy={"memory-disk"}
      />
    </View>
  );
};

export default TrendingItemCard;
