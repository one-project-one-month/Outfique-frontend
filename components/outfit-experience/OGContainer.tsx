import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const OGContainer = ({
  paddingTop = 20,
  children,
}: {
  paddingTop?: number;
  children: React.ReactNode;
}) => {
  return (
    <ScrollView style={[styles.container, { paddingTop }]}>
      <View style={{ gap: 20 }}>{children}</View>
    </ScrollView>
  );
};

export default OGContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
});
