import { Stack } from "expo-router";

export default function UserLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen name="details" options={{ title: "User Details" }} />
      <Stack.Screen name="setting" options={{ title: "Settings" }} />
      <Stack.Screen name="preferences" options={{ title: "Style Preferences" }} />
    </Stack>
  );
}
