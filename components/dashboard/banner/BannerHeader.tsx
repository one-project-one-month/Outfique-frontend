import GlassButton from "@/components/GlassButton";
import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { ArrowRightIcon } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BannerHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>See more</Text>
        <GlassButton
          buttonStyle={{ width: 30, height: 30 }}
          size="icon"
          onPress={() => router.push("/outfit-recommendations")}
        >
          <ArrowRightIcon size={20} color={colors.uranianBlue} />
        </GlassButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  title: { color: "white", fontWeight: "bold", fontSize: 18, lineHeight: 26 },
  seeMoreContainer: { flexDirection: "row", alignItems: "center", gap: 10 },
  seeMoreText: { fontSize: 14, lineHeight: 22, color: colors.uranianBlue },
});

export default BannerHeader;
