import { colors } from "@/constants/theme";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import GlassButton from "../GlassButton";
import ShareModal from "../ShareModal";
import FavButton from "./FavButton";
import ShareButton from "./ShareButton";

const OutfitDetailButtons = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  return (
    <View style={styles.container}>
      <GlassButton size="medium" buttonStyle={{ width: "65%" }}>
        <Link
          href={{
            pathname: "/outfit-details/[id]",
            params: { id: "1" },
          }}
          style={{
            color: colors.uranianBlue,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          View user details
        </Link>
      </GlassButton>
      <ShareButton onPress={() => setShowShareModal(true)} />
      <ShareModal
        visible={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
      <View>
        <FavButton />
      </View>
    </View>
  );
};

export default OutfitDetailButtons;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});
