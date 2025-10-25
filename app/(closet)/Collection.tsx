import BackButton from "@/components/BackButton";
import GlassButton from "@/components/GlassButton";
import GlassInput from "@/components/GlassInput";
import { colors } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Tabs from '../(tabs)/index';
import Category from "./factor/Category";


const mockItems = [
    { id: 1, category: "Tops", image: require("../../assets/cloth/top/crop_top.png") },
    { id: 2, category: "Tops", image: require("../../assets/cloth/top/jean_top.png") },
    { id: 3, category: "Tops", image: require("../../assets/cloth/top/tshirt.webp") },
    { id: 4, category: "Bottoms", image: require("../../assets/cloth/bottom/blue_jean_short.webp") },
    { id: 5, category: "Bottoms", image: require("../../assets/cloth/bottom/jean_long.png") },
    { id: 6, category: "Bottoms", image: require("../../assets/cloth/bottom/orange_skirt.png") },
    { id: 7, category: "Bottoms", image: require("../../assets/cloth/bottom/pink_skirt.webp") },
    { id: 8, category: "Dress & JumpSuit", image: require("../../assets/cloth/dress/dress_white.png") },
    { id: 8, category: "Dress & JumpSuit", image: require("../../assets/cloth/dress/jean_dress.png") },
    { id: 9, category: "Dress & JumpSuit", image: require("../../assets/cloth/dress/blue_dress.webp") },
];

const Collection = () => {
    const [activeCategory, setActiveCategory] = React.useState("All");
    const router = useRouter();

    const isBlackBackground = (index: number) => {
        const row = Math.floor(index / 2);
        const col = index % 2;
        return (row % 2 === 0 && col === 0) || (row % 2 === 1 && col === 1);
    };


    const filteredItems =
        activeCategory === "All"
            ? mockItems
            : mockItems.filter((item) => item.category === activeCategory);

    return (
        <Tabs>
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.push('/(closet)/Detail')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <BackButton />
                <Text style={{ fontSize: 20, color: 'white' }}>Digital Closet</Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: '100%' }}>
                    {/* Search and Filter Row */}
                    <View style={{ flex: 1 }}>
                        <GlassInput
                            placeholder="Search"
                            autoCapitalize="none"
                            size="small"
                            glassProps={{ glassEffectStyle: 'clear' }}
                            leftIcon={<Feather name="search" size={20} color="#a0ddff" />}
                            inputStyle={{ width: '100%', borderRadius: 10, padding: 10, paddingLeft: 40 }}
                        />
                    </View>

                    {/* Filter button */}
                    <GlassButton
                        size="small"
                        glassProps={{
                            glassEffectStyle: 'clear'
                        }}
                        buttonStyle={{ borderRadius: 10, marginLeft: 10 }}
                    >
                        <Image style={{ width: 27, height: 27, tintColor: colors.uranianBlue }} source={require('../../assets/filter.png')} />
                    </GlassButton>

                </View>

                <View>
                    <Category setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
                </View>

                <View style={{ marginBottom: 70 }}>
                    {/* Image Grid */}
                    <FlatList
                        data={filteredItems}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: 15 }}
                        columnWrapperStyle={{ justifyContent: "space-between" }}
                        renderItem={({ item, index }) => (
                            <View style={[
                                styles.imageBox,
                                { backgroundColor: isBlackBackground(index) ? colors.midnightNavy : colors.moonlightGray },
                            ]}>
                                <Image
                                    source={item.image}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </View>
                        )}
                    />
                </View>
            </View>
        </Tabs>
    );
};
export default Collection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 15,
        gap: 10
    },
    imageBox: {
        width: "48%",
        marginBottom: 10,
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 16,
        resizeMode: "cover",
        padding: 10
    },
});