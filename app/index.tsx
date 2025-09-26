import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center items-center p-6">
        <View className="items-center">
          <Text variant="h1" className="mb-2 text-8xl text-center">
            Welcome to Outfique
          </Text>
          <Text variant="lead" className="text-center mb-8 text-2xl">
            Your daily outfit inspiration.
          </Text>
        </View>
        <Button className="bg-black px-5 py-3 rounded-lg" size="lg" onPress={() => alert("Let's go!")}>
          <Text className="text-white text-xl font-semibold">Get Started</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
