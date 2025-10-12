import { Button } from "@/components/Button";
import GlassButton from "@/components/GlassButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const onboardingData = [
  {
    id: 1,
    title: "Welcome to Outfique",
    subtitle: "Your Personal AI Stylist",
    description: "Discover endless outfit possibilities tailored just for you",
    icon: "✨",
  },
  {
    id: 2,
    title: "Smart Recommendations",
    subtitle: "Perfect Outfits Every Time",
    description:
      "Get personalized suggestions based on weather, occasion, and your unique style",
    icon: "🎯",
  },
  {
    id: 3,
    title: "Build Your Wardrobe",
    subtitle: "Organize & Mix-Match",
    description: "Upload your clothes and create unlimited outfit combinations",
    icon: "👗",
  },
];

const Onboarding = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);


  const renderOnboardingItem = ({
    item,
    index,
  }: {
    item: (typeof onboardingData)[0];
    index: number;
  }) => (
    <View style={[styles.slide, { width }]}>
      <Animated.View
        entering={FadeIn.duration(800).delay(200)}
        style={styles.iconContainer}
      >
        <Text style={styles.icon}>{item.icon}</Text>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.duration(600).delay(400)}
        style={styles.textContainer}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </Animated.View>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      completeOnboarding();
    }
  };

  const completeOnboarding = () => {
    // For now, just navigate to welcome screen
    // You can add AsyncStorage persistence later
    router.replace("/(auth)/welcome");
  };

  const skipOnboarding = () => {
    completeOnboarding();
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Skip Button */}
        <Animated.View
          entering={FadeIn.duration(500)}
          style={styles.skipContainer}
        >
          <GlassButton
            size="small"
            onPress={skipOnboarding}
            glassProps={{ glassEffectStyle: "clear" }}
            buttonStyle={styles.skipButton}
            textStyle={styles.skipText}
          >
            Skip
          </GlassButton>
        </Animated.View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          <FlatList
            data={onboardingData}
            renderItem={renderOnboardingItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / width
              );
              setCurrentIndex(index);
            }}
            scrollEventThrottle={16}
          />

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            {onboardingData.map((_, index) => (
              <Animated.View
                key={index}
                entering={FadeIn.duration(500).delay(index * 100)}
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      index === currentIndex
                        ? colors.uranianBlue
                        : "rgba(255,255,255,0.3)",
                    width: index === currentIndex ? 24 : 8,
                  },
                ]}
              />
            ))}
          </View>
        </View>

        {/* Bottom Actions */}
        <Animated.View
          entering={FadeInDown.duration(600).delay(800)}
          style={styles.bottomContainer}
        >
          <Button
            size="medium"
            onPress={handleNext}
            buttonStyle={styles.nextButton}
          >
            {currentIndex === onboardingData.length - 1
              ? "Get Started"
              : "Continue"}
          </Button>

          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>
              {currentIndex + 1} of {onboardingData.length}
            </Text>
          </View>
        </Animated.View>
      </View>
    </ScreenWrapper>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipContainer: {
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 10,
  },
  skipButton: {
    paddingHorizontal: 20,
    height: 36,
  },
  skipText: {
    color: colors.uranianBlue,
    fontSize: 14,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(160, 221, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  icon: {
    fontSize: 60,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.uranianBlue,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: colors.moonlightGray,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 280,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 16,
  },
  nextButton: {
    width: "100%",
  },
  progressContainer: {
    alignItems: "center",
  },
  progressText: {
    color: colors.moonlightGray,
    fontSize: 14,
  },
});
