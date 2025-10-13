import BackButton from "@/components/BackButton";
import GlassCard from "@/components/GlassCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import LottieView from 'lottie-react-native';
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Camera = () => {
    const router = useRouter();
    const [image, setImage] = React.useState<string | null>(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [9, 16],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setTimeout(() => {
                setImage(null);
                router.push('/(closet)/ImageBg');
            }, 3000);
        }
    };

    const openCamera = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setTimeout(() => {
                setImage(null);
                router.push('/(closet)/ImageBg');
            }, 3000);
        }
    };

    return (
        <ScreenWrapper>
            {!image ? (
                <View style={{ flex: 1 }}>
                    {/* Back Button */}
                    <Pressable
                        onPress={() => router.push('/(closet)/Home')}
                        style={styles.backButton}
                    >
                        <BackButton />
                        <Text style={styles.backText}>Back</Text>
                    </Pressable>

                    {/* Top Text */}
                    <Text style={styles.title}>Capture your outfit</Text>
                    <View style={styles.contentWrapper}>

                        {/* Centered Buttons */}
                        <View style={styles.buttonRow}>
                            <GlassCard
                                size="small"
                                glassProps={{ glassEffectStyle: 'clear' }}
                                onPress={pickImage}
                                cardStyle={{ borderRadius: 10 }}
                            >
                                <Image
                                    source={require('../../assets/image.png')}
                                    resizeMode="stretch"
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonText}>Photos</Text>
                            </GlassCard>

                            <GlassCard
                                size="small"
                                glassProps={{ glassEffectStyle: 'clear' }}
                                onPress={openCamera}
                                cardStyle={{ borderRadius: 10 }}
                            >
                                <Image
                                    source={require('../../assets/camera.png')}
                                    resizeMode="stretch"
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonText}>Camera</Text>
                            </GlassCard>
                        </View>
                    </View>
                </View>
            ) : (
                <View style={styles.imageContainer}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={{ uri: image }}
                            style={styles.imageOriginal}
                            resizeMode="contain"
                        />
                        <View style={styles.overlayOnImage}>
                            <LottieView
                                source={require('../../assets/loadingInDot.json')}
                                autoPlay
                                loop
                                style={{ width: 100, height: 100, marginBottom: -10 }}
                            />
                            <Text style={{ fontSize: 16, color: "#a0ddff", alignItems: 'center' }}>Highlighting your outfit…</Text>
                        </View>
                    </View>
                </View>

            )}
        </ScreenWrapper>
    );
};

export default Camera;

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    backText: {
        fontSize: 20,
        color: 'white',
    },
    contentWrapper: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 100,
    },
    title: {
        color: 'white',
        fontSize: 27,
        padding: 20
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    icon: {
        width: 50,
        height: 45,
    },
    buttonText: {
        fontSize: 18,
        color: '#a0ddff',
        marginTop: 10,
        textAlign: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    imageWrapper: {
        width: '90%',
        aspectRatio: 1,
        position: 'relative',
    },

    imageOriginal: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },

    overlayOnImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 15,
    },




});
