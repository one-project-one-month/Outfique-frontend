import OGContainer from "@/components/outfit-experience/OGContainer";
import ReactNativeRC from "@/components/outfit-experience/ReactNativeRC";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const GeneratedOutfits = () => {
  return (
    <ScreenWrapper>
      <OGContainer paddingTop={20}>
        <Link href="/saved-outfits" style={{ color: "white" }}>
          Go to Saved Outfits
        </Link>
        <View style={{ flex: 1 }}>
          <ReactNativeRC />
        </View>
      </OGContainer>
    </ScreenWrapper>
  );
};

export default GeneratedOutfits;
