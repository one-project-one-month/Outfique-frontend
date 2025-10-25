import { colors } from "@/constants/theme";
import * as React from "react";
import { useWindowDimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import OutfitRecommendationCard from "./OutfitRecommendationCard";

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

function BannerCarousel() {
  const progress = useSharedValue<number>(0);
  const { width } = useWindowDimensions();
  const carouselWidth = width - 40;
  const carouselHeight = carouselWidth * 0.6; // Maintain aspect ratio
  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={{ gap: 12 }}>
      <Carousel
        ref={ref}
        loop={false}
        width={carouselWidth}
        height={carouselHeight}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={2000}
        data={defaultDataWith6Colors}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        style={{ width: "100%", maxWidth: "100%", marginHorizontal: "auto" }}
        onConfigurePanGesture={(g) => {
          "worklet";
          g.enabled(false);
        }}
        onSnapToItem={(index: number) => console.log("current index:", index)}
        renderItem={({ item }) => <OutfitRecommendationCard />}
      />
      <Pagination.Basic
        progress={progress}
        data={defaultDataWith6Colors}
        dotStyle={{ backgroundColor: "#262626", borderRadius: 100 }}
        activeDotStyle={{ backgroundColor: colors.uranianBlue }}
        containerStyle={{ gap: 5 }}
        onPress={onPressPagination}
      />
    </View>
  );
}

export default BannerCarousel;
