import React from "react";
import { FlatList } from "react-native";
import OutfitCardTwo from "../cards/OutfitCardTwo";
import OGContainer from "../OGContainer";
import OutfitDetailDescription from "./OutfitDetailDescription";
import OutfitDetailTitle from "./OutfitDetailTitle";

const OutfitDetails = () => {
  return (
    <OGContainer paddingTop={20}>
      <OutfitDetailTitle color={"white"} title="Casual Outfit" />
      <OutfitDetailDescription />
      <FlatList
        data={[
          { title: "Top", image: require("@/assets/images/t4.png") },
          {
            title: "Bottom",
            image: require("@/assets/images/t3.png"),
          },
          { title: "Outerwear", image: require("@/assets/images/t2.png") },
          {
            title: "Footwear",
            image: require("@/assets/images/t1.png"),
          },
          {
            title: "Outfit 3",
            image: require("@/assets/images/t1.png"),
          },
          {
            title: "Outfit 3",
            image: require("@/assets/images/t1.png"),
          },
        ]}
        renderItem={({ item, index }) => (
          <OutfitCardTwo
            title={item.title}
            bgColor={index % 2 !== 0 ? "#1B1B1B99" : "#FAFAFA"}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        scrollEnabled={false}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ paddingHorizontal: 6, marginBottom: 40 }}
      />
    </OGContainer>
  );
};

export default OutfitDetails;
