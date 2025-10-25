// import BackButton from "@/components/BackButton";
// import GlassButton from "@/components/GlassButton";
// import ScreenWrapper from "@/components/ScreenWrapper";
// import { colors } from "@/constants/theme";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { useRouter } from "expo-router";
// import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";


// const Detail = () => {
//     const router = useRouter();
//     return (
//         <ScreenWrapper>

//             <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => router.push('/(closet)/ImageBg')}>
//                 <BackButton />
//                 <Text style={{ fontSize: 18, color: 'white' }}>Back</Text>
//             </Pressable>

//             <View style={{ alignItems: 'center', }}>
//                 <View style={{ width: 180, height: 180, marginBottom: 10 }}>
//                     <Image source={require('../../assets/bgrm.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
//                 </View>
//             </View>

//             <View style={{
//                 height: '100%',
//                 width: '100%',
//                 backgroundColor: 'rgba(185, 185, 185, 0.1)',
//                 borderWidth: 1,
//                 borderColor: 'rgba(185, 185, 185, 0.3)',
//                 borderRadius: 10,
//                 padding: 10

//             }}>
//                 <View style={{ alignItems: 'center', padding: 10 }}>
//                     <Text style={{ color: 'white', fontSize: 16 }}>Review Item</Text>
//                 </View>

//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 15 }}>
//                     {/* Categories   */}
//                     <View style={{ flexDirection: 'flex', justifyContent: 'space-between', gap: 20 }}>
//                         <View>
//                             <Text style={styles.title}>Categories</Text>
//                             <View style={styles.itemCon}>
//                                 <View style={{ backgroundColor: colors.uranianBlue, borderRadius: 10 }}>
//                                     <Text style={{ fontSize: 15, padding: 10 }}>Outerwear</Text>
//                                 </View>
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color={colors.white} />
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Fashion Styles</Text>
//                             <View style={styles.itemCon}>
//                                 <View style={{ backgroundColor: colors.uranianBlue, borderRadius: 10 }}>
//                                     <Text style={{ fontSize: 15, padding: 10 }}>Casual</Text>
//                                 </View>
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Weather Conditions</Text>
//                             <View style={styles.itemCon}>
//                                 <View style={{ backgroundColor: colors.uranianBlue, borderRadius: 10 }}>
//                                     <Text style={{ fontSize: 15, padding: 10 }}>Cold&Dry</Text>
//                                 </View>
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Price(MMK)</Text>
//                             <View style={styles.itemCon}>
//                                 {/* <View style={{ backgroundColor: colors.uranianBlue, borderRadius: 10 }}>
//                             <Text style={{ fontSize: 15, padding: 10 }}>Cold&Dry</Text>
//                         </View> */}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                     <Text style={{ color: colors.uranianBlue }}>Add Price</Text>
//                                 </GlassButton>
//                             </View>
//                         </View>
//                     </View>


//                     {/* Fashions and Sizes */}
//                     <View style={{ flexDirection: 'flex', justifyContent: 'space-between', gap: 10 }}>
//                         <View>
//                             <Text style={styles.title}>Colors</Text>
//                             <View style={styles.itemCon}>
//                                 {['Navy Blue', 'White'].map((color, index) => (
//                                     <View key={index} style={{ backgroundColor: colors.uranianBlue, borderRadius: 10 }}>
//                                         <Text style={{ fontSize: 15, padding: 10 }}>{color}</Text>
//                                     </View>
//                                 ))}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Sizes</Text>
//                             <View style={styles.itemCon}>
//                                 {/* <View style={{ backgroundColor: colors.uranianBlue, borderRadius: 10 }}>
//                                     <Text style={{ fontSize: 15, padding: 10 }}>Outerwear</Text>
//                                 </View> */}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                     <Text style={{ color: colors.uranianBlue, fontSize: 15 }}>Add Size</Text>
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Brand</Text>
//                             <View style={styles.itemCon}>
//                                 {/* <View style={{ backgroundColor: colors.uranianBlue, borderRadius: 10 }}>
//                                     <Text style={{ fontSize: 15, padding: 10 }}>Outerwear</Text>
//                                 </View> */}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                     <Text style={{ color: colors.uranianBlue }}>Add Brand</Text>
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Price(MMK)</Text>
//                             <View style={styles.itemCon}>
//                                 {/* <View style={{ backgroundColor: colors.uranianBlue, borderRadius: 10 }}>
//                             <Text style={{ fontSize: 15, padding: 10 }}>Cold&Dry</Text>
//                         </View> */}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                     <Text style={{ color: colors.uranianBlue }}>Add Price</Text>
//                                 </GlassButton>
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//                 <TouchableOpacity
//                     style={{ backgroundColor: colors.white, marginTop: 15, width: '100%', paddingVertical: 12, borderRadius: 24 }}
//                     activeOpacity={0.8}
//                 >
//                     <Text style={{ fontWeight: "bold", color: colors.midnightNavy, textAlign: "center", fontSize: 16 }}>
//                         Save
//                     </Text>
//                 </TouchableOpacity>
//             </View>




//         </ScreenWrapper >
//     )
// }
// export default Detail;

// const styles = StyleSheet.create({
//     glassBtn: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: 3,
//         backgroundColor: 'rgba(185, 185, 185, 0.1)',
//         borderWidth: 1,
//         borderColor: 'rgba(185, 185, 185, 0.3)',
//         borderRadius: 10,
//         padding: 8
//     },
//     title: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 6
//     },
//     itemCon: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         gap: 4
//     }
// })

import BackButton from "@/components/BackButton";
import GlassButton from "@/components/GlassButton";
import GlassCard from "@/components/GlassCard";
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
    price: string[];
}

const Detail: React.FC<DataType> = () => {
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
        price: [],
    });

    const handleUpdateData = (title: keyof DataType, items: string[]) => {
        setData(prevData => ({
            ...prevData,
            [title]: items
        }));
    };


    const handleAddPress = (addText: any, title: string) => {
        console.log(addText);
        setTitleName(title);
        setModalVisible(true);
    };

    const renderItem = (title: string, item: string, addText = null) => {
        if (item === "ADD_BUTTON") {
            return (
                <GlassButton
                    size="small"
                    glassProps={{
                        glassEffectStyle: 'clear'
                    }}
                    buttonStyle={{
                        borderRadius: 10, flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 10
                    }}
                    onPress={() => handleAddPress(addText, title)}>
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

    const renderSection = (title: string, data: any, addText: any) => {
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
            <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
                onPress={() => router.push("/(closet)/ImageBg")}>
                <BackButton />
                <Text style={{ fontSize: 18, color: colors.white, marginLeft: 4 }}>Back</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                {/* rm bg photo show */}
                <View style={{ alignItems: "center", }}>
                    <Image
                        source={require("../../assets/bgrm.png")}
                        style={{
                            width: '100%',
                            height: height * 0.28,
                            resizeMode: "contain",
                        }}
                    />
                </View>

                {/* Glass Card  */}
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
                        <View style={{ alignItems: "center", padding: 10, }}>
                            <Text style={{ color: colors.white, fontSize: 16 }}>Review Item</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between" }}>
                            {/* Left Column */}
                            <View style={{ flex: 1, marginRight: 8 }}>
                                {renderSection("Categories", DATA.categories, null)}
                                {renderSection("Fashion Styles", DATA.styles, null)}
                                {renderSection("Weather Conditions", DATA.weather, null)}
                                {renderSection("Price(MMK)", DATA.price, "Add Price")}
                            </View>

                            {/* Right Column */}
                            <View style={{ flex: 1, marginLeft: 8 }}>
                                {renderSection("Colors", DATA.colors, null)}
                                {renderSection("Sizes", DATA.sizes, "Add Size")}
                                {renderSection("Brand", DATA.brand, "Add Brand")}
                            </View>
                        </View>

                        {/* Save Btn */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: colors.white,
                                marginTop: 10,
                                width: "100%",
                                paddingVertical: 12,
                                borderRadius: 24,
                            }}
                            activeOpacity={0.8}
                            onPress={() => router.push('/(closet)/Collection')}>
                            <Text
                                style={{
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
            <ModalSlide DATA={DATA} onAddNewItem={handleUpdateData} titleName={titleName} modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
