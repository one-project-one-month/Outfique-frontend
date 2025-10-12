import { Stack } from "expo-router";
import React from "react";

const OnboardingLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="page1" />
      <Stack.Screen name="page2" />
      <Stack.Screen name="page3" />
    </Stack>
  );
};

export default OnboardingLayout;
