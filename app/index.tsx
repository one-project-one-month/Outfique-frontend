import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, View } from "react-native";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(auth)/welcome");
    }, 2000);
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0A0E27",
      }}
    >
      <Image
        source={require("@/assets/splashScreen.png")}
        resizeMode="contain"
        style={{ width: "50%", height: "100%" }}
      />
    </View>
  );
};

export default Index;
