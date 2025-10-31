import * as React from "react";
import { FlatList, View } from "react-native";
import BannerHeader from "./BannerHeader";
import TrendingItemCard from "./TrendingItemCard";

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

function TrendingItemsSection() {
  return (
    <View id="carousel-banner">
      <BannerHeader title="Trending Items" to="/trendingItems" />
      <FlatList
        data={defaultDataWith6Colors}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="normal"
        contentContainerStyle={{
          paddingHorizontal: 0,
        }}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 5 }}>
            <TrendingItemCard color={item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default TrendingItemsSection;
