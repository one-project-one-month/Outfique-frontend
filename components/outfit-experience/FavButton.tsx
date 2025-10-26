import { colors } from "@/constants/theme";
import { HeartIcon } from "phosphor-react-native";
import React, { useState } from "react";
import { View } from "react-native";
import GlassButton from "../GlassButton";
import OutfitDetailDescription from "./outfit-details/OutfitDetailDescription";
import OutfitDetailModel from "./outfit-details/OutfitDetailModel";

const FavButton = ({ saved = false }: { saved?: boolean }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <OutfitDetailModel visible={visible} onClose={() => setVisible(false)}>
        <OutfitDetailDescription
          color={"black"}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ab vitae, ea ullam saepe sit fugiat consequatur?"
        />
        <View style={{ flexDirection: "row", gap: 16 }}>
          <GlassButton
            buttonStyle={{ width: 140 }}
            textStyle={{ color: "black" }}
            onPress={() => setVisible(false)}
          >
            Cancel
          </GlassButton>
          <GlassButton
            buttonStyle={{ backgroundColor: colors.red.DEFAULT, width: 140 }}
            onPress={() => setVisible(false)}
          >
            Yes
          </GlassButton>
        </View>
      </OutfitDetailModel>

      <GlassButton size="icon" onPress={() => setVisible(true)}>
        <HeartIcon
          size={24}
          color={colors.uranianBlue}
          weight={saved ? "fill" : "regular"}
        />
      </GlassButton>
    </View>
  );
};

export default FavButton;
