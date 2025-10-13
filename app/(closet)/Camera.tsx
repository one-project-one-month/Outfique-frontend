import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Camera = () => {
    const router = useRouter();
    return (
        <ScreenWrapper>
            <Pressable onPress={() => router.push('/(closet)/Home')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <BackButton />
                <Text style={{ fontSize: 20, color: 'white' }}>Back</Text>
            </Pressable>
            <View style={styles.container}>
                <Text style={{ color: 'white', fontSize: 27, marginTop: 20 }}>
                    Capture your outfit
                </Text>
            </View>
        </ScreenWrapper>
    );
};

export default Camera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 15,
        gap: 10
    },

})
