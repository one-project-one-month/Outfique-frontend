import BackButton from "@/components/BackButton";
import GlassButton from "@/components/GlassButton";
import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ImageBg = () => {
    const router = useRouter();
    const [bg, setBg] = React.useState(colors.moonlightGray);

    return (
        <ScreenWrapper>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginRight: 10,
                }}
            >
                <View >
                    <Header
                        title="Back"
                        leftIcon={<BackButton />}
                        style={{
                            justifyContent: 'flex-start',
                            gap: 8,
                            paddingLeft: 70,
                        }}
                    />
                </View>

                <GlassButton
                    size="small"
                    glassProps={{ glassEffectStyle: 'clear' }}
                    onPress={() =>
                        setBg(
                            bg === colors.moonlightGray
                                ? colors.midnightNavy
                                : colors.moonlightGray
                        )
                    }
                    buttonStyle={{ borderRadius: 10, marginLeft: 10 }}
                >
                    <Text style={{ color: colors.white }}>
                        Background {bg === colors.moonlightGray ? 'Black' : 'White'} Color
                    </Text>
                </GlassButton>
            </View>

            <View style={[styles.imageBg, { backgroundColor: bg, borderColor: bg }]}>
                <Image source={require('../../assets/bgrm.png')} style={{ width: '90%', height: '90%' }} resizeMode='contain' />
            </View>

            <View style={styles.buttonRow}>
                {/* Cancel Button */}
                <View
                    style={[styles.halfButtonContainer]}
                >
                    <GlassButton
                        size="small"
                        glassProps={{ glassEffectStyle: 'clear' }}
                        onPress={() => router.push('/(closet)/Camera')}
                        buttonStyle={styles.halfButton}
                    >
                        <Text style={styles.halfButtonText}>Try Again</Text>
                    </GlassButton>
                </View>

                {/* Done Button */}
                <TouchableOpacity
                    style={[styles.halfButtonContainer]}
                    activeOpacity={0.8}
                    onPress={() => router.push('/(closet)/Detail')}
                >
                    <View style={[styles.halfButton, { backgroundColor: '#FAFAFA' }]}>
                        <Text style={[styles.halfButtonText, { color: colors.dark[1] }]}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScreenWrapper >
    );
}
export default ImageBg;

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 20,
        color: colors.white,
    },
    imageBg: {
        flex: 1,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        marginBottom: 60,
        padding: 10
    },
    halfButtonContainer: {
        flex: 1,
    },
    halfButton: {
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    halfButtonText: {
        fontSize: 18,
        color: colors.white,
        textAlign: 'center',
    },

})
