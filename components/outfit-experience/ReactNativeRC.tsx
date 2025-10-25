import { colors } from "@/constants/theme";
import { ArrowLeftIcon, ArrowRightIcon } from "phosphor-react-native";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import GlassButton from "../GlassButton";
import OutfitGeneratedCard from "./cards/OutfitGeneratedCard";

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

function ReactNativeRC() {
  const scrollOffsetValue = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onPressPrev = () => {
    ref.current?.prev();
  };

  const onPressNext = () => {
    ref.current?.next();
  };

  const handleSnapToItem = (index: number) => {
    setCurrentIndex(index);
    console.log("current index:", index);
  };

  return (
    <View style={styles.container}>
      {/* Custom Pagination Controls */}
      <View style={styles.paginationContainer}>
        <GlassButton
          size={"icon"}
          onPress={onPressPrev}
          buttonStyle={{
            borderRadius: 20,
            opacity: currentIndex === 0 ? 0.5 : 1,
            backgroundColor:
              currentIndex === 0 ? "transparent" : colors.uranianBlue,
          }}
          disabled={currentIndex === 0}
        >
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </GlassButton>

        <View style={styles.indexContainer}>
          <Text style={styles.indexText}>Suit {currentIndex + 1}</Text>
        </View>

        <GlassButton
          size={"icon"}
          onPress={onPressNext}
          buttonStyle={{
            borderRadius: 20,
            opacity:
              currentIndex === defaultDataWith6Colors.length - 1 ? 0.5 : 1,
            backgroundColor:
              currentIndex === defaultDataWith6Colors.length - 1
                ? "transparent"
                : colors.uranianBlue,
          }}
          disabled={currentIndex === defaultDataWith6Colors.length - 1}
        >
          <ArrowRightIcon size={24} color="#FFFFFF" />
        </GlassButton>
      </View>
      {/* Options  */}
      <Carousel
        ref={ref}
        loop={false}
        width={400}
        height={800}
        snapEnabled={true}
        pagingEnabled={true}
        data={defaultDataWith6Colors}
        defaultScrollOffsetValue={scrollOffsetValue}
        style={styles.carousel}
        onConfigurePanGesture={(g: { enabled: (arg0: boolean) => any }) => {
          "worklet";
          g.enabled(false);
        }}
        onSnapToItem={handleSnapToItem}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        renderItem={({ item }) => <OutfitGeneratedCard />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  carousel: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  indexContainer: {
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: 80,
    alignItems: "center",
  },
  indexText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
});

export default ReactNativeRC;
