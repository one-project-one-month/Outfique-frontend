import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileButton from "./ProfileButton";

const DashboardHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            { fontWeight: "bold", fontSize: 16, lineHeight: 24 },
          ]}
        >
          Morning, Avery!
        </Text>
        <Text
          style={[styles.text, { fontSize: 18, color: colors.uranianBlue }]}
        >
          Ready for today look?
        </Text>
      </View>
      <ProfileButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  textContainer: {
    gap: 2,
  },
  text: {
    color: "white",
  },
});

export default DashboardHeader;
