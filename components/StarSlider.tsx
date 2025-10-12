import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");
const SLIDER_WIDTH = width * 0.8;
const THUMB_SIZE = 40;

interface StarSliderProps {
  initialPosition?: number; // 0 to 1 (0 = start, 1 = end)
  sliderWidth?: number;
}

export default function StarSlider({
  initialPosition = 0,
  sliderWidth = SLIDER_WIDTH,
}: StarSliderProps) {
  const CURRENT_SLIDER_WIDTH = sliderWidth;
  const thumbPosition = initialPosition * (CURRENT_SLIDER_WIDTH - THUMB_SIZE);

  return (
    <View style={styles.container}>
      {/* Track background */}
      <View style={[styles.trackBackground, { width: CURRENT_SLIDER_WIDTH }]}>
        <View
          style={[
            styles.trackFill,
            {
              width: thumbPosition,
            },
          ]}
        />
      </View>

      {/* Star thumb - Fixed position */}
      <View
        style={[
          styles.thumbContainer,
          {
            left: thumbPosition,
          },
        ]}
      >
        <Svg height={THUMB_SIZE} width={THUMB_SIZE} viewBox="0 0 100 100">
          <Path
            d="M50 5 L60 35 L95 50 L60 65 L50 95 L40 65 L5 50 L40 35 Z"
            fill="#bde0fe"
            stroke="#000"
            strokeWidth={3}
          />
        </Svg>
        <View style={styles.glow} />
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
    top: -15,
  },
  glow: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#5dade2",
    borderRadius: 30,
    opacity: 0.3,
    top: -10,
    left: -10,
    shadowColor: "#5dade2",
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
});
