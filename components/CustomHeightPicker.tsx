import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/theme";

const convertHeight = (
  feet: string,
  inches: string,
  cm: string,
  fromUnit: "imperial" | "metric",
  toUnit: "imperial" | "metric"
) => {
  if (fromUnit === toUnit) {
    return fromUnit === "imperial"
      ? { feet, inches, cm }
      : { feet, inches, cm };
  }

  if (fromUnit === "imperial" && toUnit === "metric") {
    // Convert feet + inches to cm
    const totalInches = parseInt(feet, 10) * 12 + parseInt(inches, 10);
    const centimeters = Math.round(totalInches * 2.54);
    const clampedCm = Math.min(220, Math.max(100, centimeters)).toString();
    return { feet, inches, cm: clampedCm };
  } else if (fromUnit === "metric" && toUnit === "imperial") {
    // Convert cm to feet + inches
    const totalInches = Math.round(parseInt(cm, 10) / 2.54);
    const newFeet = Math.floor(totalInches / 12);
    const newInches = totalInches % 12;
    const clampedFeet = Math.min(7, Math.max(3, newFeet)).toString();
    const clampedInches = newInches.toString();
    return { feet: clampedFeet, inches: clampedInches, cm };
  }

  return { feet: "5", inches: "4", cm: "164" };
};

// Height ranges - Change these values to adjust min/max heights
const FEET = Array.from({ length: 4 }, (_, i) => (4 + i).toString());
const INCHES = Array.from({ length: 12 }, (_, i) => i.toString()); 
const CENTIMETERS = Array.from({ length: 91 }, (_, i) => (130 + i).toString()); 
const UNITS = ["cm", "ft in"];

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

    
    onValueChange(item);

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

const CustomHeightPicker = () => {
  const [state, setState] = useState({
    feet: "5",
    inches: "4",
    cm: "164",
    unit: "cm" as "ft in" | "cm",
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFeetChange = (newFeet: string) => {
    if (isTransitioning || newFeet === state.feet) return;
    setState((prev) => ({ ...prev, feet: newFeet }));
  };

  const handleInchesChange = (newInches: string) => {
    if (isTransitioning || newInches === state.inches) return;
    setState((prev) => ({ ...prev, inches: newInches }));
  };

  const handleCmChange = (newCm: string) => {
    if (isTransitioning || newCm === state.cm) return;
    setState((prev) => ({ ...prev, cm: newCm }));
  };

  const handleUnitChange = (newUnit: string) => {
    const newUnitCasted = newUnit as "ft in" | "cm";

    if (newUnitCasted === state.unit || isTransitioning) return;

    setIsTransitioning(true);

    // Calculate converted height
    const fromUnit = state.unit === "ft in" ? "imperial" : "metric";
    const toUnit = newUnitCasted === "ft in" ? "imperial" : "metric";

    const converted = convertHeight(
      state.feet,
      state.inches,
      state.cm,
      fromUnit,
      toUnit
    );

    setState({
      feet: converted.feet,
      inches: converted.inches,
      cm: converted.cm,
      unit: newUnitCasted,
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerRow}>
        <View style={styles.globalSelectionIndicator} />

        {state.unit === "ft in" ? (
          <>
            <WheelPicker
              data={FEET}
              selectedValue={state.feet}
              onValueChange={handleFeetChange}
              style={styles.heightColumn}
              isLocked={isTransitioning}
            />
            <WheelPicker
              data={INCHES}
              selectedValue={state.inches}
              onValueChange={handleInchesChange}
              style={styles.heightColumn}
              isLocked={isTransitioning}
            />
          </>
        ) : (
          <WheelPicker
            data={CENTIMETERS}
            selectedValue={state.cm}
            onValueChange={handleCmChange}
            style={styles.cmColumn}
            isLocked={isTransitioning}
          />
        )}

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

export default CustomHeightPicker;

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
  heightColumn: { flex: 1, alignItems: "center" },
  cmColumn: { flex: 2, alignItems: "center" },
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
