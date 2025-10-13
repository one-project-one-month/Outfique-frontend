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
//                                 <View style={{ backgroundColor: '#a0ddff', borderRadius: 10 }}>
//                                     <Text style={{ fontSize: 15, padding: 10 }}>Outerwear</Text>
//                                 </View>
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Fashion Styles</Text>
//                             <View style={styles.itemCon}>
//                                 <View style={{ backgroundColor: '#a0ddff', borderRadius: 10 }}>
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
//                                 <View style={{ backgroundColor: '#a0ddff', borderRadius: 10 }}>
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
//                                 {/* <View style={{ backgroundColor: '#a0ddff', borderRadius: 10 }}>
//                             <Text style={{ fontSize: 15, padding: 10 }}>Cold&Dry</Text>
//                         </View> */}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                     <Text style={{ color: '#a0ddff' }}>Add Price</Text>
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
//                                     <View key={index} style={{ backgroundColor: '#a0ddff', borderRadius: 10 }}>
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
//                                 {/* <View style={{ backgroundColor: '#a0ddff', borderRadius: 10 }}>
//                                     <Text style={{ fontSize: 15, padding: 10 }}>Outerwear</Text>
//                                 </View> */}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                     <Text style={{ color: '#a0ddff', fontSize: 15 }}>Add Size</Text>
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Brand</Text>
//                             <View style={styles.itemCon}>
//                                 {/* <View style={{ backgroundColor: '#a0ddff', borderRadius: 10 }}>
//                                     <Text style={{ fontSize: 15, padding: 10 }}>Outerwear</Text>
//                                 </View> */}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                     <Text style={{ color: '#a0ddff' }}>Add Brand</Text>
//                                 </GlassButton>
//                             </View>
//                         </View>

//                         <View>
//                             <Text style={styles.title}>Price(MMK)</Text>
//                             <View style={styles.itemCon}>
//                                 {/* <View style={{ backgroundColor: '#a0ddff', borderRadius: 10 }}>
//                             <Text style={{ fontSize: 15, padding: 10 }}>Cold&Dry</Text>
//                         </View> */}
//                                 <GlassButton style={styles.glassBtn}>
//                                     <AntDesign name="plus" size={18} color='white' />
//                                     <Text style={{ color: '#a0ddff' }}>Add Price</Text>
//                                 </GlassButton>
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//                 <TouchableOpacity
//                     style={{ backgroundColor: '#FFFFFF', marginTop: 15, width: '100%', paddingVertical: 12, borderRadius: 24 }}
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
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DATA = {
    categories: ["Outerwear"],
    styles: ["Casual"],
    weather: ["Cold&Dry"],
    colors: ["Navy Blue", "White"],
    sizes: [],
    brand: [],
    price: [],
};

const Detail = () => {
    const router = useRouter();

    const renderItem = (item, addText = null) => {
        if (item === "ADD_BUTTON") {
            return (
                <GlassButton style={styles.glassBtn}>
                    <AntDesign name="plus" size={17} color="white" />
                    {addText && <Text style={{ color: "#a0ddff", marginLeft: 4 }}>{addText}</Text>}
                </GlassButton>
            );
        }
        return (
            <View style={{ backgroundColor: "#a0ddff", borderRadius: 10, padding: 10 }}>
                <Text style={{ fontSize: 15 }}>{item}</Text>
            </View>
        );
    };

    const renderSection = (title, data, addText) => {
        const flatData = [...data, "ADD_BUTTON"]; // always append the + button
        return (
            <View style={{ marginBottom: 15 }}>
                <Text style={styles.title}>{title}</Text>
                <FlatList
                    data={flatData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => renderItem(item, addText)}
                    ItemSeparatorComponent={() => <View style={{ width: 3 }} />}
                />
            </View>
        );
    };

    return (
        <ScreenWrapper>
            <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}
                onPress={() => router.push("/(closet)/ImageBg")}
            >
                <BackButton />
                <Text style={{ fontSize: 18, color: "white", marginLeft: 4 }}>Back</Text>
            </TouchableOpacity>

            <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Image
                    source={require("../../assets/bgrm.png")}
                    style={{ width: 180, height: 180, resizeMode: "contain" }}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    width: "100%",
                    backgroundColor: "rgba(185, 185, 185, 0.1)",
                    borderWidth: 1,
                    borderColor: "rgba(185, 185, 185, 0.3)",
                    borderRadius: 10,
                    padding: 10,
                }}
            >
                <View style={{ alignItems: "center", padding: 10, }}>
                    <Text style={{ color: "white", fontSize: 16 }}>Review Item</Text>
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

                <TouchableOpacity
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginTop: 13,
                        width: "100%",
                        paddingVertical: 12,
                        borderRadius: 24,
                    }}
                    activeOpacity={0.8}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: colors.midnightNavy,
                            textAlign: "center",
                            fontSize: 16,
                        }}
                    >
                        Save
                    </Text>
                </TouchableOpacity>
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
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
    },
});
