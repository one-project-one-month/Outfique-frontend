import { colors } from "@/constants/theme";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import OutfitDetailDescription from "../outfit-details/OutfitDetailDescription";
import OutfitDetailModel from "../outfit-details/OutfitDetailModel";
import OutfitDetailTitle from "../outfit-details/OutfitDetailTitle";

const OutfitCardTwo = ({
  title,
  bgColor = "#FAFAFA",
  image,
}: {
  title?: string;
  bgColor?: string;
  image: any;
  width?: string;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {title && (
        <OutfitDetailModel
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        >
          <OutfitDetailTitle color={colors.eclipseBlack} title={title} />
          <View
            style={[
              styles.imageContainer,
              { backgroundColor: "#1B1B1B99", width: 173, height: 173 },
            ]}
          >
            <Image
              source={image}
              style={{
                width: 173,
                height: 173,
              }}
              contentFit="contain"
              cachePolicy={"memory-disk"}
            />
          </View>
          <OutfitDetailDescription
            color={colors.eclipseBlack}
            description="A pair of sneakers that perfectly balance comfort and style, designed with cushioned soles that support your every step and versatile colors that make them easy to pair with everything from jeans to casual dresses, creating a footwear choice that feels effortless, trendy, and ready for any casual day out."
          />
        </OutfitDetailModel>
      )}
      <Pressable onPress={() => setModalVisible(true)} style={styles.pressable}>
        <View style={[styles.imageContainer, { backgroundColor: bgColor }]}>
          <Image
            source={image}
            style={{
              width: "100%",
              height: 170,
            }}
            contentFit="contain"
            cachePolicy={"memory-disk"}
          />
        </View>
        {title && <Text style={styles.title}>{title}</Text>}
      </Pressable>
    </View>
  );
};

export default OutfitCardTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "50%", // Ensures 2 columns
    paddingHorizontal: 6, // Half of the gap (12/2)
  },
  pressable: {
    width: "100%",
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    width: "100%",
    height: 173, // Ensures consistent height
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 8,
  },
});
