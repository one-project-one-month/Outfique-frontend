import BackButton from "@/components/BackButton";
import GlassButton from "@/components/GlassButton";
import GlassCard from "@/components/GlassCard";
import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import ModalSlide from "./ModalSlide";

interface DataType {
    categories: string[];
    styles: string[];
    weather: string[];
    colors: string[];
    sizes: string[];
    brand: string[];
    price: number;
}

const Detail: React.FC = () => {
    const router = useRouter();
    const { height } = useWindowDimensions();

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [titleName, setTitleName] = useState<string>('');

    const [DATA, setData] = useState<DataType>({
        categories: ["Outerwear"],
        styles: ["Casual"],
        weather: ["Cold&Dry"],
        colors: ["Black", "White"],
        sizes: [],
        brand: [],
        price: 0,
    });

    const handleUpdateData = (title: keyof DataType, items: string[] | number) => {
        setData(prevData => ({
            ...prevData,
            [title]: items
        }));
    };

    const handleAddPress = (addText: string, title: string) => {
        setTitleName(title);
        setModalVisible(true);
    };

    const renderItem = (title: string, item: string, addText: string | null = null) => {
        if (item === "ADD_BUTTON") {
            return (
                <GlassButton
                    size="small"
                    glassProps={{ glassEffectStyle: 'clear' }}
                    buttonStyle={{
                        borderRadius: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 10
                    }}
                    onPress={() => handleAddPress(addText || '', title)}
                >
                    <AntDesign name="plus" size={17} color={colors.white} />
                    {addText && <Text style={{ color: colors.uranianBlue, marginLeft: 3 }}>{addText}</Text>}
                </GlassButton>
            );
        }
        return (
            <View style={{ backgroundColor: colors.uranianBlue, borderRadius: 10, padding: 10 }}>
                <Text style={{ fontSize: 15 }}>{item}</Text>
            </View>
        );
    };

    const renderSection = (title: string, data: string[], addText: string | null) => {
        const flatData = [...data, "ADD_BUTTON"];
        return (
            <View style={{ marginBottom: 15 }}>
                <Text style={styles.title}>{title}</Text>
                <FlatList
                    data={flatData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => renderItem(title, item, addText)}
                    ItemSeparatorComponent={() => <View style={{ width: 3 }} />}
                />
            </View>
        );
    };

    return (
        <ScreenWrapper>

            {/* Modal */}
            <ModalSlide
                DATA={DATA}
                onAddNewItem={handleUpdateData}
                titleName={titleName}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            {/* Back Button */}
            <Header title="Back" leftIcon={<BackButton />} style={{
                justifyContent: 'flex-start',
                paddingLeft: 70,
                gap: 8
            }} />

            <View style={{ flex: 1 }}>
                {/* Background Image */}
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require("../../assets/bgrm.png")}
                        style={{
                            width: '100%',
                            height: height * 0.28,
                            resizeMode: "contain",
                        }}
                    />
                </View>

                {/* Glass Card */}
                <GlassCard
                    size="large"
                    glassProps={{ glassEffectStyle: 'clear' }}
                    cardStyle={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 10,
                        borderRadius: 10,
                        width: "100%",
                        height: height * 0.5,
                        opacity: modalVisible ? 0.2 : 1
                    }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        style={{ width: '100%' }}
                    >
                        <View style={{ alignItems: "center", padding: 10 }}>
                            <Text style={{ color: colors.white, fontSize: 16 }}>Review Item</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between" }}>
                            {/* Left Column */}
                            <View style={{ flex: 1, marginRight: 8 }}>
                                {renderSection("Categories", DATA.categories, null)}
                                {renderSection("Fashion Styles", DATA.styles, null)}
                                {renderSection("Weather Conditions", DATA.weather, null)}

                                {/* Price Section */}
                                <View style={{ marginBottom: 15 }}>
                                    <Text style={styles.title}>Price(MMK)</Text>
                                    <GlassButton
                                        size="small"
                                        glassProps={{ glassEffectStyle: 'clear' }}
                                        buttonStyle={{
                                            borderRadius: 10,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            paddingHorizontal: 10,
                                        }}
                                        onPress={() => handleAddPress("Add Price", "Price(MMK)")}
                                    >
                                        <AntDesign name="plus" size={17} color={colors.white} />
                                        <Text style={{ color: colors.uranianBlue, marginLeft: 3 }}> {DATA.price && DATA.price > 0 ? "Edit Price" : "Add Price"}</Text>
                                    </GlassButton>
                                    {DATA.price > 0 && (
                                        <View style={{ marginTop: 5, backgroundColor: colors.uranianBlue, borderRadius: 10, padding: 10 }}>
                                            <Text style={{ fontSize: 15 }}>{DATA.price} MMK</Text>
                                        </View>
                                    )}
                                </View>
                            </View>

                            {/* Right Column */}
                            <View style={{ flex: 1, marginLeft: 8 }}>
                                {renderSection("Colors", DATA.colors, null)}
                                {renderSection("Sizes", DATA.sizes, "Add Size")}
                                {renderSection("Brand", DATA.brand, "Add Brand")}
                            </View>
                        </View>

                        {/* Save Button */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: colors.white,
                                marginTop: 10,
                                width: "100%",
                                paddingVertical: 12,
                                borderRadius: 24,
                            }}
                            activeOpacity={0.8}
                            onPress={() => router.push('/(closet)/Collection')}
                        >
                            <Text style={{
                                fontWeight: "bold",
                                color: colors.midnightNavy,
                                textAlign: "center",
                                fontSize: 16,
                            }}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </GlassCard>
            </View>
        </ScreenWrapper>
    );
};

export default Detail;

const styles = StyleSheet.create({
    glassBtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        backgroundColor: "rgba(185, 185, 185, 0.1)",
        borderWidth: 1,
        borderColor: "rgba(185, 185, 185, 0.3)",
        borderRadius: 10,
        padding: 8,
    },
    title: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
    },
});
