import BackButton from "@/components/BackButton";
import GlassButton from "@/components/GlassButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ImageBg = () => {
    const router = useRouter();
    const [bg, setBg] = React.useState('white');

    return (
        <ScreenWrapper>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, justifyContent: 'space-between' }}>
                <Pressable
                    onPress={() => router.push('/(closet)/Home')}
                    style={styles.backButton}>
                    <BackButton />
                    <Text style={styles.backText}>Back</Text>
                </Pressable>
                <GlassButton
                    size="small"
                    glassProps={{
                        glassEffectStyle: 'clear'
                    }}
                    onPress={() => setBg(bg === 'white' ? 'black' : 'white')}
                    buttonStyle={{ borderRadius: 10, marginLeft: 10 }}>
                    <Text style={{ color: 'white' }}>Background {bg === 'white' ? 'black' : 'white'} Color</Text>
                </GlassButton>
            </View>
            <View style={[styles.imageBg, { backgroundColor: bg, borderColor: bg }]}>
                <Image source={require('../../assets/bgrm.png')} style={{ width: '90%', height: '90%', resizeMode: 'contain' }} />
            </View>
            <View style={styles.buttonRow}>
                <GlassButton
                    size="medium"
                    glassProps={{ glassEffectStyle: 'clear' }}
                    buttonStyle={styles.halfButton}
                    onPress={() => router.push('/(closet)/Camera')}
                >
                    <Text style={styles.halfButtonText}>Try Again</Text>
                </GlassButton>

                <TouchableOpacity onPress={() => router.push('/(closet)/Detail')} style={[styles.halfButton, { backgroundColor: '#FAFAFA' }]}>
                    <Text style={[styles.halfButtonText, { color: 'black' }]}>Next</Text>
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
        color: 'white',
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
        width: '100%',
        marginBottom: 60,
    },

    halfButton: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 50,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    halfButtonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },

})
