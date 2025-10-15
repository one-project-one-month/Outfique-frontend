import BackButton from "@/components/BackButton";
import { Button } from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors } from "@/constants/theme";
import { isIos } from "@/lib/utils";

import { Slider } from "@miblanchard/react-native-slider";

import {
  useFilterBrandsForMale,
  useFilterCategories,
  useFilterColors,
  useFilterFashinStylesForMale,
  useFilterPrices,
  useFilterWeathers,
  type BrandNameForMale,
  type CategoryName,
  type ColorName,
  type StyleNameForMale,
  type WeatherName,
} from "@/store";
import { CaretCircleDownIcon, StarFourIcon } from "phosphor-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MIN_POSSIBLE_PRICE = 10000;
const SLIDER_STEP = 10000;

const MMK_TO_BAHT = 0.02;
const SearchMale = () => {
  const { categories, selectedCategories, toggleCategory, resetCategories } =
    useFilterCategories();

  const { minPrice, maxPrice, priceRangeLimit, setPrices, resetPrices } =
    useFilterPrices();

  const {
    colors: colorOptions,
    selectedColors,
    toggleColor,
    resetColors,
  } = useFilterColors();

  const {
    styles: styleOptions,
    selectedStyles,
    toggleStyle,
    resetStyles,
  } = useFilterFashinStylesForMale();

  const { conditions, selectedConditions, toggleCondition, resetConditions } =
    useFilterWeathers();

  const { brands, selectedBrands, toggleBrand, resetBrands } =
    useFilterBrandsForMale();

  const [currency, setCurrency] = useState<"MMK" | "BAHT">("MMK");

  const displayMinPrice =
    currency === "MMK" ? minPrice : Math.round(minPrice * MMK_TO_BAHT);
  const displayMaxPrice =
    currency === "MMK" ? maxPrice : Math.round(maxPrice * MMK_TO_BAHT);
  const displayMinPossible =
    currency === "MMK"
      ? MIN_POSSIBLE_PRICE
      : Math.round(MIN_POSSIBLE_PRICE * MMK_TO_BAHT);
  const displayMaxLimit =
    currency === "MMK"
      ? priceRangeLimit
      : Math.round(priceRangeLimit * MMK_TO_BAHT);

  const onRangeChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      if (currency === "MMK") {
        setPrices(values[0], values[1]);
      } else {
        setPrices(
          Math.round(values[0] / MMK_TO_BAHT),
          Math.round(values[1] / MMK_TO_BAHT)
        );
      }
    }
  };

  const handleCurrencyToggle = () => {
    setCurrency(currency === "MMK" ? "BAHT" : "MMK");
  };
  const getColorHex = (colorName: string): string => {
    switch (colorName) {
      case "Black":
        return "#000000";
      case "White":
        return "#FAFAFA";
      case "Gray":
        return "#808080";
      case "Beige / Nude":
        return "#D2B48C";
      case "Green":
        return "#2E8B57";
      case "Yellow":
        return "#FFD93D";
      case "Pink":
        return "#FF69B4";
      case "Purple":
        return "#6A0DAD";
      case "Brown":
        return "#8B4513";
      case "Blue":
        return "#1D4E89";
      case "Orange":
        return "#FF7F11";
      case "Red":
        return "#E63946";
      default:
        return "transparent";
    }
  };
  const handleReset = () => {
    resetCategories();
    resetPrices();
    resetColors();
    resetStyles();
    resetConditions();
    resetBrands();
  };

  const handleApplyAll = () => {
    const appliedMin =
      currency === "MMK" ? minPrice : Math.round(minPrice * MMK_TO_BAHT);
    const appliedMax =
      currency === "MMK" ? maxPrice : Math.round(maxPrice * MMK_TO_BAHT);
    console.log("Categories:", selectedCategories);
    console.log("Price Range:", [appliedMin, appliedMax]);
    console.log("Colors:", selectedColors);
    console.log("Fashion Styles:", selectedStyles);
    console.log("Weather Conditions:", selectedConditions);
    console.log("Brands:", selectedBrands);
  };

  return (
    <ScreenWrapper>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.leftSection}>
          {isIos && <BackButton />}
          <Text style={styles.preferenceText}>Preferences</Text>
        </View>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.container}>
          {/* 1. CATEGORIES SECTION */}
          <View>
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.sectionConatiner}>
              {categories.map((item: CategoryName) => {
                const isSelected = selectedCategories.includes(item);
                return (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.button,
                      isSelected
                        ? styles.selectedButton
                        : styles.unselectedButton,
                    ]}
                    onPress={() => toggleCategory(item)}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        isSelected
                          ? styles.selectedButtonText
                          : styles.unselectedButtonText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 2. PRICE RANGE SECTION */}
          <View style={styles.priceSection}>
            <View style={styles.priceTitleContainer}>
              <Text style={styles.sectionTitle}>Price Range ({currency})</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderWidth: 0.1,
                  borderRadius: 10,
                  borderColor: "rgba(255, 255, 255, 0.3)",
                }}
                onPress={handleCurrencyToggle}
              >
                <CaretCircleDownIcon
                  size={24}
                  color={colors.uranianBlue}
                  weight="bold"
                />
              </TouchableOpacity>
            </View>
            {/* Slider Component */}
            <Slider
              value={[displayMinPrice, displayMaxPrice]}
              onValueChange={onRangeChange}
              onSlidingComplete={onRangeChange}
              minimumValue={displayMinPossible}
              maximumValue={displayMaxLimit}
              step={
                currency === "MMK"
                  ? SLIDER_STEP
                  : Math.round(SLIDER_STEP * MMK_TO_BAHT)
              }
              containerStyle={styles.sliderContainer}
              minimumTrackTintColor={colors.uranianBlue}
              maximumTrackTintColor={colors.white + "30"}
              trackStyle={styles.sliderTrack}
              renderThumbComponent={() => (
                <View style={{ position: "relative" }}>
                  <StarFourIcon
                    size={24}
                    color="black"
                    weight="bold"
                    style={{ position: "absolute", left: 0, top: 0 }}
                  />
                  <StarFourIcon
                    size={24}
                    color={colors.uranianBlue}
                    weight="fill"
                  />
                </View>
              )}
              renderAboveThumbComponent={(index: number, value: number) => (
                <View style={styles.thumbLabelContainer}>
                  <Text style={styles.thumbLabelText}>
                    {index === 1 && value === displayMaxLimit
                      ? `> ${value}`
                      : value}
                  </Text>
                </View>
              )}
            />
          </View>

          {/* 3. COLORS SECTION */}
          <View>
            <Text style={styles.sectionTitle}>Colors</Text>
            <View style={styles.sectionConatiner}>
              {colorOptions
                .filter((item) => item !== "All")
                .map((item: ColorName) => {
                  const isSelected = selectedColors.includes(item);
                  const colorHex = getColorHex(item);

                  const buttonStyle = isSelected
                    ? styles.selectedColorButton
                    : styles.unselectedColorButton;
                  const textStyle = isSelected
                    ? styles.selectedButtonText
                    : styles.unselectedButtonText;

                  return (
                    <TouchableOpacity
                      key={item}
                      style={[styles.colorButton, buttonStyle]}
                      onPress={() => toggleColor(item)}
                    >
                      {/* COLOR SWATCH */}
                      <View
                        style={[
                          styles.colorSwatch,
                          { backgroundColor: colorHex },
                        ]}
                      />

                      <Text style={[styles.colorButtonText, textStyle]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>

          {/* 4. FASHION STYLE SECTION */}
          <View>
            <Text style={styles.sectionTitle}>Fashion Style</Text>
            <View style={styles.sectionConatiner}>
              {styleOptions.map((item: StyleNameForMale) => {
                const isSelected = selectedStyles.includes(item);
                return (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.button,
                      isSelected
                        ? styles.selectedButton
                        : styles.unselectedButton,
                    ]}
                    onPress={() => toggleStyle(item)}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        isSelected
                          ? styles.selectedButtonText
                          : styles.unselectedButtonText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 5. WEATHER CONDITIONS SECTION */}
          <View>
            <Text style={styles.sectionTitle}>Weather Conditions</Text>
            <View style={styles.sectionConatiner}>
              {conditions.map((item: WeatherName) => {
                const isSelected = selectedConditions.includes(item);
                return (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.button,
                      isSelected
                        ? styles.selectedButton
                        : styles.unselectedButton,
                    ]}
                    onPress={() => toggleCondition(item)}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        isSelected
                          ? styles.selectedButtonText
                          : styles.unselectedButtonText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 6. BRANDS SECTION */}
          <View>
            <Text style={styles.sectionTitle}>Brands</Text>
            <View style={styles.sectionConatiner}>
              {brands.map((item: BrandNameForMale) => {
                const isSelected = selectedBrands.includes(item);
                return (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.button,
                      isSelected
                        ? styles.selectedButton
                        : styles.unselectedButton,
                    ]}
                    onPress={() => toggleBrand(item)}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        isSelected
                          ? styles.selectedButtonText
                          : styles.unselectedButtonText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Footer */}
      <View style={styles.footer}>
        <Button fullWidth size="medium" onPress={handleApplyAll}>
          Apply All
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default SearchMale;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 20,
    gap: 20,
  },
  scrollContent: {
    paddingBottom: 110,
  },

  // Styles for Header Row

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  // Styles for Preference Text and Reset Text
  preferenceText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
  },
  resetText: {
    color: colors.uranianBlue,
    textDecorationLine: "underline",
    textDecorationColor: colors.uranianBlue,
  },

  // Styles for Section Titles
  sectionTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // Styles for Section Container and Buttons
  sectionConatiner: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 14,
  },
  unselectedButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  unselectedButtonText: {
    color: colors.white,
  },
  selectedButton: {
    borderColor: colors.uranianBlue,
    backgroundColor: colors.uranianBlue,
  },
  selectedButtonText: {
    color: colors.midnightNavy,
    fontWeight: "600",
  },

  // Styles for Colors Section
  colorButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  selectedColorButton: {
    borderColor: colors.uranianBlue,
    backgroundColor: colors.uranianBlue,
  },
  unselectedColorButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  colorButtonText: {
    fontWeight: "500",
    fontSize: 14,
  },
  colorSwatch: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },

  // Styles for footer

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 35,
    zIndex: 10,
  },

  // Styles for the Price Section and Slider

  priceTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 8,
  },
  priceSection: {
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  sliderContainer: {
    marginHorizontal: 5,
    height: 40,
  },
  sliderTrack: {
    height: 10,
    borderRadius: 5,
  },
  customThumbContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  thumbLabelContainer: {
    position: "absolute",
    top: 40,
    alignSelf: "center",
  },
  thumbLabelText: {
    color: colors.uranianBlue,
    fontSize: 12,
    fontWeight: "bold",
  },
});
