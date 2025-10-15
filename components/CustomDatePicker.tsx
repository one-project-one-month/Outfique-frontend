import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/theme";

const WheelPicker = ({
  data,
  selectedValue,
  onValueChange,
  style,
}: {
  data: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  style?: any;
}) => {
  const ITEM_HEIGHT = 40;
  const VISIBLE_ITEMS = 5;
  const PAD = ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const lastSelectedRef = React.useRef(selectedValue);

  React.useEffect(() => {
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
    const y = e.nativeEvent.contentOffset.y;
    const idx = indexFromY(y);

    scrollViewRef.current?.scrollTo({ y: idx * ITEM_HEIGHT, animated: true });
    const val = data[idx];
    if (val && val !== selectedValue) onValueChange(val);
  };

  return (
    <View style={[styles.wheelContainer, style]}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumEnd}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        bounces={true}
        contentContainerStyle={{ paddingTop: PAD, paddingBottom: PAD }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={`${item}-${index}`}
            style={[
              styles.wheelItem,
              { height: ITEM_HEIGHT },
              item === selectedValue && styles.selectedItem,
            ]}
            onPress={() => {
              if (item === selectedValue) return;

              // Update value first
              onValueChange(item);

              // Then scroll to position
              setTimeout(() => {
                scrollViewRef.current?.scrollTo({
                  y: index * ITEM_HEIGHT,
                  animated: true,
                });
              }, 0);
            }}
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

// All possible months
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Years from 1985 to 2019
const YEARS = Array.from({ length: 35 }, (_, i) => (1985 + i).toString());

const CustomDatePicker = () => {
  const [month, setMonth] = useState("January");
  const [day, setDay] = useState("1");
  const [year, setYear] = useState("2000");

 
  const getNumberOfDays = () => {
    const monthIndex = MONTHS.indexOf(month);
    const yearNumber = parseInt(year);

    const lastDay = new Date(yearNumber, monthIndex + 1, 0).getDate();


    const daysArray = [];
    for (let i = 1; i <= lastDay; i++) {
      daysArray.push(i.toString());
    }
    return daysArray;
  };

  const days = getNumberOfDays();


  React.useEffect(() => {
    const currentDay = parseInt(day);
    const maxDay = days.length;

    if (currentDay > maxDay) {
      setDay(maxDay.toString()); 
    }
  }, [days, day]);

  return (
    <View style={styles.container}>
      <View style={styles.pickerRow}>
        {/* Global selection indicator spanning all three pickers */}
        <View style={styles.AllSelectionIndicator} />

        <WheelPicker
          data={MONTHS}
          selectedValue={month}
          onValueChange={setMonth}
          style={styles.column}
        />
        <WheelPicker
          data={days}
          selectedValue={day}
          onValueChange={setDay}
          style={styles.column}
        />
        <WheelPicker
          data={YEARS}
          selectedValue={year}
          onValueChange={setYear}
          style={styles.column}
        />
      </View>
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "95%",
    height: 200,
    alignItems: "center",
    position: "relative",
  },
  AllSelectionIndicator: {
    position: "absolute",
    top: "50%",
    left: 10,
    right: 10,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    zIndex: 1,
    marginTop: -20,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  wheelContainer: {
    height: 200,
    position: "relative",
    width: "100%",
  },
  selectionIndicator: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    zIndex: 1,
    marginTop: -20,
  },
  wheelItem: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  selectedItem: {
    backgroundColor: "transparent",
  },
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
  button: {
    backgroundColor: "#E6ECF7",
    marginTop: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: {
    color: "#000",
    fontWeight: "600",
  },
});
