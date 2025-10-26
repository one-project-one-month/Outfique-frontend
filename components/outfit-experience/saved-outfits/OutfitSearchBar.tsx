import GlassButton from "@/components/GlassButton";
import GlassInput from "@/components/GlassInput";
import { colors } from "@/constants/theme";
import { router, useLocalSearchParams } from "expo-router";
import { SlidersHorizontalIcon } from "phosphor-react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function OutfitSearchBar() {
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query || "");

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        borderWidth: 0,
      }}
    >
      <GlassInput
        placeholder="Search"
        value={search}
        onChangeText={(search) => {
          setSearch(search);
          router.setParams({ query: search });
        }}
        size="small"
        glassProps={{ glassEffectStyle: "clear" }}
        isSearch={true}
        placeholderTextColor={colors.uranianBlue}
      />
      <GlassButton
        size="icon"
        onPress={() => router.push("/(outfit-experience)/generated-outfits")}
      >
        <SlidersHorizontalIcon size={24} color={colors.uranianBlue} />
      </GlassButton>
    </View>
  );
}

const styles = StyleSheet.create({});
