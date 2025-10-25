import BackButton from "@/components/BackButton";
import FavButton from "@/components/outfit-experience/FavButton";
import HomeButton from "@/components/outfit-experience/HomeButton";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function GeneratedOutfitsLayout() {
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
      <Stack.Screen
        name="generated-outfits"
        options={{
          headerTitle: "Outfit of the Day",
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
          headerRight: () => (
            <View
              style={{
                marginRight: 10,
              }}
            >
              <HomeButton />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="saved-outfits"
        options={{
          headerTitle: "Saved Outfits(n)",
          headerTitleAlign: "left",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="outfit-details/[id]"
        options={{
          headerTitle: "Outfit Details",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "semibold",
          },
          headerLeft: () => <BackButton />,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginRight: 10,
              }}
            >
              <View>
                <FavButton />
              </View>
              <HomeButton />
            </View>
          ),
        }}
      />
    </Stack>
  );
}
