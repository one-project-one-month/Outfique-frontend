import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");
const SLIDER_WIDTH = width * 0.8;
const THUMB_SIZE = 60;

interface StarSliderProps {
  initialPosition?: number;
  sliderWidth?: number;
}

export default function StarSlider({
  initialPosition = 0,
  sliderWidth = SLIDER_WIDTH,
}: StarSliderProps) {
  const CURRENT_SLIDER_WIDTH = sliderWidth;
  const trackFillWidth = initialPosition * CURRENT_SLIDER_WIDTH;
  const thumbPosition = trackFillWidth - THUMB_SIZE / 2;

  return (
    <View style={styles.container}>
      {/* Track background */}
      <View style={[styles.trackBackground, { width: CURRENT_SLIDER_WIDTH }]}>
        <View
          style={[
            styles.trackFill,
            {
              width: trackFillWidth,
            },
          ]}
        />
      </View>

      <View
        style={[
          styles.thumbContainer,
          {
            left: thumbPosition,
          },
        ]}
      >
        <Image
          source={require("@/assets/star_blue.png")}
          style={styles.starImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  trackBackground: {
    height: 12,
    backgroundColor: "#333",
    borderRadius: 10,
    overflow: "hidden",
  },
  trackFill: {
    height: "100%",
    backgroundColor: "#5dade2",
  },
  thumbContainer: {
    position: "absolute",
    top: -23,
  },
  starImage: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
  },
});
