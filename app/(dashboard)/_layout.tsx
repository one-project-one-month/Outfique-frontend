import BackButton from "@/components/BackButton";
import GlassButton from "@/components/GlassButton";
import { colors } from "@/constants/theme";
import { router, Stack } from "expo-router";
import { SlidersHorizontalIcon } from "phosphor-react-native";
import React from "react";

export default function DashboardLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen
        name="outfit-recommendations"
        options={{
          headerTitle: "Outfit Recommendations(n)",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "semibold",
          },
          headerLeft: () => <BackButton />,
          headerRight: () => (
            <GlassButton
              size="icon"
              buttonStyle={{ marginRight: 10 }}
              onPress={() =>
                router.push("/(outfit-experience)/generated-outfits")
              }
            >
              <SlidersHorizontalIcon size={24} color={colors.uranianBlue} />
            </GlassButton>
          ),
        }}
      />
    </Stack>
  );
}
