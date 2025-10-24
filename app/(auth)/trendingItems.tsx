import BackButton from "@/components/BackButton";
import GlassButton from "@/components/GlassButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors } from "@/constants/theme";
import { isIos } from "@/lib/utils";
import { Image } from "expo-image";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useFilterBrandsForFemale } from "@/store/useFilterBrands";
import { useFilterCategories } from "@/store/useFilterCategories";
import { useFilterColors } from "@/store/useFilterColors";
import { useFilterFashinStylesForFemale } from "@/store/useFilterFashinStyles";
import { useFilterPrices } from "@/store/useFilterPrice";
import { useFilterWeathers } from "@/store/useFilterWeathers";
import { Item, useItemStore } from "@/store/useItemStore";

const screenWidth = Dimensions.get("window").width;
const CARD_WIDTH = (screenWidth - 45) / 3;
const CARD_HEIGHT = CARD_WIDTH * 1.45;

const ItemCard = React.memo(({ item }: { item: Item }) => (
  <TouchableOpacity style={styles.cardContainer} activeOpacity={0.85}>
    <View style={styles.innerCard}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            typeof item.imageUrl === "string"
              ? { uri: item.imageUrl }
              : item.imageUrl
          }
          contentFit="contain"
        />
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.categoryText}>{item.category}</Text>
        <Text style={styles.nameText} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
));

const TrendingItems = () => {
  const router = useRouter();
  const isInitialLoad = useRef(true);

  const { selectedCategories } = useFilterCategories();
  const { minPrice, maxPrice, priceRangeLimit, setPrices } = useFilterPrices();
  const { selectedColors } = useFilterColors();
  const { selectedStyles } = useFilterFashinStylesForFemale();
  const { selectedConditions } = useFilterWeathers();
  const { selectedBrands } = useFilterBrandsForFemale();

  const filterItems = useItemStore((state) => state.filterItems);

  const handleFilterPress = () => {
    router.push("/searchFemale");
  };

  useFocusEffect(
    useCallback(() => {
      if (isInitialLoad.current) {
        setPrices(minPrice, priceRangeLimit);
        isInitialLoad.current = false;
      }
    }, [setPrices, minPrice, priceRangeLimit])
  );

  const filteredItems = useMemo(() => {
    return filterItems({
      selectedCategories,
      minPrice,
      maxPrice,
      selectedColors,
      selectedStyles,
      selectedConditions,
      selectedBrands,
    });
  }, [
    filterItems,
    selectedCategories,
    minPrice,
    maxPrice,
    selectedColors,
    selectedStyles,
    selectedConditions,
    selectedBrands,
  ]);

  const renderItem = ({ item }: { item: Item }) => <ItemCard item={item} />;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.leftSection}>
            {isIos && <BackButton />}
            <Text style={styles.preferenceText}>
              Trending Items ({filteredItems.length})
            </Text>
          </View>

          <GlassButton
            size="small"
            glassProps={{
              glassEffectStyle: "clear",
            }}
            buttonStyle={{ borderRadius: 10, marginLeft: 10 }}
            onPress={handleFilterPress}
          >
            <Image
              style={{ width: 24, height: 24, tintColor: colors.uranianBlue }}
              source={require("@/assets/filter.png")}
            />
          </GlassButton>
        </View>

        <FlatList
          data={filteredItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          style={{ marginBottom: 50 }}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
};

export default TrendingItems;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },
  preferenceText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
  },
  listContent: {
    paddingHorizontal: 5,
    paddingBottom: 50,
  },
  row: {
    marginBottom: 0,
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginBottom: 12,
    marginHorizontal: 6,
  },
  innerCard: {
    flex: 1,
    borderRadius: 10,
    gap: 5,
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  imageContainer: {
    width: "100%",
    height: CARD_WIDTH * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: "70%",
  },
  textBlock: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  categoryText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 4,
    textTransform: "capitalize",
  },
  nameText: {
    color: colors.uranianBlue,
    fontSize: 11,
    fontWeight: "500",
    opacity: 0.9,
  },
});
