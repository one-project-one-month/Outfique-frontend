import { colors } from "@/constants/theme";
import { Stack, usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: "Home", path: "/dashboard", icon: "home-outline" },
    { name: "Saved", path: "/saved-outfits", icon: "heart-outline" },
    { name: "Closet", path: "/Home", icon: "hanger" },
  ];

  const showTabBarPaths = ["/dashboard", "/Home", "/saved-outfits"];
  const showTabBar = showTabBarPaths.some((p) => pathname.includes(p));

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />

      {showTabBar && (
        <View style={styles.tabBarContainer}>
          {tabs.map((tab) => {
            const isFocused = pathname.includes(tab.path);
            return (
              <TouchableOpacity
                key={tab.path}
                activeOpacity={0.8}
                style={[
                  styles.tabButton,
                  isFocused && styles.activeTabButton,
                ]}
                onPress={() => router.replace(tab.path as any)}
              >
                <Icon
                  name={tab.icon}
                  size={22}
                  color={isFocused ? colors.uranianBlue : colors.dark[1]}
                />
                <Text
                  style={{
                    color: isFocused ? colors.uranianBlue : colors.dark[1],
                    fontSize: 12,
                    marginTop: 4,
                  }}
                >
                  {tab.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    height: 70,
    backgroundColor: colors.uranianBlue,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between", // distribute tabs evenly
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 999,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 4,
    paddingVertical: 8,
  },
  activeTabButton: {
    backgroundColor: colors.midnightNavy,
  },

});
