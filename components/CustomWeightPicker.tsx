import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/theme";

// Utility function for quick conversion
const convertWeight = (
  weight: string,
  fromUnit: "lb" | "kg",
  toUnit: "lb" | "kg"
) => {
  const value = parseInt(weight, 10);
  if (isNaN(value)) return toUnit === "lb" ? "170" : "70";

  if (fromUnit === toUnit) return weight;

  if (fromUnit === "kg" && toUnit === "lb") {
    const converted = Math.round(value * 2.20462);
    return Math.min(300, Math.max(80, converted)).toString();
  } else if (fromUnit === "lb" && toUnit === "kg") {
    const converted = Math.round(value / 2.20462);
    return Math.min(140, Math.max(35, converted)).toString();
  }

  return toUnit === "lb" ? "170" : "70";
};

// Generate weight values outside component to prevent recreation
const POUND_WEIGHTS = Array.from({ length: 221 }, (_, i) =>
  (80 + i).toString()
);
const KILO_WEIGHTS = Array.from({ length: 106 }, (_, i) => (35 + i).toString());
const UNITS = ["lb", "kg"];

// Custom Wheel Picker Component
const WheelPicker = ({
  data,
  selectedValue,
  onValueChange,
  style,
  isLocked = false,
}: {
  data: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  style?: any;
  isLocked?: boolean;
}) => {
  const ITEM_HEIGHT = 40;
  const VISIBLE_ITEMS = 5;
  const PAD = ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2);
  const scrollViewRef = useRef<ScrollView>(null);
  const lastSelectedRef = useRef(selectedValue);

  useEffect(() => {
    // Only scroll if the selectedValue actually changed
    if (lastSelectedRef.current === selectedValue) return;
    lastSelectedRef.current = selectedValue;

    const idx = data.indexOf(selectedValue);
    if (idx >= 0 && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: idx * ITEM_HEIGHT,
        animated: false,
      });
    }
  }, [selectedValue, data]);

  const indexFromY = (y: number) =>
    Math.max(0, Math.min(Math.round(y / ITEM_HEIGHT), data.length - 1));

  const handleMomentumEnd = (e: any) => {
    if (isLocked) return;

    const y = e.nativeEvent.contentOffset.y;
    const idx = indexFromY(y);

    scrollViewRef.current?.scrollTo({ y: idx * ITEM_HEIGHT, animated: true });

    const val = data[idx];
    if (val && val !== selectedValue) {
      onValueChange(val);
    }
  };

  const handlePress = (item: string, index: number) => {
    if (isLocked || item === selectedValue) return;

    // Update value first
    onValueChange(item);

    // Then scroll to position
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({
        y: index * ITEM_HEIGHT,
        animated: true,
      });
    }, 0);
  };

  return (
    <View style={[styles.wheelContainer, style]}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumEnd}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        bounces
        scrollEnabled={!isLocked}
        contentContainerStyle={{ paddingTop: PAD, paddingBottom: PAD }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={`${item}-${index}`}
            style={[styles.wheelItem, { height: ITEM_HEIGHT }]}
            onPress={() => handlePress(item, index)}
            disabled={isLocked}
          >
            <Text
              style={[
                styles.wheelItemText,
                item === selectedValue && styles.selectedItemText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// ====================================================================

const CustomWeightPicker = () => {
  const [state, setState] = useState({
    weight: "170",
    unit: "lb" as "lb" | "kg",
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const weightUpdateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const currentWeights = state.unit === "lb" ? POUND_WEIGHTS : KILO_WEIGHTS;

  const handleWeightChange = (newWeight: string) => {
    if (isTransitioning || newWeight === state.weight) return;

    // Clear any pending update
    if (weightUpdateTimeoutRef.current) {
      clearTimeout(weightUpdateTimeoutRef.current);
      weightUpdateTimeoutRef.current = null;
    }

    // Update state immediately
    setState((prev) => ({ ...prev, weight: newWeight }));
  };

  const handleUnitChange = (newUnit: string) => {
    const newUnitCasted = newUnit as "lb" | "kg";

    if (newUnitCasted === state.unit || isTransitioning) return;

    
    if (weightUpdateTimeoutRef.current) {
      clearTimeout(weightUpdateTimeoutRef.current);
      weightUpdateTimeoutRef.current = null;
    }

    // Lock both pickers during transition
    setIsTransitioning(true);

    // Calculate converted weight
    const convertedWeight = convertWeight(
      state.weight,
      state.unit,
      newUnitCasted
    );

    // Ensure the converted weight exists in the target array
    const targetWeights = newUnitCasted === "lb" ? POUND_WEIGHTS : KILO_WEIGHTS;
    const validWeight = targetWeights.includes(convertedWeight)
      ? convertedWeight
      : newUnitCasted === "lb"
      ? "170"
      : "70";

    // Update both values in a single state update
    setState({
      weight: validWeight,
      unit: newUnitCasted,
    });

    // Unlock after transition completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerRow}>
        <View style={styles.globalSelectionIndicator} />

        <WheelPicker
          data={currentWeights}
          selectedValue={state.weight}
          onValueChange={handleWeightChange}
          style={styles.weightColumn}
          isLocked={isTransitioning}
        />
        <WheelPicker
          data={UNITS}
          selectedValue={state.unit}
          onValueChange={handleUnitChange}
          style={styles.unitColumn}
          isLocked={isTransitioning}
        />
      </View>
    </View>
  );
};

export default CustomWeightPicker;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  pickerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 200,
    position: "relative",
  },
  globalSelectionIndicator: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    zIndex: 1,
    marginTop: -20,
  },
  weightColumn: { flex: 2, alignItems: "center" },
  unitColumn: { flex: 1, alignItems: "center" },
  wheelContainer: { height: 200, position: "relative", width: "100%" },
  wheelItem: { justifyContent: "center", alignItems: "center", height: 40 },
  wheelItemText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 16,
    fontWeight: "400",
  },
  selectedItemText: {
    color: colors.uranianBlue,
    fontSize: 18,
    fontWeight: "600",
  },
});
