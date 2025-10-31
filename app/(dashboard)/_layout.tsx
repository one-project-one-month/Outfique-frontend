import BackButton from "@/components/BackButton";
import FilterButton from "@/components/outfit-experience/FilterButton";
import { Stack } from "expo-router";
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
          headerTransparent: true,
          headerLeft: () => <BackButton />,
          headerRight: () => <FilterButton />,
        }}
      />
    </Stack>
  );
}
